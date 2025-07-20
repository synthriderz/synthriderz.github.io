# Installing Custom Content on Quest Secondary Accounts

> Learn how to manually install custom content onto Quest secondary account containers

Synth Riders supports App-Sharing and Secondary Accounts for OST and all DLC, but custom content is not shared.

Applications installed by the primary user are shared between all account users, but all other files are kept private for each account and are not accessible by other accounts.
- Custom Songs **must be duplicated** across _both_ the primary account and the secondary account

Quest does not support USB connectivity directly, but custom content may be made through other Quest applications.
<sub>Special thanks to <em>he_is_the_cat</em> for originally identifying this method.</sub>

## Options to Install Custom Content on Secondary Accounts

1. Install SRQuestDownloader and/or Synplicity
2. Install a File Manager with advanced features like .zip support and wireless file transfer capability
3. Manually download individual custom content files and use MobileVRStation from the Quest Store to move manually downloaded files

## Install SRQuestDownloader and/or Synplicity

This is the recommended method as it makes custom content much easier to manage for all users.

1. **Primary and Secondary Accounts must be registered as Meta Developers.**
2. Press the Custom Songs button in Synth Riders in the Secondary Account and grant the `MANAGE_EXTERNAL_STORAGE` permission when prompted.
3. Install SRQuestDownloader and/or Synplicity on the Primary Account. *Do not run it on the Primary Account until after running on the Secondary Account.*
4. Switch to the Secondary Account and launch the app
5. Grant the `MANAGE_EXTERNAL_STORAGE` permission when prompted.
6. Use the app to download and manage custom content.

## Install a File Manager with Advanced Features

1. **Primary and Secondary Accounts must be registered as Meta Developers.**
2. Press the Custom Songs button in Synth Riders in the Secondary Account and grant the `MANAGE_EXTERNAL_STORAGE` permission when prompted.
3. Use the Quest Browser or other method to download an apk for a File Manager with Advanced Features to the Quest's Primary Account. Most Android applications will work on Quests.
   _We recommend [X-Plore by lonelycat](https://www.lonelycatgames.com/apps/xplore), as it comes with a web-based file manager, Windows File Sharing, FTP server capabilities, and directly supports .zip files._
4. Using SideQuest or MobileVRStation, install the apk on the Quest’s Primary Account.  *Do not run it on the Primary Account until after running on the Secondary Account.*
5. Switch to the Secondary Account.
6. Run the File Manager. Grant the `MANAGE_EXTERNAL_STORAGE` permission when prompted.
7. If connectivity to a Windows PC is desired, enabled Windows File Sharing on the PC and configure Shared Folders for the custom content. Any AI can walk you through this. *Best practice: Share only the folder with the custom content, and no more.*

## Manage Custom Content with File Browsers

1. Download Custom Content through the Quest browser  
   _Any downloaded content will end up in the `Downloads` folder on your Quest device_
2. Open MobileVRStation or your installed File Manager. 3rd party File Managers will be in from the Unknown Sources area of the Library.
3. Navigate the left pane to `SynthRidersUC`
4. Navigate the right pane to `Downloads`.
5. If your content was downloaded in a `.zip` file, open the zip to see the included files.
6. Move the downloaded content files from the right pane into the correct folder on the left pane.  
   Make sure to install content in the correct subfolder based on the file type:

| Content Type     | Folder                          | File Type                                         |
|------------------|---------------------------------|---------------------------------------------------|
| **Custom Songs** | `SynthridersUC/CustomSongs`     | `.synth`                                          |
| **Stages**       | `SynthridersUC/CustomStages`    | `.stagedroid`                                     |
| **Playlists**    | `SynthridersUC/CustomPlaylists` | `.playlist`                                       |
 
!> **Unzip first!**  
If you have downloaded any `.zip` content from the site, make sure to unzip it first before moving it to the correct locations above.  
You may then remove the original `.zip` file from your Quest

## Manually Install Custom Content (non-developers) 

1. Press the Custom Songs button in Synth Riders in the Secondary Account and grant the `MANAGE_EXTERNAL_STORAGE` permission when prompted.
2. Install the app MobileVRStation through the Quest Store
3. Run MobileVRStation in the Secondary Account and grant the `MANAGE_EXTERNAL_STORAGE` permission when prompted.
4. Browse to [Synthriderz](https://synriderz.com) and download custom songs, stages, or playlists
5. You must download each .synth file individually using the download button. .zip files are not supported.
6. Open MobileVRStation and open the File Manager Screen
7. Use the MobileVRStation File Manager to Move .synth files from from the Download folder to the `SynthridersUC/CustomSongs` folder.
8. Use the MobileVRStation File Manager to Move .stagedroid files from from the Download folder to the `SynthridersUC/CustomStages` folder.
9. Use the MobileVRStation File Manager to Move .platylist files from from the Download folder to the `SynthridersUC/CustomPlaylists` folder.

## Troubleshooting
1. If `SynthridersUC`, `SynthridersUC/CustomSongs`, `SynthridersUC/CustomStages`, or `SynthridersUC/CustomPlaylists` folders are missing, launch Synth Riders and press the Custom Songs button. This will generate a pop-up. You must grant SynthRiders the `MANAGE_EXTERNAL_STORAGE` permission. Once granted, it will automatically generate these folders. You may manually create them, but SynthRiders will not be able to access them without this permission.
2. All applications used for this method must have the `MANAGE_EXTERNAL_STORAGE` permission. There have been known issues in some Meta OS versions where secondary users do not recieve prompting for content sideloaded by the primary account holder and cannot manually grant the permissions in Quest Settings, and so are unable to access the necessary folders. The workaround is to uninstall/reinstall the app with the primary account, but do NOT run it in the primary account: run it first in the secondary account before running on the primary account.
