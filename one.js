
// Node JS Modular - Common JS
const fs = require('fs');
console.log("Hello Node Js");
var startTime = Date.now();
console.log('Current Process is ', process.cwd(),'CPU ', process.cpuUsage());
// UV_THREADPOOL_SIZE
//process.env.UV_THREADPOOL_SIZE = 10
//const filePath = '/Users/amitsrivastava/Documents/node-mar-codes/basics/one.js';
console.log("Before Read....");
try{
const r = fs.readFileSync(__filename);
console.log('R is ',r);
}
catch(e){
    console.log('Error During File Read ', e);
}
console.log("After Read....");
fs.readFile(__filename,(err, content)=>{
    if(err){
        console.log('File Not Found ... ', err);
    }
    else{
        console.log('Time Taken Thread1  ', Date.now() - startTime);
       // console.log('Content is ', content.toString());
    }
})
fs.readFile(__filename,(err, content)=>{
    if(err){
        console.log('File Not Found ... ', err);
    }
    else{
        console.log('Time Taken Thread2  ', Date.now() - startTime);
        //console.log('Content is ', content.toString());
    }
})
fs.readFile(__filename,(err, content)=>{
    if(err){
        console.log('File Not Found ... ', err);
    }
    else{
        //console.log('Content is ', content.toString());
        console.log('Time Taken Thread3  ', Date.now() - startTime);
    }
})

//t++;
var a = 10;
var b = 20;
var c = a + b;
console.log("C is ",c);