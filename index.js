const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]} words - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(words) {
  return words.sort((a, b) => a.length - b.length)
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  const scrolled = [];
  
  for (let i = 0; i < word.length; i++) {
    let scrambled = word.slice(i) + word.slice(0, i);
    scrolled.push(scrambled); 
  }
  scrolled.push(word)
  scrolled.shift()
  return scrolled;
}


/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  if (!numbers.every(num => typeof num === 'number')) {
    return numbers;
  }
  if (numbers.length === 0) {
    return [];
  }
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return max - min;
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
  let morse = "";

  const caps = message.toUpperCase();
  const words = caps.split(" ");
    for (const word of words) {
    for (const letter of word) {
      if (letter in dictionary) {
        morse += dictionary[letter] + " ";
      }
    } 
  }
    return morse.trim();
}


module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
