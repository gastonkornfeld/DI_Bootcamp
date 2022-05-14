



// Exercise 1 : Is_Blank
// Instructions
// Write a program to check whether a string is blank or not.

// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false


function isBlank(string) {
    return string == ''?true:false;
}

console.log(isBlank(''));







// Exercise 2 : Abbrev_name
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrevName("Robin Singh")); --> "Robin S."

function abbrevName(string) {
    let result = string.split(' ');
    result[1] = result[1].substring(0,1);
    result = result.join(' ') + '.';
    return result;
}


console.log(abbrevName("Gaston Kornfeld"));









// Exercise 3 : SwapCase
// Instructions
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.


function swapCase(string) {
    let result = string.split('');
    result = result.map(e => {
        if(e.toUpperCase() == e) {
            return e.toLowerCase();
        } else if(e.toLowerCase() == e) {
            return e.toUpperCase();
        }
    });
    console.log(result);
}



swapCase('asdDSHSH');







// Exercise 4 : Omnipresent Value
// Instructions
// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.
// To illustrate:

[[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// 3 exists in every element inside this array, so is omnipresent.
// Examples

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false


function omnipresent(arr, number) {
    let result = arr.map(element => element.includes(number));
    console.log(result);
    return result.includes(false) ? false : true;
}
console.log(omnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));
console.log(omnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));

