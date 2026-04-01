//JWT fundamentals: token generation & verification 
const jwt = require("jsonwebtoken");

const secretKey = "monkey123";
//payload holds small non-snesitive data
const payload ={
    userId:101,
    role:"member"

};

const token = jwt.sign(payload,secretKey,{expiresIn:"1h"});

console.log("Token generated successfully\n",token);

const tokenParts = token.split(".");
console.log("Header section:",tokenParts[0]);
console.log("payload section:",tokenParts[1]);
console.log("Signature section:",tokenParts[2]);
console.log("JWT part count :",tokenParts.length);
try{
    //jwt.verify()checks trust, signature & expiration
    const verifiedpayload = jwt.verify(token,secretKey);
    console.log("verified payload: ",verifiedpayload);
}
catch(error){
    console.log("verification failed",error.message);
}

const decodeWithoutverification = jwt.decode(token);
console.log("Decoded token:", decodeWithoutverification);