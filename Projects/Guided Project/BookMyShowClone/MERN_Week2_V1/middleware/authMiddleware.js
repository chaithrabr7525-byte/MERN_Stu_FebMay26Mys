//Creating a Middleware to verify jwt token
const jwt = reuire("jsonwebtoken");
const CustomError = require("../util/CustomError");

const JWT_SECRET = "BubuRani";
function authMiddleware(req, res, next) {
    try {
        const authHeader = req.header.authorization;
        const tokenFromHeader = authHeader && authHeader.startsWith("Bearer ") ? authHeader.split("")[1] : null;

        const token = tokenFromHeader || req.cookies.token;
        
        if(!token){
            return next(new CustomError("Access denied. Token not provide",401));
        }
        const decoded = jwt.verify(token,JWT_SECRET);
        req.user = decoded;
        next();

    }
    catch(error){
        next(new CustomError("Found Invalid Token",401));
    }
}
module.exports = {
    authMiddleware,
    JWT_SECRET
};