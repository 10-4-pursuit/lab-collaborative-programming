const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]} words - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(words) {
  // Use the sort() method with a custom comparison function
  words.sort(function(a, b) {
<<<<<<< HEAD
  // Compare the lengths of the two words
  return a.length - b.length;
});

return words;

}

=======
    // Compare the lengths of the two words
    return a.length - b.length;
  });

  return words;
}

// Example usage:
const words = ["apple", "banana", "cherry", "date", "elderberry"];
const sortedWords = sortByStringLength(words);
console.log(sortedWords);
// Question 1 was completed by Luis
>>>>>>> 56e52797c08b300b221374028f332f2388251c19


/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 */
function textScroller(word) {
  const result = [];
<<<<<<< HEAD

  // Loop through each character position
  for (let i = 0; i < word.length; i++) {
  // Create a rotated version of the word
  const rotatedWord = word.slice(i) + word.slice(0, i);

  // Push the rotated word to the result array
  result.push(rotatedWord);

=======
  
  // Loop through each character position
  for (let i = 0; i < word.length; i++) {
    // Create a rotated version of the word
    const rotatedWord = word.slice(i) + word.slice(0, i);
    
    // Push the rotated word to the result array
    result.push(rotatedWord);
>>>>>>> 56e52797c08b300b221374028f332f2388251c19
  }

  return result;
}
<<<<<<< HEAD
=======

// Example usage:
const word = "Brooklyn";
const scrollingPositions = textScroller(word);
console.log(scrollingPositions);

// Question 2 was completed by Luis
>>>>>>> 56e52797c08b300b221374028f332f2388251c19

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes() {}

/**
 * Returns the translation of English to morse code.
 * @param {String} message - A string to translate. 
 * @param {Object[]} dictionary - A morse code dictionary (one is imported at the top of the file, use it if you want to test your code in this file)
 * @returns {Number} The message in morse code. Note that the tests do not want you to separate words with slashes, like in the example below.
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 * Hint: Check the morse-code-dictionary.json file to see what data is available.
 */
function morseCodeTranslator() {}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
