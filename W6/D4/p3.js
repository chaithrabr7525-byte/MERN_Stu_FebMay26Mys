//inspecting req details in an http server
const http = require("http");

const server = http.createServer(function(req,res){
    //writeHead() sets the response status code & headers
    res.writeHead(200,{"content-type":"text/plain"});
    //end() sends the response body & closes the response
    //req.method tells wht kind of rqs we get HTTP method, GET & POST
res.end("Method:"+req.method+"\nURL:"+req.url)
});

 server.listen(3001,function(){
    console.log("Server is running at http://localhost:3001");
 });