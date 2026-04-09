//handling req related to bookings
const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const  {bookingValidationHandler,createBooking,getAllBookings,getMyBookings}=require("../controllers/bookingController")
const router = express.Router();

router.post("/bookings",authMiddleware,bookingValidationHandler,createBooking);//Create a booking /to book tickets
router.get("/bookings/me",authMiddleware,getMyBookings);
router.get("/bookings",authMiddleware,getAllBookings,("admin"),getAllBookings);
module.exports = router;

