# Getting Started with Custom Spin Stages

## Spin Stages

To make a spin stage you're in the right place! First make sure you have the proper Unity setup and template installed, then follow the directions below.

- [Setting up Unity for Custom Stages](/modeling/custom-stages/setup-unity/)

## Overview

- For Spin stages, you'll only really need to modify the StageTile01 prefab, since the tiles won't rotate under the player like in the standard mode, the player will look around 90-360 degrees depending on what spin difficulty is chosen.
- You can also modify the mesh for the SpinEmitter as well, if you want to change the default circle/cross mesh
- When exporting your stage in Unity go to Synth Riders > Export Stage Bundle then check the box "For Spin mode?"
- Then the file extension for will be `.spinstage` on PC and `.stagedroid` on Quest.

## Template Setup

> Patience for more information!

- Remove the experience-tag in the CustomStageInfo or your stage will not show up in the list of stages

## Exporting

- [Exporting Custom Stages](/modeling/custom-stages/export-stages/)
