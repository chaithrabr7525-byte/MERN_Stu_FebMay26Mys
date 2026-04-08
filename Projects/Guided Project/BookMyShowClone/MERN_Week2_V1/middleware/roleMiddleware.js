//roleMiddleware helps to find who can access what 
const CustomError = require("../util/CustomError");

function roleMiddleware(...allowedRoles){
    return(req,res,next)=>{
        if(!req.user){
return next(new CustomError("User Info Not Found ",401));
        }
        if(!allowedRoles.includes(req.user.role)){
return next(new CustomError("Forbidden: you do not have access to this resource",401));
        }
        next();
    };
}
module.exports = roleMiddleware;









