const express = require("express");
const router = express.Router();

const{protect}=require("../middleware/auth.middleware");
const{authorize}=require("../middleware/role.middleware");

//public use
router.get("/",(req,res)=>{
    res.send("Get Movies");
});

//Admin only use
router.post("/",protect,authorize("admin"),(req,res)=>{
    res.send("Create movies");
});
module.exports = router;