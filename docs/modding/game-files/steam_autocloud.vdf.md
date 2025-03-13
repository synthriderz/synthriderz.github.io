# steam_autocloud.vdf

Status file for the Steam Cloud system that contains only the personal Steam ID.  
The actual sync status is stored in the `remotecache.vdf` file.

## Overview

| Detail                  |                                                                                                               |
|-------------------------|---------------------------------------------------------------------------------------------------------------|
| Absolute Path (SteamVR) | `C:\Program Files (x86)\Steam\steamapps\common\SynthRiders\<directories that get synced>\steam_autocloud.vdf` |
| Absolute Path (Quest)   | does NOT on Quest                                                                                             |
| File Format             | VDF                                                                                                           |
| Short Description       | Status file for the Steam Cloud                                                                               |

## steam_autocloud.vdf

## File Naming

File is always named `steam_autocloud.vdf` and located in every directory that gets synced with the Steam Cloud.

### Example File Name

- `C:\Program Files (x86)\Steam\steamapps\common\SynthRiders\SynthRidersUC\CustomProfiles\steam_autocloud.vdf`
- `C:\Program Files (x86)\Steam\steamapps\common\SynthRiders\SynthRidersUC\Avatars\steam_autocloud.vdf`

## File Content

Content is always the same and only contains the Steam ID of the user:

## File Format

````vdf
"steam_autocloud.vdf"
{
  "accountid"
  "<Steam ID>"
}

````

## remotecache.vdf

Contains the actual sync status of the files in the directory.

path: `C:\Program Files (x86)\Steam\userdata\<Steam ID>\885000\remotecache.vdf`

````vdf
"885000"
{
  "ChangeNumber"
  "221"
  "ostype"
  "0"
  "strings.bin"
{
  "root"
  "1"
  "size"
  "367606"
  "localtime"
  "1723567086"
  "time"
  "1723567084"
  "remotetime"
  "1723567084"
  "sha"
  "8c7bbf442113722308b905b50572b1c45c3bdf5c"
  "syncstate"
  "1"
  "persiststate"
  "0"
  "platformstosync2"
  "-1"
}
[... info for more files ...]
}
````

## Tools to edit the file

- Notepad
- Notepad++

### Related Mods/Tools/docs

- view synced files for Synth Riders in your Steam Account: https://store.steampowered.com/account/remotestorageapp/?appid=885000
