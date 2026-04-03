//managing session with express-session

const express = require ("express");
const session = require("express-session");
const app = express();
app.use(session({
    secret:"MySecretkey",
    resave:false,
    saveUninitialized:false,
    cokkie:{
        maxAge:60*60*1000
    }
}));

app.get("/login",function(req,res){
   req.session.user = { //after the sign in happen we get this details
    Id:101,
    username:"bubu",
    role:"software trainee"
   };
   res.send("Session detail stores after login.");
});

app.get("/profile",function(req,res){
     if(!request.session.user){
        return res.status(401).json({
            succes:false,
            message:"No Active Login Session found"
        });
     }
     res.json({
        superccess:true,
        sessionUser: req.session.user
     });
});

app.listen(4000, function () {
    console.log("Express-session demo server running @ http://localhost:4000");

});








