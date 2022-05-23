
let goodGrades = 8;

// let endSemester = new Promise(function (resolve, reject) {
//     if (goodGrades > 90) {
//         resolve("Computer");
//     } else if (goodGrades > 80 && goodGrades <= 89) {
//         resolve("Phone");
//     } else {
//         reject("I won't get the gift");
//     }
// });


// endSemester.then(function (value) {
//     console.log("I got an amazing gift : A ", JSON.stringify(value));
// });

// endSemester.catch(function (value) {
//     console.log("Booo", value);
// });

// endSemester.finally(function () {
//     console.log("No matter if I get a gift or not, I want to have good grades");
// });

// console.log(endSemester)







// Promises Are Asynchronous
// Example:

// let test = new Promise((resolve, reject) => {
//     console.log("Asynchronous test1")
//     if (goodGrades > 90) {
//         resolve("Computer");
//     } else if (goodGrades => 80 && goodGrades <= 89) {
//         resolve("Phone");
//     } else {
//         reject("I won't get the gift");
//     }
//     console.log("Asynchronous test2")
// })

// test.finally(() => console.log(`No matter if I get a gift or not,I want to have good grades`))
// test.then(value => console.log(value))





// Chaining Promises
// The result is passed through the chain of .then handlers.

// Example:

// let bankAmount = 1000
// let expense = 1500

// let promise = new Promise((resolve, reject) => {
//     if (expense<bankAmount) {
//         console.log("OK")
//         resolve(expense);
//     } else {
//         reject("Rejected by the Bank");
//     }
// });

// //1rst "then"
// promise.then((result) => {
//     //result is the argument passed in the resolve function
//     console.log("The result is the expense:", result);
//     console.log("Before we need to add taxes: 17% ")
//     return result * 1.17;
// //2nd "then"
// }).then((result) => {
//     //result is the expense including taxes
//     console.log("The result is the expense included taxes: ", result);
//     return result;
// //3rd "then"
// }).then((result) => {
//     bankAmount -= result
//     console.log(`I have ${bankAmount} dollars left in the bank`)
//     return bankAmount
// });








// Example With An API
let chuckNorris = new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json'

    xhr.onload = function () {
        if (xhr.status != 200) {
            reject(xhr);
        } else {
            resolve(xhr);
        }
    };

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);
    xhr.send();
})

chuckNorris.then(x => console.log(`Joke :  ${x.response.value}`))
chuckNorris.catch(error => console.log(`Error ${error.status}`))
chuckNorris.finally(() => console.log(`I love Chuck Norris!`))


console.log(chuckNorris)