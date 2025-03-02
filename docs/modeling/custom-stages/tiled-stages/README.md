# Custom Tiled Stages

## Standard (tiled) Stages

To make your own stage without using Unity's timeline for animations, you're in the right place! First make sure you have the proper Unity setup and template installed, then follow the directions below.

- [Setting up Unity for Custom Stages](/modeling/custom-stages/setup-unity/)

## Overview

For the standard tiled stages, the way the game processes is this:

- There are 3 tiles of 2000 square units each that come towards the player platform and rotate in turn below, the platform starts in the middle of the 1st tile and then when the player platform touches the TileReset script object at the end of the tile, it will drop that tile
  below and place it in front of the furthest tile in sequence (think of it as a giant rotating conveyor belt moving the tiles).
    - If you open Hierarchy > Demo Scene > Ground Tiles > TileWrap1 > Stage Tile01 > floor
    - The green "floor" tile can be modified or deleted and replace with your own floor tile, same with the floor tiles in TileWrap2 and TileWrap3 can be modified as well.
- The player's platform can be modified the same way in the Platform Prefab, and the PlatformObject is the object can be replaced with a custom FBX.

## Template Setup

> Patience for more information!

- Remove the experience tag in the CustomStageInfo or your stage will not show up in the list of stages
- don't delete the platform collider

## Exporting

- [Exporting Custom Stages](/modeling/custom-stages/export-stages/)
