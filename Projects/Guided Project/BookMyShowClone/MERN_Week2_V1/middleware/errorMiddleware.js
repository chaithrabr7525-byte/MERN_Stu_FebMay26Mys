//Creating Generic error handler
function errorMidlleware(err,req,res,next){
    const statusCode = err.statusCode || 500;//during the error setup would we not set it take by default as 500
 res.status(statusCode).json({
    success:false,
    message:err.message || "Internal server error"
 });

}
module.exports = errorMidlleware;