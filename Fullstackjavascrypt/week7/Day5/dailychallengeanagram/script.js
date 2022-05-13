


// Instructions
// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.


// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"


// Do we need to consider whitespace?
// Trim whitespace prior to comparison.
const checkIfAnamgram = (word1, word2) => {
  // word1 = word1.toUpperCase();
  // word2 = word2.toUpperCase();
  let firsWordSorted = word1.toUpperCase().split('').sort().filter((element) => element!= ' ');
  console.log(firsWordSorted);
  let secondWordSorted = word2.toUpperCase().split('').sort().filter((element) => element!= ' ');
  console.log(secondWordSorted);

  if(word1.length !== word2.length) {
    return false;
  }
  return firsWordSorted.join('') === secondWordSorted.join('');
}

console.log(checkIfAnamgram("Astron omer", "Moon starer" ));