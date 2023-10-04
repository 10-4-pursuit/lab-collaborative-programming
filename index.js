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
  const output = []
  for (let i=0; i<word.length; i++) {
    let initial = word.slice(i) + word.slice(0, i)
    output.push(initial)
  }
  output.push(word)
  output.shift()
  return output
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  if (!(numbers.every(num => typeof num === 'number'))) {
    return numbers
  }
  
  let largest = Math.max(...numbers)
  let smallest = Math.min(...numbers)
  return largest - smallest
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
  const words = message.split(' ');
  const morseWords = words.map((word) => {
    const letters = word.split('');
    const morseLetters = letters.map((letter) => {
      if (dictionary[letter.toUpperCase()]) {
        return dictionary[letter.toUpperCase()];
      } else {
        return letter;
      }
    });
    return morseLetters.join(' ');
  });
  return morseWords.join(' ');
  
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
