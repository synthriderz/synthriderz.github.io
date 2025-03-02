# Setup Unity for Custom Stages

> Starter template project for Unity and additional setup resources

!> Due to updates to the main game, future custom stages will use Unity 2021.3.22f1 and the Universal Render Pipeline (URP). Older stages will need to be converted to work and instructions will come out soon!

## Video Guide

<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="YouTube video player" src="https://www.youtube.com/embed/0YxnZV1zuck" height="315" width="560"></iframe>

## Prerequisites

Download [Unity Hub](https://unity.com/download).

Custom Stages require Unity [**2019.4.21f1**](https://unity3d.com/get-unity/download/archive?_ga=2.72680915.1526074658.1667796722-1327868201.1667796722)

## Project Template

All stage types (tiled, spin, experience) can utilize this starter template.

- [Unity Project Template _Official Synth Riders template for creating Custom Stages_](https://github.com/shogoki-vnz/SynthRiders-CustomStages/tree/master)

## Notes

- Be aware that the names of the following items must not be changed:

    - `MenuItems/BG`
    - `MenuItems/Thumb`
    - `Prefabs/StageTile01`
    - `Prefabs/StageTile02`
    - `Prefabs/StageTile03`
    - `Prefabs/Platform`
    - `Skybox/CustomSkybox`
    - `Prefabs/SpinEmitter`
- If you don't want to replace the default platform or default spin emitter, just delete or move the prefabs out of the `_CustomStageElements` folder

- As of right now, **custom Unity scripts are not supported** with Synth Riders custom stages (except for the scripts found in the default template).  
  If there are any additional scripts found in your scene, they will be ignored when exporting the stage.
