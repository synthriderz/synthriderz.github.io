# twitchsettings.bin

Settings for the Twitch Integration.

## Overview

| Detail                  |                                                                                |
|-------------------------|--------------------------------------------------------------------------------|
| Absolute Path (SteamVR) | `C:\Program Files (x86)\Steam\steamapps\common\SynthRiders\twitchsettings.bin` |
| Absolute Path (Quest)   | not present                                                                    |
| File Format             | JSON                                                                           |
| Short Description       | Credentials for the Twitch Integration.                                        |

## Nice to know(s)

## File Content

### Example Content

Example content of the file:

````json
{
  "Request": false,
  "RewardRequest": false,
  "Timewarp": false,
  "Speed": false,
  "Superspeed": true,
  "Color": false,
  "Rainbow": false,
  "Vanish": false,
  "Embiggen": false,
  "Minimize": false,
  "Warp": false,
  "Invaderz": false,
  "BitInvaderz": false,
  "OopsCommand": true,
  "CommandList": true,
  "QueueList": true,
  "RequestTimeout": {
    "users": 300,
    "followers": 240,
    "subscribers": 180,
    "vips": 60,
    "moderators": 30,
    "global": 0
  },
  "TimewarpTimeout": {
    "users": 300,
    "followers": 240,
    "subscribers": 180,
    "vips": 60,
    "moderators": 30,
    "global": 0
  },
  "SpeedTimeout": {
    "users": 300,
    "followers": 240,
    "subscribers": 180,
    "vips": 60,
    "moderators": 30,
    "global": 0
  },
  "SuperspeedTimeout": {
    "users": 300,
    "followers": 240,
    "subscribers": 180,
    "vips": 60,
    "moderators": 30,
    "global": 0
  },
  "ColorTimeout": {
    "users": 300,
    "followers": 240,
    "subscribers": 180,
    "vips": 60,
    "moderators": 30,
    "global": 0
  },
  "RainbowTimeout": {
    "users": 300,
    "followers": 240,
    "subscribers": 180,
    "vips": 60,
    "moderators": 30,
    "global": 0
  },
  "VanishTimeout": {
    "users": 300,
    "followers": 240,
    "subscribers": 180,
    "vips": 60,
    "moderators": 30,
    "global": 0
  },
  "EmbiggenTimeout": {
    "users": 300,
    "followers": 240,
    "subscribers": 180,
    "vips": 60,
    "moderators": 30,
    "global": 0
  },
  "MinimizeTimeout": {
    "users": 300,
    "followers": 240,
    "subscribers": 180,
    "vips": 60,
    "moderators": 30,
    "global": 0
  },
  "WarpTimeout": {
    "users": 300,
    "followers": 240,
    "subscribers": 180,
    "vips": 60,
    "moderators": 30,
    "global": 0
  },
  "InvaderzTimeout": {
    "users": 300,
    "followers": 240,
    "subscribers": 180,
    "vips": 60,
    "moderators": 30,
    "global": 0
  },
  "OopsCommandTimeout": {
    "users": 300,
    "followers": 240,
    "subscribers": 180,
    "vips": 60,
    "moderators": 30,
    "global": 0
  },
  "QueueListTimeout": {
    "users": 300,
    "followers": 240,
    "subscribers": 180,
    "vips": 60,
    "moderators": 30,
    "global": 0
  },
  "CommandListTimeout": {
    "users": 300,
    "followers": 240,
    "subscribers": 180,
    "vips": 60,
    "moderators": 30,
    "global": 0
  },
  "GlobalTimeout": {
    "users": 0,
    "followers": 0,
    "subscribers": 0,
    "vips": 0,
    "moderators": 0,
    "global": 0
  },
  "MaxRequests": {
    "users": 1,
    "followers": 3,
    "subscribers": 5,
    "vips": 6,
    "moderators": 8
  },
  "ChannelPointMode": false,
  "CooldownMode": true,
  "BotReply": true,
  "TwitchHelp": true,
  "BotPrefix": "",
  "FirstInvaderBits": 100,
  "SecondInvaderBits": 400,
  "ThirdInvaderBits": 500,
  "ModeratorCommands": true,
  "ModeratorToggle": true,
  "ModeratorAll": true,
  "ModeratorQueue": true,
  "ModeratorCooldown": true,
  "Queue": [
    {
      "Index": 0,
      "Song": "mapname.synth",
      "TwitchName": "Twitch Username"
    }
  ],
  "QueueHistory": [],
  "Blacklist": []
}
````

## Tools to edit the file

- notepad
- Notepad++

### Related Mods/Tools/docs

- Official Synth Riders Twitch Integration Guide
    - https://bit.ly/srtwitch
