# SynthDB

Contains info about found custom songs and custom stages including its metadata.

## Overview

| Detail                  |                                                                                  |
|-------------------------|----------------------------------------------------------------------------------|
| Absolute Path (SteamVR) | `C:\Program Files (x86)\Steam\steamapps\common\SynthRiders\SynthDB`              |
| Absolute Path (Quest)   | TODO                                                                             |
| File Format             | sqlite3                                                                          |
| Short Description       | Contains info about found custom songs and custom stages including its metadata. |

## Nice to know(s)

## File Content

### Example Content

#### Table: TracksCache

````csv
"id","file_name","song_name","author","beatmapper","bpm","image_file","leaderboard_hash","notes_count","duration","date_created"
"139","139-Lindsey-Stirling-Underground.synth","Underground","Lindsey Stirling","Mapper","94","C:/Program Files (x86)/Steam/steamapps/common/SynthRiders/SynthRiders_Data\..\SynthRidersUC/ImagesCache/0c33787ba54be74d55ced3e3fe50d7e281e1bbf22b0eaaf72b20d1f79502ef1f.png","0c33787ba54be74d55ced3e3fe50d7e28231bbf22b0edaf72b20d1f79502ef1f","0,0,0,611,0,0","198","1234281821"
````

#### Table: StagesCache

````csv
"id","file_name","isNormStage","normStageName","normStageAuthor","normStageIconPath","isSpinStage","spinStageName","spinStageAuthor","spinStageIconPath","isExperience","expTag","expName","expAuthor","expDescription","expBannerIconPath","date_created","templateversion"
"56","C:\Program Files (x86)\Steam\steamapps\common\SynthRiders\SynthRidersUC\CustomStages\Above Sunset.stage","0","null","null","null","0","null","null","null","0","null","null","null","null","null","1738738320","0.41"
````

## Tools to edit the file

- https://inloop.github.io/sqlite-viewer/#

### Related Mods/Tools/docs
