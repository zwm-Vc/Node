"use strict";

var fs = require("fs");

fs.readFile("sample.txt",function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
        var text = data.toString("utf-8");
        console.log(text);
    }
})