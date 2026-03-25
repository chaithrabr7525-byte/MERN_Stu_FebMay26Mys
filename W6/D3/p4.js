//Reading & writing files async with fs/Promises

const fs = require("fs/promises");
const path = require("path");

async function runPromisesBasedFileFlow(){
    const filepath = path.join(__dirname,"promises-note.txt");
    try{
        await fs.writeFile(filepath,"Written using fs/promises. This works with asyn/await");
        console.log("File written using fs/promises");
        const content = await fs.readFile(filepath,"utf-8");
        console.log(content);
    }
    catch(error){
        console.log("Promise-based fs error:",error.message);
    }
}
runPromisesBasedFileFlow();