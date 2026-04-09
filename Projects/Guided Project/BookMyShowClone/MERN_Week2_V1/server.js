//Main express server entry points
const app = require ("./app");

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`sever running on http://localhost:${PORT}`);
});

//http://localhost:5000/auth/login
//req->server.js --->app.js-->authRoutes-->authController-->loginUser()
//loginUser()
//1. success:token->cookie->session response:200
//2. Failure:error->
// CustomErrror -->
//1. email/password are required.,400
//2. invalid email/password.,401