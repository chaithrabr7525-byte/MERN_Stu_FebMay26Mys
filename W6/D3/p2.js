//Reading & writing files sync

const fs = require("fs");
const path =  require("path");

//Syntax for function usage in a module
//moduleName.functionName()
const filepath = path.join(__dirname,"sync-note.txt");

fs.writeFileSync(filepath,"This file was written using writeFileSync().\nSynchronous operation block execution");

console.log("File written synchronously.");
const content = fs.readFileSync(filepath,"utf-8");
console.log("File read synchronously");
console.log(content);