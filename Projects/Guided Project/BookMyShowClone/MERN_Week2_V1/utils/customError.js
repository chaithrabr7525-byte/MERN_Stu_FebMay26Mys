//Creating the Custom error handling
class CustomError extends Error{
    constructor(message,statusCode){ //this is object of customError
        super(message);
         this.statusCode = statusCode;
    }
}

module.exports = CustomError;