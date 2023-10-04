const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]} words - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(words) {
  return words.sort((a,b) => a.length - b.length)
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  const finalstring = [];
  for (let H = 0; H < word.length; H++) {
    const scroll = word.slice(H + 1)+word.slice(0,H+1);
finalstring.push(scroll)
  }
  return finalstring
  }
  

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  if (Math.max(...numbers)-Math.min(...numbers)) {
    return Math.max(...numbers) - Math.min(...numbers)
  } else{
    return numbers ;
  }
}

/**
 * Returns the translation of English to morse code.
 * @param {String} message - A string to translate. 
 * @param {Object[]} dictionary - A morse code dictionary (one is imported at the top of the file, use it if you want to test your code in this file)
 * @returns {Number} The message in morse code. Note that the tests do not want you to separate words with slashes, like in the example below.
 * Example: "A new month"
 * .- / -. . .-- / -- --- -. - ....
 * Hint: Check the morse-code-dictionary.json file to see what data is available.
 */
function morseCodeTranslator(message, dictionary) {
  let morseCode = ``;
  let words = message.toUpperCase();
  for (const word of words) {
    for (const letters in dictionary) {
      if (word.includes(letters)) {
        morseCode += dictionary[letters] +` `; 
      }  
       } 
       }
      return morseCode.trim()
    }
  

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
