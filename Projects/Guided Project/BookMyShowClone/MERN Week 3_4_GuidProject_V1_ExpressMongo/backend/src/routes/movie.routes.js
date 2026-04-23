const express = require("express");
const router = express.Router();
const moviecontroller = require("../controllers/movie.controller");
const{protect}=require("../middleware/auth.middleware");
const{authorize}=require("../middleware/role.middleware");

//public use
router.get("/",moviecontroller.getMovies);
    
//Admin only use
router.post("/",protect,authorize("admin"),moviecontroller.createMovie);
router.put("/:id",protect,authorize("admin"),moviecontroller.updateMovie);
router.delete("/:id",protect,authorize("admin"),moviecontroller.deleteMovie);
    
module.exports = router;