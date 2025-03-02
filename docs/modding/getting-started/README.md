# Getting Started with Modding

> A short introduction into modding Synth Riders


> This post is about making mods and expects you to have knowledge in developing with C#

## Getting Started with Modding

If you're on this site it very likely means you're curious to figure out how to make your own Synth Riders mods! If you're looking for a tutorial on how to install mods, check out our guide [here](/installing-custom-content/pcvr/installing-mods/)

### About mods in Synth Riders

A Synth Riders mod is essentially just a C# library with special assembly info and event functions. In those we can use all the Scripts from Synth Riders as well as from Unity

### Making your first mod

To get started with modding open Visual Studio (or any other IDE you like to use) and create a new C# Class Library for the .NET Framework and make sure you use .NET Framework version 4.7.2.

> If you can't find these options you might have to install the .NET Framework 4.7.2 first using the Visual Studio Installer or directly from the Microsoft
> Website [here](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-7-2-offline-installer-for-windows-05a72734-2127-a15d-50cf-daf56d5faec2)

### Add assemblies to your project

To be able to actually make mods you need to add some assemblies from the game first.  
Right-click on References->Add Reference and add at least the MelonLoader.dll from the MelonLoader folder in your game directory. You can add additionall assemblies as well, those are located in the Managed folder! It is highly recommended to also add the Assembly-CSharp.dll and
various UnityEngine.x.dll files depending on what you want to do.

### Write your first mod class

Now you are ready to go and write your first mod class. In your newly created .cs file you will want to let your class extend the `MelonMod`. This could look a bit like this now:

```cs
using MelonLoader;

public class SynthRidersMod : MelonMod {

}
```

next we will override the `OnApplicationStart` event to print out a custom message to the console once the game starts.

To do so we just need to override it!

```cs
public class SynthRidersMod : MelonMod {
    public override void OnApplicationStart() {
    // In here you can now add code that will be executed once the game starts.
  }
}
```

And to write a simple message to the MelonLogger we just call `MelonLogger.Log`.

Our final class could now look something like:

```cs
using MelonLoader;

public class SynthRidersMod : MelonMod {
    public ovveride void OnApplicationStart() {
        MelonLogger.Log("Hello World!");
    }
}
```

### Mark your library as a mod

Next we need to tell MelonLoader that our library is a mod to load. For that you need to open up the `AssemblyInfo.cs` inside the Properties.

Now make sure to add `using MelonLoader;` to the top of the assembly info and add these two assembly lines to make the library work as a mod.

```cs
[assembly: MelonInfo(typeof(SynthRidersMod), "My Synth Riders Mod", "1.0.0", "Creator")]
[assembly: MelonGame("Kluge Interactive", "SynthRiders")]
```

> `SynthRidersMod` is the name of your class.

### Try it out

Now you can just build your library and copy the exported .dll file into your Mods folder. Then you can start the game and see your mod logging to the console on game start!

## Additional Resources

- [**Official MelonLoader guide to mod creation**](https://melonwiki.xyz/#/modders/quickstart)
- [**Unity 2019.4.21 Documentation**](https://docs.unity3d.com/2019.4/Documentation/ScriptReference/)
