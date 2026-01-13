# frida-il2cpp

`frida-il2cpp` is a useful tool for hooking games using IL2CPP in Unity-based games. This guide will guide you on how to get started and use your project.

This was developed and tested with Frida version 17.5.2.

## Start

### 1. Install Package

First, install the necessary packages.

```bash
npm install frida-il2cpp-bridge
```


### 2. Build

Build the code to create a hooking script inside the folder.

```bash
npm run watch
```

### 3. Hook

Keep the terminal running npm run watch open, and execute the Frida hooking command in a separate terminal.

```bash
frida -U -f packagename -l hook.js
```


Now, hooking is done automatically when the target app is launched.


