# FAQ

## Custom Songs

### Q: Can I add custom songs to Synth Riders?

Yes! Custom songs work natively with the game (PCVR & Quest), **no mods required**!  
They come as `.synth` files, and need to be put into your Custom Songs folder.

___

### Q: Where do I get custom songs?

The best way is to ask in the modding community for guidance: [https://discord.synthriderz.com](https://discord.synthriderz.com)

___

### Q: How do I install custom songs?

Find the custom song guide for your platform here:  
[Quest Guide](/installing-custom-content/quest/)  
[PC Guide](/installing-custom-content/pcvr/)

___

### Q: What if I want a bunch of songs?

There are two methods:

1. Use the Noodle Manager GUI
2. Use the Bulk Download feature on the website

___

### Q: Why are there no audio previews on the site like Beatsaver has?

Previews on the site use Youtube links which must be added by the mapper. If a song you are looking at is missing a preview, then the mapper has chosen not to add one.

## Beatmap Editor

### Q: Can I make my own Custom Songs?

Yes! Check out our [Mapping Guide](/mapping/) to get started!

___

### Q: I made a map but I do not see it anywhere. Where did it go?

The official editor places beatmaps into the `CustomSongs` folder where it is installed.  
Here are the [instructions](/mapping/using-the-editor#finding-the-map-file-to-test-and-share-it) for finding it.

___

### Q: I need help mapping songs and/or using the editor!

Our [Mapping Guide](/mapping/) will help you get started. In addition, feel free to ask questions in `#mapping-discussion` on our [Discord server](https://discord.gg/qpDkfzWReX).

___

### Q: Is there a way to convert Beat Saber's custom maps into Synth Riders?

There are too many issues with this idea for us to support anything like it. Automatically converted maps would be bland and not take advantage of Synth Rider's unique gameplay, plus there's no way to know if the Beat Saber map's author has given permission for their content to
be used in this way.

Instead, use the freely available custom song editor. Check out our [Mapping Guide](/mapping/) to get started!

## Avatars

### Q: How do I enable in-game avatars (PCVR only)?

While in-game, go to the Settings Menu > Visuals and select Avatars > On. The avatar panel appears on your left. You can also choose one of the camera options here to choose how your game display window will appear (see Camera Effects below). Select your avatar from the left pane
and follow the
instructions on screen to calibrate.

___

### Q: What camera effects can I use with avatars?

From the Settings > Visuals menu, you can choose from several camera options:

- First Person - headset view (will show hands if you have avatar enabled - not recommended)
- First Person Wide - headset view, positioned a little further back (again not recommended)
- Third Person - fixed camera positioned behind your avatar
- Dynamic - camera angle changes every 30 seconds, switching to different points of view around the avatar (360 degrees)
- Spectator - camera pans slowly behind the avatar (180 degrees)
- Swing - head tracked camera
- Custom - positionable third person camera with lock & stabilization

___

### Q: My avatar is.. (too big / too small / isn’t scaling correctly / not matching me)..?

You can repeat the calibration process at any time, by standing still with your arms by your side, looking ahead and then squeezing both triggers.

___

### Q: Are there any other avatars?

Best way is to ask in the modding community for guidance: [https://discord.synthriderz.com](https://discord.synthriderz.com)
In addition, Synth Riders can use most avatars that are in a VRM format. VRM is a file format for handling 3D humanoid avatar data for VR. You can find some ready to download at [https://hub.vroid.com/](https://hub.vroid.com/).  
Just place these in the Avatars folder under the
game installation folder.

___

### Q: Can I use my (Beat Saber/VRChat/other) avatar? Can I make my own avatar?

- If it’s not in VRM format, then it will need to be converted. The easiest way to do this is using UniVRM (available here: [https://vrm.dev/en/](https://vrm.dev/en/)) from within Unity. Once you have UniVRM, you can refer to their documentation on what to do
  next: [https://vrm.dev/en/how\_to\_make\_vrm/](https://vrm.dev/en/how_to_make_vrm/).
- VRChat: See this discord-thread for a quick-start on converting your VRChat Avi to LIV in 2025: [https://discord.com/channels/698682814446123817/698682814446123820/698682814446123823](https://discord.com/channels/546769414226182202/566059797334720532/1341764571710488596)
- You may also find some useful information on the modding community Discord: [https://discord.synthriderz.com](https://discord.synthriderz.com)(
- There’s a tutorial on making avatars with VRoid here: [https://www.youtube.com/watch?v=49-zvKGZQdE](https://www.youtube.com/watch?v=49-zvKGZQdE)

___

### Q: How do you do the avatar animation and scaling in game?

By default only the hands and head have tracking, and the rest of the body is animated using inverse kinematics. They use FinalIK for the inverse kinematics, which uses the user headset height to set the avatar scale.

___

### Q: How can I do full body tracking?

If you want full body tracking, you will need extra trackers or you can also use solutions such as a Kinect and Driver4vr ([https://www.driver4vr.com/](https://www.driver4vr.com/)), or use LIV with Avatar support. Once you are setup for full body tracking, you can then change the
type of tracking in
the avatar menu.

___

### Q: Are there any fine adjustments I can do to my avatar calibration?

The default values work for most avatars, but if you want more control you can open the file avatars.settings.bin that is inside the Avatars folder under the Synth Riders installation folder. This file is where your in-game calibration settings are written. While the game is not
running, you can
manually edit that file and change things such as the offset of hands/head, whether to hide the avatar in first person camera view, and so on. Be aware that the settings file will be overwritten if you re-calibrate in game!

___

### Q: My avatar’s knees bend too much, is there anything I can do?

You can try adjusting the `SwivelSettings` for the avatar to reduce the amount of knee bending.  
The setting is in the `avatars.settings.bin` file inside the `Avatars` folder. Open the file with a text editor and locate the `leftFootSwivel` and the `rightFootSwivel` values, and try changing them from 0.0 to the following:

````
"SwivelSettings": {
  "leftArmSwivel": 20.0,
  "rightArmSwivel": -20.0,
  "leftFootSwivel": -75.0,
  "rightFootSwivel": 75.0
}
````

Be aware that these settings will be erased if you do a T-pose recalibration step with your avatar, so it's worth making a backup.

## Mods

> **Game mods don't work for Quest.**  
> MelonLoader (responsible for loading mods) is only compatibile with the PC version of the game.

___

`Q: How do I patch the game to install mods?`  
PCVR only: To let Synth Riders load mods you have to install MelonLoader. You can find a guide here: [PC Modding Guide](/guides/installing-mods/)

___

`Q: Where do I get game mods?`  
Completed mods can be found in `#released-mods` on Discord, usually as a .zip file ready to install.

___

`Q: How do I install game mods?`  
While the game is not running, navigate to the Synth Riders install directory and unzip the mod’s files under the Mods folder. Usually there is a folder for each mod installed.

___

`Q: How do I remove game mods?`  
Navigate to the Synth Riders install directory and remove the mod’s files from under the Mods folder.

___

`Q: Mod XYZ isn’t working / Mod XYZ broke my game!`  
All mods are community supplied, and while the community takes every effort to try and test them out, there can be no guarantees! Modding your game is never to be taken lightly and is always done at your own risk.  
For issues with a particular mod, please @ the creator/maintainer of that mod in `#mod-support` on Discord.

## Streamers

`Q: How do I set up the Twitch Request Bot / Song status / Invaderz thing?`  
Take a look at the Twitch Integration Guide here: [https://bit.ly/srtwitch](https://bit.ly/srtwitch)

___

`Q: My YouTube / Twitch / Facebook videos containing music from the OST are being flagged for copyright claims, what should I do?`  
You can find the list of OST music and the various license restrictions here: [http://videopolicy.synthridersvr.com/](http://videopolicy.synthridersvr.com/).  
The only OST for which you have complete license to use and monetize is the **99 Lives Pack**.

___

`Q: I’d like to use the Synth Riders logo and assets for my videos, where can I get it?`  
The Synth Riders team have a presskit with their official assets where you’ll find logos, screenshots and videos for your use located here: [Google Drive](https://drive.google.com/drive/folders/16vfY8vvl63XPB8jT7x0U8qev3hRPoED6)

## YURfit

`Q: What is YURfit?`  
YURfit is a tool for counting calorie expenditure while VR gaming, backed up with an online community of supportive, like-minded people coming together to improve their health and fitness through VR gaming.

___

`Q: How do I sign up for YURfit?`  
The YUR Watch is enabled by default. You can gaze at the watch (you'll see a white dot showing your gaze point) and the panel will open, prompting you to connect. Gaze at YES on the confirmation panel to receive a connect code. Enter this code
at [https://yur.watch/](https://yur.watch/) to connect
the tracker to your YUR account - you’ll have the opportunity to sign in if you’re an existing user already, or to create a new account.

___

`Q: What can I do with YURfit?`  
While you’re playing a song and signed in to YURfit, you’ll see a calorie count in real time displayed on the watch. Just gaze at the watch to open and close the readout panel.

___

`Q: I forgot my password for YURfit!`  
To reset your password, go here: [YURfit Password Reset](https://yurapp-502de.firebaseapp.com/yuraccountlogin.html)

___

`Q: Where do I join the YURfit community, or ask other questions about YURfit?`  
Join the [YURfit Discord](https://yur.chat/)

## Scoring

`Q: How does the scoring work?`  
For basic guidance on how your hits are scoring there is a playable tutorial for each mode (Rhythm and Force) from the game's main menu. In addition, there are score guides available to help you for both modes:

Rhythm

- Mimi's Guide: [http://bit.ly/srrhythmguidem](http://bit.ly/srrhythmguidem)
- Zekses' Guide: [http://bit.ly/srrhythmguidez](http://bit.ly/srrhythmguidez)

Force

- Emi's Guide: [http://bit.ly/srforceguide](http://bit.ly/srforceguide)

___

### Q: What are the note jump speeds (njs) for each difficulty?

| Difficulty | NJS      |
|------------|----------|
| Custom     | up to 3x |
| Master     | 1.5x     |
| Expert     | 1.25x    |
| Others     | 1x       |

## Cosmetics

`Q: Can I swap/change my controller colours?`  
Custom colours are built into the game. You will have the chance to swap them when you onboard, otherwise you will need to pick colours from the colour picker in `Settings > Colors`

___

`Q: How do I change my controllers to something else?`  
To put a custom image over your controllers, you'll need two 1024x1024 JPEGs, one for each hand and named `LeftIndicatorTex.jpg` and `RightIndicatorTex.jpg`. Place these in the `Synthriders_Data/IndicatorTex` folder underneath the game install directory.

These do not have to be black and white or greyscale - but light colours in the JPEG will be replaced by the shades of the color that is set for that controller.

You can find samples to try in `#custom-textures` on Discord.

## Official Game Support

`Q: XYZ in the game does not work!/I have a suggestion for the game/I need help with the game!`  
The Mod Discord is community-driven, and while you'll find experienced players here who may be able to help if you ask in support, the best place to report bugs in the game, or to make suggestions is in the game's official
discord: [http://discord.synthridersvr.com/](http://discord.synthridersvr.com/) You'll find #bugs-report, #game-wishlist, #editor-wishlist and #ask-the-devs the best places to get information back to the developers.

`Q: I love the OST music in the game! Where can I get it?`  
The full song list with Spotify info and purchasing links is kept up to date in the faq on the official discord: [http://discord.synthridersvr.com/](http://discord.synthridersvr.com/).
