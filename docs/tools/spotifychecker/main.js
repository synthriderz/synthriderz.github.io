const clientId = "a1d54513211d4fa1aa16100d70ffabb2";
const redirectUri = window.location.origin + window.location.pathname.replace(/\/$/, "");
const scopes = ["playlist-read-private", "playlist-read-collaborative"];
let foundSongs = [];
let selectedPlaylistName = "Spotify Import";

function logout() {
    sessionStorage.removeItem("spotify_access_token");
    window.location.href = redirectUri;
}

function generateCodeVerifier() {
    const array = new Uint32Array(56);
    crypto.getRandomValues(array);
    return Array.from(array, (dec) => ("0" + dec.toString(16)).slice(-2)).join("");
}

async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return btoa(String.fromCharCode(...new Uint8Array(digest)))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}

async function startLogin() {
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    sessionStorage.setItem("code_verifier", codeVerifier);
    const authUrl =
        `https://accounts.spotify.com/authorize` + `?client_id=${clientId}` + `&response_type=code` + `&redirect_uri=${encodeURIComponent(redirectUri)}` + `&scope=${encodeURIComponent(scopes.join(" "))}` + `&code_challenge_method=S256` + `&code_challenge=${codeChallenge}`;
    window.location.href = authUrl;
}

async function exchangeToken(code) {
    const codeVerifier = sessionStorage.getItem("code_verifier");
    const body = new URLSearchParams({
        client_id: clientId,
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier,
    });
    const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: body.toString(),
    });
    const data = await res.json();
    if (data.access_token) {
        sessionStorage.setItem("spotify_access_token", data.access_token);
        return data.access_token;
    } else {
        throw new Error("Token exchange failed");
    }
}

async function loadPlaylists(token) {
    const res = await fetch("https://api.spotify.com/v1/me/playlists", {
        headers: {Authorization: `Bearer ${token}`},
    });
    const data = await res.json();
    const select = document.getElementById("playlistSelect");
    select.innerHTML = "";
    data.items.forEach((p) => {
        const opt = document.createElement("option");
        opt.value = p.id;
        opt.textContent = p.name;
        opt.dataset.name = p.name;
        select.appendChild(opt);
    });
    select.onchange = () => {
        selectedPlaylistName = select.options[select.selectedIndex].dataset.name || "Spotify Import";
    };
    select.onchange();
}

async function checkPlaylist() {
    const token = sessionStorage.getItem("spotify_access_token");
    const playlistId = document.getElementById("playlistSelect").value;
    const progress = document.getElementById("progressBar");
    const list = document.getElementById("songList");
    list.innerHTML = "";
    progress.style.width = "0%";
    foundSongs = [];

    let next = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=100`;
    let tracks = [];
    while (next) {
        const res = await fetch(next, {headers: {Authorization: `Bearer ${token}`}});
        const data = await res.json();
        tracks = tracks.concat(data.items.filter((item) => item.track).map((item) => item.track));
        next = data.next;
    }

    for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];
        const li = document.createElement("li");

        const header = document.createElement("div");
        header.className = "song-header";

        const titleSpan = document.createElement("span");
        titleSpan.className = "song-title";
        titleSpan.textContent = `${track.name} - ${track.artists.map((a) => a.name).join(", ")}`;

        const statusSpan = document.createElement("span");
        statusSpan.className = "status checking";
        statusSpan.textContent = " 🔍";

        header.appendChild(titleSpan);
        header.appendChild(statusSpan);
        li.appendChild(header);

        const links = document.createElement("div");
        links.className = "song-links";
        li.appendChild(links);

        list.appendChild(li);

        progress.style.width = `${((i + 1) / tracks.length) * 100}%`;
        await new Promise((resolve) => setTimeout(resolve, 200));

        const vercelProxyBaseUrl = 'https://synthriderz-vercel-proxy.vercel.app';
        const songtitle = track.name;
        const artist = track.artists.map((a) => a.name).join(", ");
        const query = `title=${encodeURIComponent(songtitle)}&artist=${encodeURIComponent(artist)}`;

        const res = await fetch(`${vercelProxyBaseUrl}/api/check?${query}`);
        const results = await res.json();

        statusSpan.classList.remove("checking");
        if (Array.isArray(results) && results.length > 0) {
            const beatmap = results[0];
            statusSpan.classList.add("available");
            statusSpan.textContent = " ✅";

            const link = document.createElement("a");
            link.href = `https://synthriderz.com/beatmaps/${beatmap.id}`;
            link.textContent = "🔗";
            link.target = "_blank";
            link.className = "link-icon";
            links.appendChild(link);

            foundSongs.push(beatmap);

            if (results.length > 1) {
                for (let alt = 1; alt < results.length; alt++) {
                    const altLink = document.createElement("a");
                    altLink.href = `https://synthriderz.com/beatmaps/${results[alt].id}`;
                    altLink.textContent = "🌟";
                    altLink.title = `Alternative: ${results[alt].title}`;
                    altLink.target = "_blank";
                    altLink.className = "link-icon";
                    links.appendChild(altLink);
                }
            }
        } else {
            statusSpan.classList.add("unavailable");
            statusSpan.textContent = " ❌";
        }
    }
}

function exportPlaylist() {
    const timestamp = Math.floor(Date.now() / 1000);
    const playlist = {
        namePlaylist: selectedPlaylistName,
        description: "Generated by SynthRiderz Playlist Checker",
        gradientTop: "#444",
        gradientDown: "#222",
        colorTitle: "#FFFFFF",
        colorTexture: "#464956",
        SelectedTexture: 0,
        SelectedIconIndex: 0,
        creationDate: timestamp,
        dataString: foundSongs.map((song) => ({
            hash: song.hash,
            name: song.title,
            author: song.artist,
            beatmapper: song.mapper,
            difficulty: 5,
            trackDuration: 0,
            addedTime: timestamp,
        })),
    };

    const blob = new Blob([JSON.stringify(playlist, null, 2)], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedPlaylistName.replace(/[^a-z0-9]/gi, "_")}.playlist`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

async function initialize() {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const token = sessionStorage.getItem("spotify_access_token");

    if (token) {
        document.getElementById("landing").classList.add("hidden");
        document.getElementById("playlistUI").classList.remove("hidden");
        await loadPlaylists(token);
        return;
    }

    if (code) {
        try {
            const newToken = await exchangeToken(code);
            window.history.replaceState({}, document.title, redirectUri);
            document.getElementById("landing").classList.add("hidden");
            document.getElementById("playlistUI").classList.remove("hidden");
            await loadPlaylists(newToken);
        } catch (err) {
            alert("Login failed: " + err.message);
        }
    }
}

document.getElementById("loginBtn").addEventListener("click", startLogin);
initialize();
