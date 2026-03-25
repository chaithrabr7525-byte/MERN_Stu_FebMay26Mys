//intro to the NodeJS File System (fs) built-in Module

const fs = require("fs");
const fsPromises = require("fs/promises");
//using callback
console.log("Type of fs.readFile: ",typeof fs.readFile);
console.log("Type of fs.writeFile: ",typeof fs.writeFile);
//using fs/Promises
console.log("Type of fsPromises.readFile: ",typeof fsPromises.readFile);
console.log("Type of fsPromises.writeFile: ",typeof fsPromises.writeFile);
