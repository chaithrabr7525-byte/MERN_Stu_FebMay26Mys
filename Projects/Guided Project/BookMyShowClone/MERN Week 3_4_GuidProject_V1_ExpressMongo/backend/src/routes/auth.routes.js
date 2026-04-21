const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");

//Router
router.post("/register",authController.register);
router.post("/verify-otp",authController.verify-otp);
router.post("/login",authController.login);

module.exports = router;