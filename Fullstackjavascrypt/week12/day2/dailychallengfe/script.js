

const seconNumber = require('./main.js');

let first = seconNumber.largeNumber;
let date = seconNumber.date();
console.log(date);
const b = 5;

console.log(first + b);



let https = require("http");
const myserver = https.createServer(function (req, res) {
    console.log('I am listening');
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(`<p>My module is <br> ${first+b} </p> <br> <h1>Hi there at the frontend</h1>`);
}).listen(3000);


const mySecondServer = https.createServer(function (req, res) {
    console.log('I am listening in port 8080');
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end(`<p> The date and time are currently: ${date}</p>`);
}).listen(8080);







