# Installing Custom Content on Quest Secondary Accounts

> Learn how to manually install custom content onto Quest Secondary Accounts

Synth Riders supports App-Sharing and Secondary Accounts for OST and all DLC, but custom content is not shared between accounts.

- Custom Songs **must be duplicated** across _both_ the Primary Account and the Secondary Account(s)

Applications installed on the Primary Account are shared between all account users, but all other files are kept private for each account and are not accessible by other accounts. Quest does not support USB connectivity directly for Secondary Acocunts, but custom content may be made through other Quest applications. There are three known methods that work for secondary accounts:

1. Install Synplicity or SRQuestDownloader
2. Install a File Manager with advanced features like .zip support and wireless file transfer capability
3. Manually download individual custom content files with the Quest Browser and use MobileVRStation from the Quest Store to move them

## Install SRQuestDownloader and/or Synplicity

> We recommend this method as it makes custom content much easier to manage for all users.

1. **Primary and Secondary Accounts must be registered as Meta Developers.**
2. Install Synplicity or SRQuestDownloader on the Primary Account.
3. Switch to the Secondary Account and launch the app from the Unknown Sources area of the Library.
4. Grant the `MANAGE_EXTERNAL_STORAGE` permission when prompted.
5. Download desired custom content using the App. Both Apps will place the content automatically in the proper location.
6. Launch Synth Riders in the Secondary Account. 
7. Press the Custom Songs button in Synth Riders in the Secondary Account and grant the `MANAGE_EXTERNAL_STORAGE` permission when prompted.
8. You will see a loading screen count through your custom songs in steps 6 or 7. This may take 15 or more minutes on initial load, but only a few seconds on subsequent startup.
9. Best Practice: Use 'Download All Songs' or 'Fetch All' before every multiplayer session to ensure you have all of the latest custom songs!

## Install a File Manager with Advanced Wireless Features
<sub>Special thanks to <em>he_is_the_cat</em> for originally identifying this method.</sub>

1. **Primary and Secondary Accounts must be registered as Meta Developers.**
2. Use the Quest Browser or other method to download an apk for a File Manager with Advanced Features to the Quest's Primary Account. Most Android applications will work on Quests.
   _We recommend [X-Plore by lonelycat](https://www.lonelycatgames.com/apps/xplore) or [TotalCommander](https://www.ghisler.com/android.htm) as they are web-enabled file managers with Windows File Sharing, FTP server capabilities, and directly supports .zip files._
3. Using SideQuest or MobileVRStation, install the apk on the Quest’s Primary Account.  *Do not run it on the Primary Account until after running on the Secondary Account.*
4. Switch to the Secondary Account.
5. Run the File Manager. Grant the `MANAGE_EXTERNAL_STORAGE` permission when prompted.
6. If connectivity to a Windows PC is desired, enabled Windows File Sharing on the PC and configure Shared Folders for the custom content. Any AI can walk you through this. *Best practice: Share only the folder with the custom content, and no more.*

## Manually Install Custom Content with MobileVRStation (non-developers) 

> This is the only method available without registering as a Meta Developer. However, it is highly recommended to register as a Meta Developer, which is very easy to do.

1. Press the Custom Songs button in Synth Riders in the Secondary Account and grant the `MANAGE_EXTERNAL_STORAGE` permission when prompted.
2. Install the app MobileVRStation through the Quest Store
3. Run MobileVRStation in the Secondary Account and grant the `MANAGE_EXTERNAL_STORAGE` permission when prompted.
4. Browse to [Synthriderz](https://synriderz.com) and download custom songs, stages, or playlists. These files will download to the `Downloads` folder by default.
5. You must download each .synth file individually using the download button. .zip files are not supported.
6. Open MobileVRStation and open the File Manager Screen
    
## Manage Custom Content with File Browsers

> This method works with X-plore, TotalCommander, and MobileVRStation

1. Download Custom Content through the Quest browser  
   _Any downloaded content will end up in the `Downloads` folder on your Quest device_
2. Prior to installing any custom content, press the Custom Songs button in Synth Riders in the Secondary Account and grant the `MANAGE_EXTERNAL_STORAGE` permission when prompted. This will generate the `SynthridersUC` folders.
3. Open X-Plore, MobileVRStation or your installed File Manager. 3rd party File Managers will be in from the Unknown Sources area of the Library.
4. For two-pane File Managers: Mavigate the left pane to 'Downloads' and right pane to `SynthRidersUC`
6. If your content was downloaded in a `.zip` file, open the zip to see the included files.
7. Move the downloaded content files from the `Downloads` folder into the correct folder on the `SynthRidersUC` pane.  

   Make sure to install content in the correct subfolder based on the file type:

| Content Type     | Folder                          | File Type                                         |
|------------------|---------------------------------|---------------------------------------------------|
| **Custom Songs** | `SynthridersUC/CustomSongs`     | `.synth`                                          |
| **Stages**       | `SynthridersUC/CustomStages`    | `.stagedroid`                                     |
| **Playlists**    | `SynthridersUC/CustomPlaylists` | `.playlist`                                       |
 
!> **Unzip first!**  
If you have downloaded any `.zip` content from the site, make sure to unzip it first before moving it to the correct locations above.  
You may then remove the original `.zip` file from your Quest.



## Troubleshooting
1. If `SynthridersUC`, `SynthridersUC/CustomSongs`, `SynthridersUC/CustomStages`, or `SynthridersUC/CustomPlaylists` folders are missing, launch Synth Riders and press the Custom Songs button. This will generate a pop-up. You must grant SynthRiders the `MANAGE_EXTERNAL_STORAGE` permission. Once granted, it will automatically generate these folders. You may manually create them, but SynthRiders will not be able to access them without this permission.
2. All applications used for this method must have the `MANAGE_EXTERNAL_STORAGE` permission. There are known issues in some Meta OS versions where secondary users do not recieve prompting for applications sideloaded by the primary account holder and cannot manually grant the permissions in Quest Settings, and so are unable to access the necessary folders. The workaround is to uninstall and reinstall the app from the primary account, but do NOT run it in the primary account: run it first in the secondary account before running on the primary account.
