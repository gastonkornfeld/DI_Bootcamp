let https = require("http");
const myserver = https.createServer(function (req, res) {
    console.log('I am listening');
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(`<h1>First response</h1> <br> <h2>second response</h2> <br> <h3>third response</h3>`);
}).listen(3000);


