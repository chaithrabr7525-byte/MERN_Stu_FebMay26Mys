//Creating a simple HTTP server
const http = require("http");

//createServer(): creates a HTTP server instance
//Accepts a callback with two important objects:
//1. request obj: incoming request details
//2. response obj: outgoing response control

 const server = http.createServer(function(req,res){
    //writeHead() sets the response status code & headers
    res.writeHead(200,{"content-type":"text/plain"});
    //end() sends the response body & closes the response
    res.end("Hello from NodeJS HTTP server");
 });

 //listen() binds the server to a part & start accepting req
 server.listen(3000,function(){
    console.log("Server is running at http://localhost:3000");
 });
//port no: 0-1023 system ports
//after 1024-49151: "registered ports"
//27017: mongoDB usually we avoid using this-> befor the server mango start to wrk
//http usually start with 3000/3001