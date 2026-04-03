//Session security, regeneration, expiration & logout

const express = require ("express");
const session = require("express-session");
const app = express();
app.use(session({
    secret:"MySecretkey",
    resave:false,
    saveUninitialized:false,
    cokkie:{
        maxAge:60*60*1000,
        httpOnly:true,
        secure: process.env.NODE_ENV === "production"
    }
}));

app.get("/login",function(req,res){
    req.session.regenerate(function(error){
        if(error) {
            return next(error);
        }
    req.session.user = { 
    Id:101,
    username:"bubu",
    role:"software trainee"
   };
   res.send("Session regenerated & details stores after login.");
    });
});

app.get("/profile",function(req,res){
     if(!request.session.user){
        return res.status(401).json({
            succes:false,
            message:"No Active Login Session found"
        });
     }
     res.json({
        success:true,
        sessionUser: req.session.user
     });
});

app.get("/logout",function(req,res,next){
    req.session.destroy(function(error){
        if(error){
            return next(error);
        }
        res.clearCookie("connect.sid");
        res.send("Session destroy & cokkie cleared.");
    });
});
app.use(function(error,req,res,next){
    res.status(500).json({
        success:false,
        message:error.message
    });
});
app.listen(4000, function () {
    console.log("Express-session demo server running @ http://localhost:4000");

});








