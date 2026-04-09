//Fetching the user booking based on userID
const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const { bookings } = require("../controllers/bookingController");

const router = express.Router();
router.get("/:userId/booking", authMiddleware, (req, res) => { //get booking -> To know about specific user ID
    const userId = Number(req.params.userId);
    const userbookings = bookings.filter((booking) =>
        booking.userId === userId);
    res.status(200).json({
       success:true,
       count: userbookings.length,
       data: userbookings
    });
});
module.exports = router;





