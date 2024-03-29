// import module: require(module_name)

const http = require('http');

const ip = "127.0.0.1";
const port = 3344;

const server = http.createServer((request, response) => {

    // request  - contains client request data
    // response - return result data to the client
    console.log("Got a reguest from client!");

    switch (request.method) {
        case "GET":
            if (request.url == "/user") {
                let user = {
                    id: 1033,
                    login: "super",
                    email: "ex@gmail.com"
                }
                response.setHeader('Content-Type', 'application/json');
                response.end(JSON.stringify(user));
            }
            else {
                response.statusCode = 200; // OK
                response.setHeader('Content-Type', 'text/plain');
                response.end("Hello from GET case!");
            }
            break;

        case "POST":
            response.statusCode = 200; // OK
            response.setHeader('Content-Type', 'text/plain');
            response.end("Hello from POST case!");
            break;
        default:
            break;
    }
});

server.listen(port, ip, () => {
    console.log(`Server is listening: http://${ip}:${port}`);
});
