//load the details from environment variables
require("dotenv").config();
const app = require("./app");
const connectDB = require("./src/config/db");
//connectDB
connectDB();
//Port config
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`sever running on port ${PORT}`);
});