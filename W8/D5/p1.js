//File upload using multer: with file type, file size
const express = require("express");
const multer = require("multer");

async function main() {
    try {
        const app = express();
        //mimetype: format of file
        const fileFilter = (req, file, callback) => {
            if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
                callback(null, true);
            }
            else {
                callback(new Error("Only PNG & JPEG images are allowed."), false);
            }
        };
        //Approach 1 :using dest:
        const uploadwithdest = multer({
            dest: "uploads/",
            limits: { fileSize: 1024 * 1024 * 2 },//1.95mb
            fileFilter
        });
        app.post("/upload-dest", uploadwithdest.single("file"), (req, res) => {
            res.send({
                message: "uploaded using dest Approach",
                note: "Filename is random,no extension preserved",
                file: req.file
            });
        });
        //Approach 2: using diskStorage
        const storage = multer.diskStorage({
            //where to store the file 
            destination: (req, res, callback) => {
                callback(null, "uploads/");
            },
            //How to name the file
            filename: (req, file, callback) => {
                callback(null, Date.now() + "-" + file.originalname);
            }
        });
        const uploadwithdisk = multer({
            storage,
            limits: { fileSize: 1024 * 1024 * 2 },//1.95mb
            fileFilter
        });
         app.post("/upload-disk", uploadwithdisk.single("file"), (req, res) => {
            res.send({
                message: "uploaded using diskStorage Approach",
                note: "Filename is controled & extension preserved",
                file: req.file
            });
        });
        app.listen(3000, () => {
            console.log("Server started on port http://localhost:3000");
            console.log("POST /upload-dest");
        });
    }
    catch (error) {
        console.log("Error:", error.message);
    }
}
main();