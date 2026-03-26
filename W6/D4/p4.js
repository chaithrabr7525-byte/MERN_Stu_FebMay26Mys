//Handling d/f GET routes
const http = require("http");

const server = http.createServer(function(req,res){
    if(req.method === "GET" && req.url === "/"){
        res.writeHead(200,{"Content-type":"text/plain"});
        res.end("Home page/Dashboard.");
        return;
    }
    if(req.method ==="GET"&& req.url ==="/about"){
        res.writeHead(200,{"Content-type":"text/plain"});
        res.end("About Route. Welcome to About us page.");
        return;
    }
    if(req.method ==="GET"&& req.url ==="/products"){
        res.writeHead(200,{"Content-type":"text/plain"});
        res.end("products Route. Welcome to products us page.");
        return;
    }
    if(req.method ==="GET"&& req.url ==="/users"){
        res.writeHead(200,{"Content-type":"text/plain"});
        res.end("returning all users.");
        return;
    }
    //POST = create
    //curl -X POST http://localhost:3001/users
    //curl: Client URL: free, open src cli(command line interface) tool used to 
    // transfer data to or from a server using various n/w protocol
    if(req.method ==="POST"&& req.url ==="/users"){
        res.writeHead(201,{"Content-type":"text/plain"});
        res.end("New user created");
        return;
    }
    //Unknown route fallback
    res.writeHead(404,{"Content-type":"text/plain"});
    res.end("Route not found");
});
server.listen(3001,function(){
    console.log("Server is running at http://localhost:3001");
 });