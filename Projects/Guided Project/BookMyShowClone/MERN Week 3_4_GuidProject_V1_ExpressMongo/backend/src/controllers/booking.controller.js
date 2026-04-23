const bookingService = require("../services/booking.service");

//create booking
exports.createBooking = async (req, res, next) => {
    try {
        const booking = await bookingService.createBooking(
            req.user._id,
            req.body
        );
        res.status(201).json({
            success:true,
            message:"Booked confirmed.",
            data:booking,
        });
    }
    catch (error) {
        next(error);
    }
};

//Get bookings
exports.getMyBookings = async(req,res,next)=>{
    try{
const bookings = await bookingService.getUserBooking(req,user._id);
 res.status(200).json({
            success:true,
            message:"Bookings fetched.",
            data:bookings,
        });
    }
    catch(error){
next(error);
    }
};
//cancel bookings
exports.cancelMyBookings = async(req,res,next)=>{
    try{
const bookings = await bookingService.cancelMyBookings(req.params.id,req,user._id);
 res.status(200).json({
            success:true,
            message:"Bookings cancelled.",
            data:bookings,
        });
    }
    catch(error){
next(error);
    }
};