# Getting Started

# Downloading the beatmap editor

The [beatmap editor](https://store.steampowered.com/app/1121930/Synth_Riders_Beatmap_Editor/) is a free download on [Steam](https://store.steampowered.com/).

> There is an open beta available through the Steam interface, which gives you access to a few non-essential features. This version is not required. This guide uses the current beta in examples, so there may be small differences between these examples and your version if you are
> not using the beta.

# Setting up audio for your song

To set up your audio for use in the beatmap editor, download and install the free audio editing tool [Audacity](https://www.audacityteam.org/).

1. Launch Audacity.

2. In the top menu bar, select File > Open, and open the audio file for your song.

3. Make sure there is **at least two seconds** before the first note that you plan to map in this song. The editor does not let you place notes within the first two seconds of the audio. In most cases, you just need to add two seconds of silence at the start.

    - Press J to select the start of the audio.
    - In the top menu bar, select Generate > Silence...
    - Enter the amount of silence (usually 2.000 seconds) and click OK.
4. In the top menu bar, select File > Export > Export as OGG.

5. At the bottom of the window, set the quality to your desired number. We recommend **7**, since it results in good audio quality without being too large of a file.

6. Save this OGG file as a new copy, and remember where it is for later.

!> Never overwrite your original source audio, even if it was an OGG. You will need it if you have to make more edits after Exporting.

# Creating a new map in the editor

1. Launch the beatmap editor from Steam.
2. Click the **Play!** button on the Configuration screen that appears.
3. Select **EDIT MODE**, then **NEW BEATMAP**.
4. Fill in the fields on this screen.
    - **Artist name:** Name of the musician or band.
    - **Song name:** The song title.
    - **Track:** Click the magnifying glass on this field to browse your system for the .ogg file you prepared earlier.
    - **Mapper name:** Your name or online handle. Keep in mind that when you share this map, other players will see this name.
    - **Explicit lyrics:** If your song has explicit content, please tick off this checkbox so that other players are informed.
    - **Artwork:** Click the **Replace** button to select the image that appears next to this song in game. We recommend using the official art from the album or single release.
5. Click the **START** button when you're ready to start mapping!

# Finding and setting BPM and Start Offset

This will allow your beatmap to stay in sync with the music. The easiest way to find BPM (beats per minute, aka tempo) and Start Offset is with the software tool [ArrowVortex](https://cdn.discordapp.com/attachments/443569023951568906/662417326771273728/ArrowVortex.zip).

> The above link is a more convenient .zip version of the tool that is otherwise found on the [ArrowVortex website](https://arrowvortex.ddrnl.com/).

1. Launch ArrowVortex.
2. Select File > Open... from the top menu, and select the .ogg file you prepared for this map.
3. Select Tempo > Adjust Sync... from the top menu.
4. Click the **Find BPM** button. If this song has a steady tempo, there will either be one BPM shown, or multiple BPMs that are quite different from each other (but divide cleanly into each other in a few different ways: 1.5, 2, even 1.33 or 1.67).

> If there are several different BPMs that are off by small amounts, this song likely has a drifting tempo. We highly recommend using a song with a steady tempo for your first map, but if you're feeling brave, check out the [audio warping guide](/en/mapping/warping-tempo-drift).

!> If the song has large intentional BPM changes, it will be much more challenging to sync until the editor supports BPM changes. Syncing a map for these kinds of songs is involved, although it can be done without resorting to high precision note placement in the editor. Check
out the Advanced mapping guides to learn how to do this.

5. Select the BPM that seems the most correct (if you're unsure, just use the one with the highest %) and click the **Apply BPM** button.
6. If the **Music offset** field at the top of the window is negative, click the **Move first beat up** button until it is a positive number.
7. The BPM you selected is the one you should use for your map. Make a note of it, or just keep this window open.
8. The **Music offset** field is the Start Offset. Make a note of it, or just keep this window open.
9. Once you have the BPM and Start Offset, enter them into these fields at the upper left corner of the beatmap editor. Make sure to enter the offset in milliseconds, and verify that it's correct after clicking **SAVE**.

# Now start mapping!

You're ready to start mapping your song now. You can explore the editor at your own pace, or if you need a hand, check out the Beginner's guide to [Using the Editor](/en/mapping/using-the-editor/).
