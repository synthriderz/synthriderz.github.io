# Getting Started with Custom Avatars

!> Custom Avatars are only available on the PC/SteamVR version of Synth Riders.

This page is about _making_ custom avatars.  
If you want to download existing avatars, check out [synthriderz.com/models/avatars](https://synthriderz.com/models/avatars) and follow the guide [to install custom content](/installing-custom-content/pcvr/) for using them.

## Intro

Synth Riders allows custom avatars in the `VRM` format to be used and shown in the game.  
If you want to record gameplay with your own avatar, you should be aware that there are two ways to do it:

1. use Synth Riders built-in avatar support
    1. supports only `VRM` format
    2. doesn't support full-body tracking via Vive Trackers or other methods
    3. only limited calibration capabilities
    4. recordings will also feature the nice in-game HDR lighting
2. use LIV's avatar support
    1. supports `VRM` and `.avatars` formats
    2. supports full-body tracking via Vive Trackers or other methods
    3. very detailed calibration capabilities
    4. recordings will use a reduced lighting setup that might not look as good as in-game

Both methods require more or less the same approach on how to create avatars, but have slightly different limitations/capabilities.  
Specifically:

- Avatar shaders
    - both methods will render the avatar shaders differently
    - Synth Riders
        - shader support depends on the stage. It does allow for `custom shaders` to be used (TODO: add more details)
    - LIV
        - using `VRM` format
            - doesn't support `custom shaders`. Only  _MToon_, _Unlit (Unity)_ and _Standard (Unity)_
        - using ``.avatars` format`
            - supports `custom shaders`
- bones and rigging
    - LIV obviously requires a more detailed rigging setup
