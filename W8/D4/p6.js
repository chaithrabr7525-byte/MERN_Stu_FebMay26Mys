//otp generation and verification using crypto module of Node.js and MongoDB for storage
const crypto = require("crypto");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/datedb1")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
const otpSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    otp: {
        type: String,
        required: true
    },
    expiresAt: {
        type: Date,
        required: true,
        index: { expires: 0 }
    },
    attemps: {
        type: Number,
        default: 0
    }
});
const OTP = mongoose.model('OTP', otpSchema);

async function generateOTp(userId) {
    const otp = crypto.randomInt(100000, 999999).toString();

    await OTP.findOneAndUpdate({ userId },
        {
            userId,
            otp,
            expiresAt: new Date(Date.now() + 1000),
            attemps: 0
        },
        {
            upsert: true,
            returnDocument: "after"
        }
    );
    console.log("OTP:", otp);
}
async function verifyOTP(userId, enteredOtp) {
    const record = await OTP.findOne({ userId });
    if (!record) {
        return "No OTP";
    }
    if (Date.now() > record.expiresAt) return "Expired";
    if (record.attempts >= 3.) return "blocked";
    record.attempts ++;
if( record.otp === String(enteredOtp)){
    await OTP.deleteOne({userId});
    return "Valid";
}
await record.save();
return "Invalid";
}
  async function main(){
    await generateOTp("user1");
    const storedRecord = await OTP.findOne({userId:'user1'});
    const userEnteredOtp = storedRecord.otp;

 setTimeout( async() => {
        const result = await verifyOTP("user1",userEnteredOtp);
    console.log(result);
    await mongoose.connection.close();
    },3000);


    // const result = await verifyOTP("user1",userEnteredOtp);
    // console.log(result);
    // await mongoose.connection.close();
  }
  main()
