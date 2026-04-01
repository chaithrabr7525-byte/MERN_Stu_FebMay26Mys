//Generating token using login function & verification
const jwt = require("jsonwebtoken")
const secretKey = "monkey123";
const wrongsecretKey = "monga123";
function loginUser(email, password) {
    if (email === "correct@email.com" && password === "mp123") {
        const token = jwt.sign({
            userId: 101,
            email: email,
            role: "student"
        }, secretKey, { expiresIn: "1h" });
        return {
            success: true,
            token: token
        };
    }
    return {
        success: false,
        message:"Invalid Credentials"
    };
}
const loginResult = loginUser("correct@email.com","mp123"); //chai@email -> it shows invalid
console.log("login result: ",loginResult);

if (loginResult.success){
    try{
        const verifiedpayload = jwt.verify(loginResult.token,wrongsecretKey);
            console.log("verified payload: ",verifiedpayload);
    }
    catch(error){
    console.log("verification failed",error.message);
}
}