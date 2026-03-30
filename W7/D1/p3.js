//Handlig D/F HTTP methods in express
const express = require ("express");

const app = express();
//to read
app.get("/users",function(req,res){
    res.send("Returning all users");
});
//to create 
app.post("/users",function(req,res){
    res.status(201).send("User created.");
});
app.listen(4000,function(){
    console.log("Express server running http://localhost:4000");
});