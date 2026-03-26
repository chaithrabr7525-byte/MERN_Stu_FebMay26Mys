//Parsing the JSON request bodies
const http = require("http");

const server = http.createServer(function (req, res) {
    if (req.method === "POST" && req.url === "/api/users") {
        let body = "";

        req.on("data", function (chunk) {
            body += chunk.toString();
        });

        req.on("end", function () {
            try {
                const parsed = JSON.parse(body);
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                    success: true,
                    received: parsed
                }));
            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({
                    success: false,
                    received: "Invalid JSON body"
                }));
            }
        });
    } else {
        // Handle all other routes or methods with 404
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: false, message: "Route not found" }));
    }
});

server.listen(3001, function () {
    console.log("Server is running at http://localhost:3001");
});
