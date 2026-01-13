import "frida-il2cpp-bridge"

setTimeout(() => {
    Il2Cpp.perform(() => {
        console.log(Il2Cpp.unityVersion)

        let assemblyc = Il2Cpp.domain.assembly("Assembly-CSharp");
        Il2Cpp.trace(true).assemblies(assemblyc).and().attach()
    })
}, 1500);

