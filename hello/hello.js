var name = "World";
var s = `Hello ${name}!`;


function hello(language){
    console.log(s + ' ' + language);
}
(function vs(){
    console.log("right now");
})();

function world (){
    console.log("Second Hello")
};
module.exports = {
    hello : hello,
    world : world
}