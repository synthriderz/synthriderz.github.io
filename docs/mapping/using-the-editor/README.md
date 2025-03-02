# Using the Editor

Here is the basic rundown of how to use the beatmap editor once you've done the [initial setup](/en/mapping/getting-started). You may want to keep the [Basic Editor Hotkeys](/en/mapping/basic-hotkeys) page open as a reference while you're getting used to things.

Make sure to save your map often with Ctrl + S!

## Setting BPM and Start Offset

We went over this in the [Getting Started](/en/mapping/getting-started/) guide, but double check that these are set correctly before you begin! These fields can be found at the upper-left corner of the interface.  
![bpmoffsetfields.png](/mapping/bpmoffsetfields.png)

## Scrolling through the timeline

- Use the mouse wheel to scroll back and forth along the audio timeline.

- The timeline bar on the right-hand side shows where you are in the song. The cursor can be dragged up and down with Left Click.  
  ![editortimeline.png](/mapping/editor/editortimeline.png)

- The **Step** controls on the left-hand side will change how much you scroll by. The default is 1/1, or one full beat. The arrows beside the step amount, as well as Ctrl + Scroll Wheel, adjust the step amount. The button below the step amount cycles between **Fours**, **Threes
  **, and **Any**.  
  ![editorstep.png](/mapping/editor/editorstep.png)

    - **Fours**: 1/2 (half beats), 1/4 (quarter beats), and 1/8 (eighth beats) are the most common beat subdivisions in music.
    - **Threes** (aka triplets): 1/3 (third beats) and 1/6 (sixth beats) are less common in music than Fours. If you're having trouble timing notes on Fours, there's a good chance it's actually triplets.
    - **Any**: Includes all subdivisions from Fours and Threes.

## Playing back audio

Use Space to start and stop the audio. You can also use R for playback if you want the cursor to return to where you started once you stop.

## Selecting difficulty

Before placing notes, select the intended **Difficulty** level of your map at the top right corner. The **Custom** difficulty has settings that can be changed with F11.  
![editordifficulty.png](/mapping/editor/editordifficulty.png)

## Placing and editing notes

- Select one of the four note types on the right-hand side (**Left Hand**, **Right Hand**, **Special One Hand**, **Special Hands Together**)  
  ![editornotes.png](/mapping/editor/editornotes.png)

- Scroll the timeline to the desired beat.

- Hover over the position on the grid where you would like to place the note and press Left Click.

- Left Click on an existing note will delete it.

- Hold Alt + Left Click to drag an already placed note to a different position. If you are not snapped to the grid, the note can be freely moved.

> Try to stay within the editor's suggested comfort zones when placing notes. Also try to avoid placing notes over the face of the player outline, as that will cause notes to travel into the player's face and block their vision in game.
>
> ![editorcomfort.png](/mapping/editor/editorcomfort.png)

## Checking song timing

It's a good idea to check the accuracy of your BPM and Start Offset, since the game is no fun if the notes don't line up with the beat.

> Wireless headphones and earbuds can introduce some audio delay that will make you time the map incorrectly. Use wired headphones or speakers.

- Adjust the **MUSIC VOLUME** and **SFX VOLUME** at the left-hand side so that you can clearly hear the song and note hit sounds. Make sure that the hit sounds are in time with the song's main beat.  
  ![editorvolume.png](/mapping/editor/editorvolume.png)
    - If you're resorting to anything more precise than 1/4 or 1/6 to line up many of your notes, then the BPM and/or Start Offset may be incorrect, or the song could have an unstable tempo. See the [Getting Started Guide](/en/mapping/getting-started) to double check the BPM and
      Start Offset.
- If you're having trouble listening for your map's timing, try lowering the playback **Speed** at the left-hand side.  
  ![editorspeed.png](/mapping/editor/editorspeed.png)

> It's a good idea to check timing throughout the whole song. If the BPM is off by a little bit, the timing may seem right at the beginning, but it will become more and more off later in the song.

## Creating bookmarks

The **Bookmark** button lets you add a named tag to the current beat. Bookmarks appear on the timeline and are useful for organizing your song into different sections (such as Intro, Verse, Chorus, Bridge). Nobody will see these in the game — they are just an optional convenience
for you while working on the map.  
![editorflashbook.png](/mapping/editor/editorflashbook.png)

## Placing and editing rails

To create a rail, you must toggle **Rail Mode** for the corresponding note type.

- Select the **Line** button next to the type of note you wish to create a rail for (**Left Hand**, **Right Hand**, **Special One Hand**, **Special Hands Together**). You should see **Working on Rail Section** above the play grid.  
  ![editornotes.png](/mapping/editor/editornotes.png) ![editorrailmodev2.1.0-4.png](/mapping/editor/editorrailmodev2.1.0-4.png)
- Place the start of the rail just like you would a regular note.
- Without playing back the audio yet (this cancels out of **Rail Mode**), scroll forward and place the first rail node. It will look like a small note, and will connect to the previous note that you placed once you're done creating the rail.
- Keep scrolling forward and placing rail nodes to build your rail.
- When you are finished creating the rail, click the **Line** button again. The rail will now be visible when you scroll backwards.

You can move the rail around the grid by clicking and dragging the starting rail note with Alt + Left Click. If you want to move only the start of the rail, click and drag it with Ctrl + Left Click. The additional nodes can be edited in a few different ways.

- Hold Alt + Left Click to drag a rail node, just like a regular note. If you are not snapped to the grid, the node can be freely moved.
- Ctrl + Left Click will add a node to the rail, and can even be used to extend the rail a little bit past the end node.
- Ctrl + Right Click will delete the node that's under your mouse cursor. Individual rail nodes cannot be deleted in any other way.

The exact path a rail takes between nodes is dependent on a few things, but rails always show up in game exactly as they do in the editor. You may need to add, shift, or remove nodes to create a smoother path.

> Just as you should avoid placing notes on the player outline's face, try to keep your rail paths from colliding with the player's face. It can be tricky to spot this while editing a map, but it should be easy to notice when testing the map in game.

> **Known editor issue**  
> A long rail with too few nodes along it can do weird things, like zig-zag backwards instead of curving towards the next node (the example below demonstrates this). Adding more nodes along the rail will smooth it out and fix it.
>
> ![zigzagrail.png](/mapping/zigzagrail.png)

## Special combos

The special note types (**Special One Hand** and **Special Hands Together**) trigger a combo effect in game when the same one is used for three or more notes in a row. The effect can be jarring if it ends too soon after starting, so pay attention for that when testing your map.

You can also create rails out of special note types. Each rail counts as a single note for the combo effect — a single rail will not trigger the combo effect, no matter how long it is.

## Placing and editing walls

- Use the **Obstacles** buttons on the right-hand side to add a wall (Note: the **Square** and **Triangle** walls are currently only available in the beta editor).  
  ![editorwalls.png](/mapping/editor/editorwalls.png)

- Ctrl + Right Click will delete a wall that's under your mouse cursor.

- Hold Alt + Left Click to drag an already placed wall to a new position.

- While dragging, Q and E will rotate the wall.

> Make sure that you don't have to move too much to dodge a wall, as many players have limited space to play the game. The default placement of the **Center** wall is not easy to dodge, and should be moved to the left or right a little after it's placed.

## Placing flashes and lights

- Click the **Flash Effect** button on the right-hand side to create a brief but intense flash of light at the current time.  
  ![editorflashbook.png](/mapping/editor/editorflashbook.png)
- Hold Ctrl and click the Flash Effect button to create a **Light Effect**, which triggers a brief flash of the colored background lights.
- Placing the effect again on the same spot will remove it.

> These effects are optional, as the environment already lights up based on the notes the player hits. They can add emphasis and visual interest to key parts of a song.
>
> They can also be distracting and tiresome if used too often. The editor limits how often you can place each one in quick succession.

## Draft mode

Each time you load up your map to continue working on it, you may notice a **Draft Mode** checkbox. Leave this checkbox on so that you, and anyone else who tests your map, will not create an online scoreboard for this map until you're finished refining it.  
![editordraftcheckbox.png](/mapping/editor/editordraftcheckbox.png)

The website will automatically turn this setting off when you publish, so there's no reason to change it manually.

## Finding the map file to test and share it

When you're ready to test your map and/or share it with others, navigate to the beatmap editor's install folder.

- In Steam, right click the beatmap editor in your games list.

- Click **Properties**.

- Select **LOCAL FILES** on the left-hand side.

- Click the **Browse...** button.  
  ![steamlocalfiles.png](/mapping/steamlocalfiles.png)

- Look in the **CustomSongs** folder for your song's .synth file.

Copy this .synth file to your Synth Riders **CustomSongs** folder to try it out in game. You can also share this file with others to let them play it.

## Known editor issues

- A long rail with too few nodes along it can do weird things, like zig-zag backwards instead of curving towards the next node. Adding more nodes along the rail will smooth it out and fix it.
- The Metronome can only be turned off during audio playback.
- In rare cases, your beatmap file may not save. Common solutions include disabling anti-virus, ensuring the save folder has write permissions, not moving the file during use, and removing special characters from the song info (e.g. unicode characters). If none of these solutions
  fix the issue, open the track.data.json in the .synth file and make sure the "audioFile" field matches the .ogg in the .synth. If the names don't match, edit the "audioFile" field to match the .ogg name.  
  ![mapsaveerror.png](/mapping/mapsaveerror.png)

## Good luck!

This should be enough to get you started on your map! Once you feel comfortable enough with the editor and how it works, we encourage you to move on to our Intermediate guides for tips and tricks on how to make your map even more fun.
