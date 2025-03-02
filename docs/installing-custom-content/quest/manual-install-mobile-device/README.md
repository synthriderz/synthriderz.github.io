# Installing Custom Content on Quest without a Computer

> Learn how to manually install custom content onto your Quest using only an Android mobile device!

!> **For Experienced Users Only**  
This method is for users who are comfortable with downloading and moving files around on the Quest device.

## Requirements

Before continuing, make sure you have met each of the following prerequisites:

- **You have an Android device** e.g. phone or tablet
- **Developer Mode is enabled on your Android device** - [Samsung Guide](https://www.samsung.com/uk/support/mobile-devices/how-do-i-turn-on-the-developer-options-menu-on-my-samsung-galaxy-device/)  
  <sub>This method may be different depending on your device manufacturer</sub>
- **Developer Mode is enabled on your Quest** - [Quest Guide](/installing-custom-content/quest/initial-setup#enable-developer-mode/)
- **A compatible USB cable for connecting between your Quest and Android devices**  
  <sub>Ensure you have the correct connectors for each device (e.g. for most newer devices a USB-C to USB-C cable will suffice.)</sub>

## Connect to your Quest

1. Install Bugjeager onto your _Android_ device from the play store.  
   [Bugjaeger Mobile ADB - USB OTG](https://play.google.com/store/apps/details?id=eu.sisik.hackendebug&hl=en_US&gl=US)
2. Launch Bugjeager on your Android device, and **click accept** to the prompt that appears.
3. Connect your Quest directly to your Android device using a USB cable
4. When prompted on your Android device, allow Bugjeager to handle your Quest device
5. In your Quest headset, allow USB debugging on the prompt

## Install a File Manager

1. On your Android device, use a web browser to download an apk for a File Manager  
   \- _We recommend [X-Plore by lonelycat](http://www.lonelycatgames.com/apps/xplore), as it comes with a web-based file manager, FTP server capabilities, and directly supports .zip files._
    - At the bottom of the X-Plore page, you can grab the `.apk` where it says "Download Older Versions", or [Download (v3.89) APK here](https://www.lonelycatgames.com/download/x-plore_3_89-apk?wpdmdl=594&refresh=61d6a83fa49221641457727)
2. Click the **+** icon at the top of Bugjeager to install your APK
3. Choose **Select APK File** and then click **OK**
4. If prompted, **allow** Bugjeager to access files on your device
5. Find the APK file you just downloaded (should be in Downloads folder), and select it to install it onto your Quest

Your File Manager app should now be installed under "Unknown Sources" on your Quest Device!

If you are having trouble, this [video guide](https://youtu.be/Lsh8_p9xAzU) should help!

## Install Content

1. Download Custom Content through the Oculus browser  
   _Any downloaded content will end up in the `Downloads` folder on your Quest device_
2. Open your installed File Manager from the Unknown Sources area of the Library.
3. Navigate the left pane to `SynthRidersUC`
4. Navigate the right pane to `Downloads`.
5. If your content was downloaded in a `.zip` file, open the zip to see the included files.
6. Move the downloaded content files from the right pane into the correct folder on the left pane.  
   Make sure to install content in the correct subfolder based on the file type:

| Content Type     | Folder         | File Type                          |
|------------------|----------------|------------------------------------|
| **Custom Songs** | `CustomSongs`  | `.synth`                           |
| **Stages**       | `CustomStages` | `.stagequest` or `.spinstagequest` |
| **Playlists**    | `Playlist`     | `.playlist`                        |

!> **Unzip first!**  
If you have downloaded any `.zip` content from the site, make sure to unzip it first before moving it to the correct locations above.  
You may then remove the original `.zip` file from your Quest
