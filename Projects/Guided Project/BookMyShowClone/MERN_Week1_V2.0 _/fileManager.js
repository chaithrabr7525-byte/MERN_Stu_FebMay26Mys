//writing & reading booking & its logs
const { resolve } = require("dns");
const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "data");
const logsDir = path.join(dataDir, "logs");
const bookingsFile = path.join(dataDir, "bookings.json");
const logsFile = path.join(logsDir, "booking.log");
const archivedLogsFile = path.join(logsDir, "booking-archived.log");

function ensureDirectories() {
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);

    }

    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);

    }
}

function listDataFilesSync() {
    ensureDirectories();
    return fs.readdirSync(dataDir);
}
function removeLogsDirctorySync() {
    if (fs.existsSync(logsDir)) {
        fs.rmdirSync(logsDir, { recusive: true });
    }
}

//Read/write bookings
function initializeBookingFileSync(){
    ensureDirectories();
    if (!fs.existsSync(bookingFile)) {
        fs.writeFileSync(bookingFile, JSON.stringify([], null, 2), "utf-8");
    }
}

function readBookingSync() {
    initializeBookingFileSync();

    //Read sync using buffer first, then convert to string
    const bufferData = fs.readFileSync(bookingsFile);
    const content = bufferData.toString("utf-8");

    return JSON.parse(content || "[]");
}
function readBookingAsync() {
    initializeBookingFileSync();
    return new promise((resolve, reject) => {
        fs.readFile(bookingsFile, (ree, bufferData) => {
            if (err) {
                return reject(err);
            }
            try {
                const content = bufferData.toString("utf-8");
                const parsed = JSON.parse(content || "[]");
                resolve(parsed);
            }
            catch (parseError) {
                reject(parseError)
                    reject(parseError);
            }
        });

    });
}
function writeBookingsAsync(){
    initializeBookingFileSync();
    return new promise((resolve,reject)=>{
        const jsonString = JSON.stringify(bookingsFile,null,2);
        const buffer = Buffer.alloc(Buffer.byteLength(jsonString));
        buffer.write(jsonString);

        fs.writeFile(bookingsFile,buffer,(err)=>{
            if(err){
                return reject(err);
            }
            resolve("Booking file written successfully");
        });
    });
}

async function appendBookingAsync(booking) {
    const bookings = await readBookingAsync();
    bookings.push(booking);
    await writeBookingsAsync(bookings);
    return booking;
    
}
function appendLogAsync(message){
    ensureDirectories();
    return new promise((resolve,reject)=>{
        const timeStamp = new Date().toISOString(); //standard date formate
        const finalMessage = `[${timeStamp}]${message}\n`;
        fs.appendFile(logsFile,finalMessage,"utf-8",(err)=>{
            if(err){
                return reject(err);
            }
            resolve("Log appended successfuly.")
        });
    });
}
function renameLogFileSync(){
    ensureDirectories(); //all the folders are in place
    if(fs.existsSync(logsFile))
        {
            fs.renameSync(logsFile,archivedLogsFile);
            return true;
        }   
        return false;
        
}
function deleteArchivedLogSync(){
    if(fs.existsSync(ArchivedlogsFile))
        {
            fs.unlinkSync(archivedLogsFile);
            return true;
        }   
        return false;
    }
    module.exports = {
        dataDir,
        logsDir,
        bookingsFile,
        archivedLogFile,
        ensureDirectories,
listDataFilesSync,
removeLogsDirctorySync,
initializeBookingFileSync,
readBookingAsync,
readBookingSync,
writeBookingsAsync,
appendBookingAsync,
appendLogAsync,
renameLogFileSync,
deleteArchivedLogSync,

    }