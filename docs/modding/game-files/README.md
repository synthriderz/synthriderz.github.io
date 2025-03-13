# Synth Riders File Formats

Currently only contains the file formats of the SteamVR version. Many of the most interesting/relevant files exist in the Quest version as well.

## SteamVR Game Directory

Content of `C:\Program Files (x86)\Steam\steamapps\common\`

- 📂 __[SynthRiders](/modding/game-files/SynthRiders/README.md)__
    - 📂 __Avatars__[Changed with v3 in 2024: Moved into `SynthRidersUC\Avatars` [see release notes](https://www.reddit.com/r/SynthRiders/comments/1f4a15m/open_beta_synth_riders_v3x_now_available_on_steam/)]
    - 📂 __CustomProfiles__ [Changed with v3 in 2024: Moved into `SynthRidersUC\CustomProfiles` [see release notes](https://www.reddit.com/r/SynthRiders/comments/1f4a15m/open_beta_synth_riders_v3x_now_available_on_steam/)]
    - 📂 __CustomSongs__ [Changed with v3 in 2024: Moved into `SynthRidersUC\CustomSongs` [see release notes](https://www.reddit.com/r/SynthRiders/comments/1f4a15m/open_beta_synth_riders_v3x_now_available_on_steam/)]
    - 📂 __CustomStages__ [Changed with v3 in 2024: Moved into `SynthRidersUC\CustomStages` [see release notes](https://www.reddit.com/r/SynthRiders/comments/1f4a15m/open_beta_synth_riders_v3x_now_available_on_steam/)]
    - 📄 ErrorLog.txt [Changed with v3 in 2024: Moved and renamed into `SynthRidersUC\AppLog.txt` [see release notes](https://www.reddit.com/r/SynthRiders/comments/1f4a15m/open_beta_synth_riders_v3x_now_available_on_steam/)]
    - 📂 __[MelonLoader](/modding/game-files/MelonLoader/README.md)__
        - Files and Directories related to MelonLoader. Only present if MelonLoader is installed to use Mods.
    - 📂 __[Mods](/modding/game-files/Mods/README.md)__
        - Directory to put Synth Rider Mods in(stored as `<Name>.ddl` files) Only present if MelonLoader and Mods are installed.
    - 📂 __[Playlist](/modding/game-files/Playlist/README.md)__
        - 📄 [000002\_\_360WildSpin.playlist](/modding/game-files/Playlist/000002__360WildSpin.playlist.md)
        - [...more files of the same type...]
    - 📂 __[Plugins](/modding/game-files/Plugins/README.md)__ [MelonLoader Plugins. Only present if MelonLoader is installed to use Mods.]
    - 📂 __[Profiles](/modding/game-files/Profiles/README.md)__
        - 📄 [000000\_\_partyyyy.synthprofile](/modding/game-files/Profiles/000000__partyyyy.synthprofile.md)
    - 📄 SynthDB [Changed with v3 in 2024: Moved into `SynthRidersUC\SynthDB` [see release notes](https://www.reddit.com/r/SynthRiders/comments/1f4a15m/open_beta_synth_riders_v3x_now_available_on_steam/)]
    - 📄 [SynthRiders.exe](/modding/game-files/SynthRiders.exe.md)
    - 📂 __[SynthRidersUC](/modding/game-files/SynthRidersUC/README.md)__
        - 📄 [AppLog.txt](/modding/game-files/SynthRidersUC/AppLog.txt.md)
        - 📂 __[Avatars](/modding/game-files/SynthRidersUC/Avatars/README.md)__ [Custom avatars. See wiki: [custom-avatars](/modeling/custom-avatars/)]
            - 📄 [Synthia.vrm](/modding/game-files/SynthRidersUC/Avatars/Synthia.vrm.md) [ VRM file for a custom avatar]
            - 📄 [Synthia.vrm.json](/modding/game-files/SynthRidersUC/Avatars/Synthia.vrm.json.md) [config file for each VRM avatar]
            - [custom VRM avatars]
            - [...more files of the same type...]
        - 📂 __[CustomDecal](/modding/game-files/SynthRidersUC/CustomDecal/README.md)__ [Custom platform textures. See wiki: [custom-textures](/modeling/custom-textures/)]
        - 📂 __[CustomIndicators](/modding/game-files/SynthRidersUC/CustomIndicators/README.md)__
            - [custom controller textures]
        - 📂 __[CustomPlaylists](/modding/game-files/SynthRidersUC/CustomPlaylists/README.md)__
            - 📄 [[steam_autocloud.vdf](/modding/game-files/steam_autocloud.vdf.md))
        - 📂 __[CustomProfiles](/modding/game-files/SynthRidersUC/CustomProfiles/README.md)__
            - 📄 [[steam_autocloud.vdf](/modding/game-files/steam_autocloud.vdf.md))
        - 📂 __[CustomSongs](/modding/game-files/SynthRidersUC/CustomSongs/README.md)__
            - 📄 [1000\-Mapper\-Mapname.synth](/modding/game-files/SynthRidersUC/CustomSongs/1000-Disasterpiece-Vignette-Panacea-Blackblazon.synth.md) [Custom song file from synthriderz.com.(ID is used for leaderboards)]
            - [...more files of the same type...]
            - 📄 [Mapname.synth](/modding/game-files/SynthRidersUC/CustomSongs/ComeGo.synth.md) [Custom song file. Without ID; Usually used for custom songs that are not on synthriderz.com]
            - 📄 [DRAFT\-1828\-v1\-Mappername\-Mapname.synth](/modding/game-files/SynthRidersUC/CustomSongs/DRAFT-1848-v1-IkimonoGakari-Blue-Bird-TanjiroTheSlayer.synth.md) [Draft of a custom song file from synthriderz.com. (Uploaded and marked as draft)]
        - 📂 __CustomSounds__
            - [Files related to the [CustomSounds Mod](https://github.com/Goinn/CustomSounds). Only present if the CustomSounds Mod is installed)
        - 📂 __[CustomStages](/modding/game-files/SynthRidersUC/CustomStages/README.md)__
            - [Directory to put Custom Stages in (stored as `<Name>.synth` files.md)]
        - 📂 __[ImagesCache](/modding/game-files/SynthRidersUC/ImagesCache/README.md)__ [Cache for cover images of custom songs.]
            - 📄 001b37033e2354f130c6e1f9d51e7ad24ac0c272438f9af84d0556e2741a5a1b.png
                - [...more files of the same type...]
        - 📂 __[IndicatorTex](/modding/game-files/SynthRidersUC/IndicatorTex/README.md)__ [Custom controller orbs. See wiki: [custom-textures](/modeling/custom-textures/)]
        - 📄 [NmBlacklist.json](/modding/game-files/SynthRidersUC/NmBlacklist.json.md) [File related to [NoodleManagerX](https://github.com/tommaier123/NoodleManagerX). Only present if NoodleManagerX is used]
        - 📄 [NmDatabase.json](/modding/game-files/SynthRidersUC/NmDatabase.json.md) [File related to [NoodleManagerX](https://github.com/tommaier123/NoodleManagerX). Only present if NoodleManagerX is used]
        - 📂 __[Playlist](/modding/game-files/SynthRidersUC/Playlist/README.md)__
        - 📄 [SongStatus.txt](/modding/game-files/SynthRidersUC/SongStatus.txt.md) [Used to generate the SongStatus Information for Overlays]
        - 📄 [SongStatusImage.png](/modding/game-files/SynthRidersUC/SongStatusImage.png.md) [Used to generate the SongStatus Information for Overlays]
        - 📄 [SongStatusOutput.txt](/modding/game-files/SynthRidersUC/SongStatusOutput.txt.md) [Used to generate the SongStatus Information for Overlays]
        - 📄 [SynthDB](/modding/game-files/SynthRidersUC/SynthDB.md)
        - 📄 [e\_sqlite3.dll](/modding/game-files/SynthRidersUC/e_sqlite3.dll.md)
        - 📄 [rpm\_avatars.bin](/modding/game-files/SynthRidersUC/rpm_avatars.bin.md)
        - 📄 [songstatus](/modding/game-files/SynthRidersUC/songstatus.md)
        - 📄 [songstatus.html](/modding/game-files/SynthRidersUC/songstatus.html.md)
    - 📂 __[SynthRiders\_Data](SynthRiders\_Data/README.md)__
        - [game related files and directories that aren't relevant or only for advanced modding]
    - 📂 __[UserData](/modding/game-files/UserData/README.md)__ [MelonLoader Settings. Only present if MelonLoader is installed to use Mods.]
        - 📄 [Loader.cfg](/modding/game-files/UserData/Loader.cfg.md)
        - 📄 [MelonPreferences.cfg](/modding/game-files/UserData/MelonPreferences.cfg.md)
    - 📂 __UserLibs__ [MelonLoader Custom User Libraries. Only present if MelonLoader is installed to use Mods.]
    - 📄 [avatars.settings.bin](/modding/game-files/avatars.settings.bin.md)
    - 📄 [decal.bin](/modding/game-files/decal.bin.md)
    - 📄 [doorstop\_config.ini](/modding/game-files/doorstop_config.ini.md) [file related to [RaiPal Mod Manager](https://github.com/Raicuparta/rai-pal). Only present if RaiPal Mod Manager is used]
    - 📄 [favorites.bin](/modding/game-files/favorites.bin.md)
    - 📄 [partymode.bin](/modding/game-files/partymode.bin.md)
    - 📄 [played.bin](/modding/game-files/played.bin.md)
    - 📄 [settings.bin](/modding/game-files/settings.bin.md)
    - 📄 [songstats.bin](/modding/game-files/songstats.bin.md)
    - 📄 [steam_autocloud.vdf](/modding/game-files/steam_autocloud.vdf.md)
    - 📄 [strings.bin](/modding/game-files/strings.bin.md)
    - 📂 __tempExt__ [Cache for files of custom songs.]
    - 📄 [twitchcredentials.bin](/modding/game-files/twitchcredentials.bin.md) [Twitch credentials. Used for the built-in Twitch Integration.]
    - 📄 [twitchsettings.bin](/modding/game-files/twitchsettings.bin.md) [Twitch settings. Used for the built-in Twitch Integration.]
    - 📄 [version.dll](/modding/game-files/version.dll.md)

## extending the file tree/info

- see [create-filetree.md](/modding/file-formats/_wiki_internal/create-filetree.md) for instructions on how to generate the file tree
- see [file_template.md](/modding/file-formats/_wiki_internal/file_template.md) for a template to create new file pages
