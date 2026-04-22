const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/auth.controller");

//Routers
router.post("/register",authcontroller.register);
router.post("/verify-otp",authcontroller.verifyOTP);
router.post("/login",authcontroller.login);

module.exports = router;