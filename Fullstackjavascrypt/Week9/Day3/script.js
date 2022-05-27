// 


// In case the return value is not a Promise, it automatically converts the value to a resolved Promise.

// async function case3() {
//   //await for 20 seconds when called
//   let x = await 20;
//   console.log(x); 
// }
// case3();




// async function case4() {
//     try {
//       var z = await Promise.reject('rejecteds');
//     } 
//     catch(e) {
//       console.error(e); 
//     }
// }
  
// case4();






// Fetch examples


// ====================================================================================================

// Example

// Steps :

// Using the Fetch API, we call the API sunrise-sunset, using fetch() with a URL as the argument.
// Then, a response is received.
// The resp parameter takes the object’s value returned from fetch(url).
// However, the response you get is not JSON but an object with a series of methods.
// To convert the object returned into JSON, use the json() method.
// The JSON data still needs to be processed. Add another then() statement.
// With both then() functions completed, you can now add the catch() function.
// This function will log the potential error to the console.



console.log("Starting ...")


const func = () => {
    console.log("Working ...")
    fetch("https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818")
        .then((resp) => resp.json()) //return a promise
        .then((resp) => 
              console.log(`The hour of the sunrise in Tel Aviv is:
              ${resp.results.sunrise}`))
        .catch(function (error) {
            console.log(`We got the error ${error}`)
        });
    console.log("Work Done ...")
}


func()

// =====================================================================================


// async function foo() {
//     await 1
//     // .then(e => console.log(e));
//  }


// foo();



// async function hello() {
//     return 'Hello';
// }

// const b = hello();

// console.log(b);

// b.then(result => console.log(result));









// Example : with arrow function

// const hello = async () => 'Hello'

// const b = hello();

// b.then((result) => console.log(result))



// =============================================================================================

// Same example than before but but using async and await



let goodGrades = 93;

let endSemester = new Promise((resolve, reject) => {
    if (goodGrades > 90) {
        resolve("Computer");
    } else if (goodGrades => 80 && goodGrades <= 89) {
        resolve("Phone");
    } else {
        reject("I won't get the gift");
    }
})
// this is whitout the await.

// const checkRequest = () => {
//     console.log('test 2')
//     endSemester
//         .then(value =>
//             console.log("I got an amazing gift : A ", value));
// }

//  and whit the async await like this

const checkRequest = async () => {
    console.log('test 2')
    console.log("I got an amazing gift : A ", await endSemester)
}

console.log('test 1')
checkRequest()
console.log('test 3')





// =================================================================================



// Example async/await and Fetch API

// const fetchSunRise = async (endpoint) => {
//     try {
//         const response = await fetch(endpoint);
//         if (response.status == 400) {
//             throw new Error("API - wrong link")
//         } else {
//             console.log("response", response)
//             let data = await response.json();
//             console.log("data", data)
//             hey // undefined variable
//             let sunrise = data.results.sunrise
//             console.log(`The hour of the sunrise in Tel Aviv is: ${sunrise}`)
//         }
//     } catch (err) {
//         console.log(err)
//     }
// }

// fetchSunRise("https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818");






// =======================================================================================




// Fetch
// The fetch() requires one mandatory argument that is the URL of the resource.
// It returns a promise that resolves the response.

// fetch('https://jsonplaceholder.typicode.com/users',{
//   method: "POST"
//  }).then(response => {
//     return response.json()
//   })  // convert to json
//  .then(data => {
//     console.log(data)
//   })    // print data to console
//  .catch(err => {
//     console.log('Request Failed', err)
//   }); // Catch errors







// fetch('https://zivuch.github.io/emails.xml')
// .then(res => {
//   // return res.text()       // response body (=> Promise)
//   // return res.json()      // parse via JSON (=> Promise)
//   console.log(res.status  )     //=> 200
//   console.log(res.statusText)   //=> 'OK'
//   console.log(res.redirected )  //=> false
//   console.log(res.ok        )   //=> true
//   console.log(res.url     )     //=> 'http://site.com/data.json'
//   console.log(res.type     )    //=> 'basic'
//                    //   ('cors' 'default' 'error'
//                    //    'opaque' 'opaqueredirect')
//   console.log(res.headers.get('Content-Type'))
// })
// .then(data => {
//   console.log(data);
// })




// ========================================================================================


// async/await is a feature of JavaScript that allows you to write asynchronous code that looks a lot like
// synchronous code, and under the hood, it’s powered by JavaScript Promises.

// const anAsyncFunction = async () => {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Done awaiting!");
//     }, 3000);
//   });
// };
// //
// console.log(anAsyncFunction());
// anAsyncFunction().then(res => console.log(res));





// ===========================================================================================



// Async/Await In Loops
// WARNING: async/await doesn’t play nicely with .forEach() loops
// async/await plays nicely with for , for of and while loops


// this way the 3 of them resolvee at the same time


// const timeout = async (milliseconds, id) => {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(id," Done!");
//       resolve();
//     }, milliseconds);
//   });
// };

// (async function() {
//   console.log('1'," Done!");

//   ["first", "second", "third"].forEach(async (id) => {
//     await timeout(2000, id);
//   });

//   console.log('3'," Done!");
// })();


// to make them resolve in different times use this one.


const timeout = async (milliseconds, id) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(id," Done!");
        resolve();
      }, milliseconds);
    });
  };
  
  (async() => {
    console.log('1'," Done!");
  
    for (const item of ["first", "second", "third"]) {
      await timeout(2000, item);
    }
  
    console.log('3'," Done!");
  })();