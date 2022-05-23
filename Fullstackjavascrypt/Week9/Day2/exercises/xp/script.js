


// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.
// Test:



function compareToTen(num) {
    let getResultOfPromise = new Promise(function (resolve, reject) {
        if (num <= 10) {
            resolve("The Number Is less than 10. Correct");
        } else {
            reject("Rejected The number is greater than 10");
        }
    });
    getResultOfPromise.then( result => console.log(`the result is ${result}`));
    getResultOfPromise.catch(result => console.log(` ${result}`));
    getResultOfPromise.finally(()=> console.log('the operation ends'))
}


compareToTen(3);
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
let promise2 = Promise.resolve('success').then(result => console.log(result));







// Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

// Add code to catch errors and console.log ‘Ooops something went wrong’.



const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
    // setTimeout(() => {
    //     reject();
    //   }, 3000);
})
.then((result) => {
    console.log("Success");
})
promise.catch(result => console.log('oops something went wrong'));






// Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”



let resolvedPromise = Promise.resolve(3).then(result => console.log(result));
let rejectedPromise = Promise.reject('Boo!').then(result => console.log(result));

