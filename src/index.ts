import "frida-il2cpp-bridge"

console.log("frida load")

Il2Cpp.perform(function(){
    const AssemblyCSharp = Il2Cpp.domain.assembly("Assembly-CSharp").image
    const ClassName = AssemblyCSharp.class("ClassName")

    Il2Cpp.trace(true).classes(ClassName).filterMethods(method => method.name.toLowerCase().includes("Function Name")).and().attach() //function name tracing
})