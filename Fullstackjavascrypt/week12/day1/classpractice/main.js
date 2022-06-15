


let imported = require('./modules/axiosfetch.js')
let currentDate = require('./modules/date.js');
let make_pizza = require('./modules/pizza.js');
let operators = require('./modules/operator');

// console.log(imported.fetchTest('https://jsonplaceholder.typicode.com/users'));


// console.log(imported.fetchTest('https://www.swapi.tech/api/people/1'));

console.log(`Hello ${currentDate.theName} the current date is ${currentDate.myDate()}`)

make_pizza.make_pizza('small', 'olives', 'onion', 'tomato', 'calabaza');


operators.add(2,3);
operators.divide(10,2);





// The following example demonstrates how to use Node.js http module to create a web server.

// let http = require('http');
// let server = http.createServer(function(req, res){
// });
// server.listen(5000); 



// path module have all of this metods

// path
// { resolve: [Function: resolve],
//   normalize: [Function: normalize],
//   isAbsolute: [Function: isAbsolute],
//   join: [Function: join],
//   relative: [Function: relative],
//   toNamespacedPath: [Function: toNamespacedPath],
//   dirname: [Function: dirname],
//   basename: [Function: basename],
//   extname: [Function: extname],
//   format: [Function: format],
//   parse: [Function: parse]
// }


// example


let path = require('path');
let filename = path.basename('/Users/DI/example.js');
console.log(filename);


// Creating A Node.Js Application whit http


// let https = require("http");
// const myserver = https.createServer(function (req, res) {
//   res.writeHead(200);
//   res.end("hello world\n");
// }).listen(3000);