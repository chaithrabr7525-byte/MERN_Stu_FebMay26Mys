//handling Sync error
const express = require("express");
const app =express();

app.get("/",function(req,res){
    res.send("visit/ check?id=10 or/ check without id");
});
app.get("/check",function(req,res,next){
try{//Sync validation check
    if(!req.query.id){
throw new Error("Query parameter 'id' is required");
    }
    res.json({
success:true,
id:req.query.id
    });
}
catch(error){
    //following the error to centralize error middleware
    next(error);
}
});
app.use(function(error,req,res,next){
    res.status(400).json({
        success:false,
        message:error.message
    });
});
app.listen(4000, function () {
    console.log("Express server running at http://localhost:4000");
});