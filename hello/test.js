"use strict";

process.nextTick(function(){
    console.log("nextTick callback!");
});

console.log("nextTick was set!");

(function hello(){
    console.log("Hello world");
})();

process.on("exit",function(code){
    console.log("about to exit with code" + code)
})

if(typeof(window) === "undefined"){
    console.log("node.js" + typeof(window));
}else{
    console.log("brower");
}


