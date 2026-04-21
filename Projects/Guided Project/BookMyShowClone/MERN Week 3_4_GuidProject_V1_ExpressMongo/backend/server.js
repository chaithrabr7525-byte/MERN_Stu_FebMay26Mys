//load the details from environment variables
require("dorenv").config();
const app = require("./app");
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`sever running on port ${PORT}`);
});