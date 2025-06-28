# Installing Custom Content on Quest Secondary Accounts

> Learn how to manually install custom content onto Quest secondary account containers

Synth Riders does support App-Sharing and Secondary Accounts for OST and all DLC.  
It is now also possible to add custom content into a Secondary Container!  
<sub>Special thanks to <em>he_is_the_cat</em> for pointing out this method.</sub>

!> **For Experienced Users Only**  
This method is for users who are comfortable with downloading and moving files around on the Quest device.

## Requirements

Before continuing, make sure you have met each of the following prerequisites:

- **The secondary account must be registered as an Oculus Developer account.**
- **You must have SideQuest or another method of installing APK files onto the Quest device**
- Custom Songs **must be duplicated** across _both_ the primary account and the secondary account

## Install a File Manager

1. Using SideQuest, install an apk for a File Manager on the Quest’s Primary Account.  
   _We recommend [X-Plore by lonelycat](http://www.lonelycatgames.com/apps/xplore), as it comes with a web-based file manager, FTP server capabilities, and directly supports .zip files._
2. Switch to the Secondary Account.
3. Make sure you can access the File Manager under the `Library - Unknown Sources`

## Install Content

1. Download Custom Content through the Oculus browser  
   _Any downloaded content will end up in the `Downloads` folder on your Quest device_
2. Open your installed File Manager from the Unknown Sources area of the Library.
3. Navigate the left pane to `SynthRidersUC`
4. Navigate the right pane to `Downloads`.
5. If your content was downloaded in a `.zip` file, open the zip to see the included files.
6. Move the downloaded content files from the right pane into the correct folder on the left pane.  
   Make sure to install content in the correct subfolder based on the file type:

| Content Type     | Folder         | File Type                                         |
|------------------|----------------|---------------------------------------------------|
| **Custom Songs** | `CustomSongs`  | `.synth`                                          |
| **Stages**       | `CustomStages` | PC: `.stage` Quest: `.stagedroid` |
| **Playlists**    | `Playlist`     | `.playlist`                                       |

!> **Unzip first!**  
If you have downloaded any `.zip` content from the site, make sure to unzip it first before moving it to the correct locations above.  
You may then remove the original `.zip` file from your Quest
