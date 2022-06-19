// // 1 - Import Node.js core module
// const http = require('http'); 
// // 2 - creating server
// const server = http.createServer((req, res) => {   
//     //handle incoming requests here..
// });
// //3 - listen for any incoming requests
// server.listen(5000); 
// console.log('Node.js web server at port 5000 is running..')

// const json =
// {
//     "menu": {
//         "id": "file",
//         "value": "File",
//         "popup": {
//             "menuitem": [
//                 { "value": "New", "onclick": "CreateNewDoc()" },
//                 { "value": "Open", "onclick": "OpenDoc()" },
//                 { "value": "Close", "onclick": "CloseDoc()" }
//             ]
//         }
//     }
// }

// const http = require('http'); 
// const server = http.createServer((req, res) => {  
//     //check the URL of the current request
//     //check if the request URL is equal to /welcome.
//     if (req.url == '/welcome') { 
//         // 1. inform the client that we send JSON response in the header with the appropriate content type.
//         res.setHeader("Content-Type", "application/json");
//         //2. 
//         res.writeHead(200);
//         res.end(JSON.stringify({ json}));
//         // OR
//         // res.write(JSON.stringify({ message: "Welcome New User"}));  
//         //res.end();  
//     } else {
//          res.end("Another page");  
//     }
// });
// server.listen(5000);
// console.log('Node.js web server at port 5000 is running..')




// const http = require('http');
// const servertwo = http.createServer((req, res) => {
//     //check the URL of the current request
//     if (req.url == '/welcome') {
//         // appropriate Content-Type header for an HTML response:
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<html><body><p>Welcome new user</p></body></html>');
//         res.end();
//     } else {
//         res.end('<html><body><p>Another page</p></body></html>');
//     }
// });
// servertwo.listen(5000);
// console.log('Node.js web server at port 5000 is running..');



// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     console.log('first');
//   return res.send('Hello World!')
// })

// app.get('/aboutme', (req, res) => res.send('I love coding!'))
// app.get('/tutorial', (req, res) => res.send('Tutorial about express!'))

// app.listen(5000)

// app.use('/home', (req, res, next) => {
//     console.log('mamasita');
//     next();
// });

// app.get('/home', (req, res) => {
//     console.log("-----In the Home Page-----");
//     res.send('Home Page');
// });

// app.get('/about', (req, res) => {
//     console.log("-----In the About Page-----");
//     res.send('About Page');
// });

// app.get('/', function (req, res) {
//     res.send('GET request to the homepage')
// })
  
//   // POST method route
// app.post('/', function (req, res) {
//     res.send('POST request to the homepage')
// })

// app.put('/user', function (req, res) {
//     res.send('Got a PUT request at /user')
// })
// app.get('/tutorial/:notion', (req, res) => {
//     console.log("req.params: ", req.params);
//     console.log(req.query);
//     res.send(`Tutorial about ${req.params.notion}!`);
// })

// app.get('/tutorial2/:notion2', (req, res) => {
//     console.log("req.params: ", req.params)
//     res.send(`Tutorial about ${req.params.notion2}!`)
// })

// app.use('/a', express.static('public'));

// app.get('/a', (req, res) => {
// });
// app.get('/json', (req, res) => {
//     res.json({ course: "Javascript", school: "DevelopersInstitute" });
// })

// app.listen(3000, () => console.log('Example app listening on port 3000!'));




// BodyParser
// Instead of capturing data from a query (previous lesson), let’s see how to capture them from a form.

// As we saw earlier, it’s quite easy to send back JSON using .json, 
// but it’s a little trickier to accept user input when sent as JSON or other values.
// Express requires an additional middleware module to extract incoming data of a POST request.

// To do that, we need to include another module called body-parser, which parses the “body” of the response. 
// This kind of module is called middleware as it sits in the middle of the request/response
//  cycle and can modify either the request or response.

// When using external middleware, there is a 3 steps process:

// Install it - npm install body-parser
// Require it - const bodyParser = require("body-parser")
// Use it - app.use(bodyParser.urlencoded({ extended: true }))



// const express = require('express');
// const app = express();
// //require the module
// const bodyParser = require("body-parser")

// app.use(express.static('public'));
// //use the module
// app.use(bodyParser.urlencoded({ extended: true }));

// // app.use(bodyParser.json());
// // app.use(bodyParser.raw());
// app.post('/search', (req, res) => {
//     console.log(req.body);
//     res.send('welcome, ' + req.body.fullname + 'that lives in' + req.body.Address);
// })

// app.listen(3000, () => console.log('Example app listening on port 3000!'));



// class example


const exp = require('express');
const bp = require('body-parser');
const app = exp();

// parse application/x-www-form-urlencoded
app.use(bp.urlencoded({ extended: false }))
// parse application/json
app.use(bp.json())

// app.set('port',9000);
// console.log(__dirname);
app.use('/',exp.static(__dirname+'/public'));

app.route('/login')
  .get( (req,res)=> {
    console.log(req.query);
    const user = req.query.username;
    console.log(user);
    const pass = req.query.password;
    const data = {
      message: 'Welcome',
      user
    }
    console.log(data);
    res.send(data)
  })
  .post( (req,res) => {
    console.log(req.body);
    let user = req.body.username;
    let pass = req.body.password;
    const data = {
      message: 'Welcome',
      user
    }
    console.log('POST',data);
    res.send(data)
})

app.get('/user/:ziv',(req,res)=>{
  console.log(req.params);
  res.send('bla bla')
})

app.listen(3000);
// app.listen(app.get('port'), ()=>{
  // console.log('listen on port 9000');
// })