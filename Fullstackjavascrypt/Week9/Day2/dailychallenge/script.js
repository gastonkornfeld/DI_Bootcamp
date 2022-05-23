

// 1rst Daily Challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise.
// The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. 
// The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
// Test:


function makeAllCaps(array) {
    let getResultOfPromise = new Promise(function (resolve, reject) {
        let result = array.every(current => typeof current == 'string');
        if (result) {
            array.sort();
            resolve(array);
        } else {
            reject("Rejected one of the elements is not a string");
        }
        
        
    });
    getResultOfPromise.then( result => sortWords(result));
    getResultOfPromise.catch(error => console.log(` ${error}`));
    getResultOfPromise.finally(()=> console.log('the uppercase operation ends'))
}


function sortWords(array) {
    let getResultOfPromise = new Promise(function (resolve, reject) {
        let result = array.map(current => current.toUpperCase());
        if (array.length > 4) {
            resolve(result);
        } else {
            reject("Rejected the array length is to short");
        }
        
        
    });
    getResultOfPromise.then( result => console.log(result));
    getResultOfPromise.catch(error => console.log(` ${error}`));
    getResultOfPromise.finally(()=> console.log('the sort operation ends'))
}



// makeAllCaps(['belgrado', 'dinamarca', 'argentina', 'etiopia', 'reino unido']);

// makeAllCaps(['belgrado', 'dinamarca', 'argentina', 'etiopia', true]);

// makeAllCaps(['belgrado', 'dinamarca']);
















let morse = `{
    " ": " ",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}`

// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", 
// the promise rejects because the character "¡" doesn't exist in the morse javascript object



function toJs(jsonObject) {
    let getResultOfPromise = new Promise(function (resolve, reject) {
        let result = JSON.parse(jsonObject);
        let condition = Object.keys(result).length != 0;
        if (condition) {
            resolve(result);
        } else {
            reject("Rejected the object is empty");
        }
    });
    getResultOfPromise.then( result => toMorse(result));
    getResultOfPromise.catch(error => console.log(` ${error}`));
    getResultOfPromise.finally(()=> console.log('the conversion operation ends'))
}


function toMorse(result) {
    let userWord = prompt('Which word you want to translate to morse');
    let arrayOfKeys = Object.keys(result);
    userWord = userWord.split('');
    let resultOfCorrectCharacter = userWord.every(char=> arrayOfKeys.includes(char));
    
    
    let getResultOfPromise = new Promise(function (resolve, reject) {
        if (resultOfCorrectCharacter) {
            let arrayOfValues = Object.values(result);
            const morseArray = userWord.map((char) => {
                let position = arrayOfKeys.indexOf(char);
                return arrayOfValues[position];
            });
            resolve(morseArray);
        } else {
            reject("Rejected you enter a character not included in the morse code");
        }
        
        
    });
    getResultOfPromise.then( result => joinWords(result));
    getResultOfPromise.catch(error => console.log(` ${error}`));
    getResultOfPromise.finally(()=> console.log('the conversion to morse ends'))
}


// The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

// Chain the three functions.


function joinWords (morseTranslation) {
    console.log(morseTranslation);
    let toDisplay = morseTranslation.map(char => char + "<br>");
    console.log('now will display it in the screen');   
    document.body.innerHTML = "Your morse translation is equal to : <br>" + toDisplay;
}

toJs(morse);