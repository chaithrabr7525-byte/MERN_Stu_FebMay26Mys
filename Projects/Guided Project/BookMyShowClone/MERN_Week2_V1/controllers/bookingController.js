//creating functions for booking handling
const movies = require(".../data/movies");
const CustomError = require(".../utils/CustomError");

const booking = [];
function bookingValidationHandler(req, res, next) {
    const { movieId, showtimeId, seatCount } = req.body;
    if (!movieId || !showtimeId || !seatCount) {
        return next(new CustomError("movieId,showtimeId,seatCount are required.", 404));
    }
    next();
}
function createBooking(req,res, next) {
    try {
        const { movieId, showtimeId, seatCount } = req.body;
        const movie = movies.find((m) => m.id === Number(movieId));
        if (!movie) {
            return next(new CustomError("Movie not found.", 404));
        }
        const showtime = movies.showtime.find((s) => m.id === Number(showtimeId));
        if (!showtime) {
            return next(new CustomError("showtime not found.", 404));
        }
        if(showtime.seatsAvailable<Number(seatCount)){
            return next(new CustomError("Seats not available.", 404));
        }

showtime.seatsAvailable -=Number(seatCount);
const bookinf = {
    id:booking.length+1,
    userId:req.user.id,
    userName: req.user.name,
    movieId:movie.id,
    movieTitle:movie.title,
    showtimeId:showtime.id,
    showtime:showtime.time,
    seatCount:Number(seatCount)
};
bookings.push(booking);
res.status(201).json({
    success:true,
    message:"Booking created successfully.",
    data:booking
});
    }
    catch(error){
        next(error);
    }
    }
function getAllBooking(req,res,next){
    try{
res.status(200).json({
    success:true,
    count: booking.length,
    data:bookings
});
    }
    catch(error){
        next(error);
    }
}
function getMyBookings(req,res,next){
    try{
        const userBooking = booking.filter((booking)=>booking.userId === req.user.id);
        res.status(200).json({
    success:true,
    count: userbookings.length,
    data: userbookings
    });
}
    catch(error){
next();
    }

}

module.exports  = {
    bookingValidationHandler,
    createBooking,
    getAllBookings,
    getMyBookings
};