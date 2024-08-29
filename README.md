# frida-il2cpp

`frida-il2cpp` is a useful tool for hooking games using IL2CPP in Unity-based games. This guide will guide you on how to get started and use your project.

## Start

### 1. Install Package

First, install the necessary packages.

```bash
npm install
```



### 2. Set App Package Name

Open the file `package.json` to set the package name for the target app.

```json
{
  "scripts": {
    "spawn": "frida -U -f com.package -l dist/agent.js", // Change this to the package name of the target app
    "watch": "frida-compile src/index.ts -o dist/agent.js -w",
    "build": "frida-compile src/index.ts -o dist/agent.js -c"
  }
}
```



### 3. Set the class to hook

Specify the classes and methods to hook in the file `src/index.ts`.

```javascript
Il2Cpp.perform(function(){
    const AssemblyCSharp = Il2Cpp.domain.assembly("Assembly-CSharp").image
    const ClassName = AssemblyCSharp.class("ClassName")

    Il2Cpp.trace(true).classes(ClassName).filterMethods(method => method.name.toLowerCase().includes("Function Name")).and().attach()
})
```

### 4. Build

Build the code to create a hooking script inside the `dist` folder.

```bash
npm run build
```

### 5. Watch

To reflect changes in real time during development, run the command below, which automatically builds upon code changes.

```bash
npm run watch
```

### 6. Start Hooking

Now use Frida to spawn the app and start hooking.

```bash
npm run spawn
```

Now, hooking is done automatically when the target app is launched.
