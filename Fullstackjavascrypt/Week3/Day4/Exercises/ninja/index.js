

// Exercise 1 : Age Difference
// Instruction
// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

// =====================================================================================================

// let yearBorn1 = Number(prompt("tell me the year of the first born:"));
// let yearBorn2 = Number(prompt("tell me the year of the second born:"));

// let agePerson1 = 2022 - yearBorn1;
// let agePerson2 = 2022 - yearBorn2;
// let younger = agePerson1 < agePerson2 ? 1 : 2;
// let ageDifference = Math.abs(agePerson1-agePerson2);

// // el menor tiene que llegar a la edad de la diferencia
// let howManyYearsToPass = 0;
// let agediff1;
// let agediff2;
// if (younger == 1) {
//     howManyYearsToPass = ageDifference - agePerson1;
//     agediff1 = ageDifference;
//     agediff2 = ageDifference * 2;

// } else {
//     howManyYearsToPass = ageDifference - agePerson2;
//     agediff1 = ageDifference * 2;
//     agediff2 = ageDifference;
// }

// let yearWhenIsDouble = 2022 + howManyYearsToPass;


// console.log(`Where are in 2020 \n person 1 was born in ${yearBorn1}, person 2 was born in ${yearBorn2} \n person 1 is ${agePerson1} years and 2 is ${agePerson2},\n in ${yearWhenIsDouble} person1 will have ${agediff1} and person 2 ${agediff2}`)


// ================================================================================================================











// Exercise 2 : Zip Codes
// Instruction
// Harder exercise
// Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, 
// then do it using Regular Expressions

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length



let numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
function checkZipCode() {
    let zipCode = prompt("Which number is your zip code: ");
    console.log(zipCode);
    let lengthZip = String(zipCode).length;
    console.log(lengthZip);
    if(lengthZip != 5) {
        return false;
    }

    for (let char of zipCode) {
        if (!(numberList.includes(char))) {
            return false;
        }
    }

    return true;

}

// console.log(checkZipCode()); 












// Exercise 3 : Secret Word
// Instruction
// Harder exercise
// Hint : Use Regular Expressions

// Prompt the user for a word and save it to a variable.
let userWord = prompt('Give me a word: ');
let vowels = ['a', 'e', 'i', 'o', 'u'];
let replaceWhit = ['0', '1', '2', '3', '4'];
// Delete all the vowels of the word and console.log the result.

// =====================delete vowels =====================================================================
// for (let char of userWord) {
//     if (vowels.includes(char)) {
//         indexOfVowel = userWord.indexOf(char);
//         userWord = userWord.substring(0,indexOfVowel) + userWord.substring(indexOfVowel+1, userWord.length);
//         console.log(userWord);
//     }
// }

// =======================delete vowels ===================================================================

// Bonus: Replace the vowels with another character and console.log the result

// =====================replace vowels ====================================================================

for (let char of userWord) {
    if (vowels.includes(char)) {
        indexOfVowel = userWord.indexOf(char);
        whichVowel = vowels.indexOf(char);
        userWord = userWord.substring(0,indexOfVowel) + replaceWhit[whichVowel] + userWord.substring(indexOfVowel+1, userWord.length);
        console.log(userWord);
    }
}


// =====================replace vowels ========================================================================



// a = 1
// e = 2
// i = 3
// o = 4
// u = 5