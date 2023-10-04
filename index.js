const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]} words - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(words) {
  // RETURN sorted word length vals by shortest to longest
  return words.sort((a, b) => a.length - b.length);
}

/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  // CONST result is empty arr
  const result = [];
  // FOR iterating through word length
  for (let i = 0; i < word.length; i++) {
    // CONST scroll is vals word sliced + word sliced after 0 index 
    const scroll = word.slice(i + 1) + word.slice(0, i + 1);
    // PUSH scroll into arr
    result.push(scroll)
  }
  return result
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  // IF max number minus min number is a number
  if (Math.max(...numbers) - Math.min(...numbers)) {
    // RETURN result max minus min
    return Math.max(...numbers) - Math.min(...numbers);
    // ELSE RETURN arr 
  } else {
    return numbers; 
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
  // LET morseCode be empty str
  let morseCode = ``;
  // LET words be capitalized letters
  let words = message.toUpperCase();
  // Access word values
  for (let word of words) {
    // Access key values in dictionary
    for (let letters in dictionary) {
      // IF message vals match keys vals
      if (word.includes(letters)) {
        // adds translated vals into str + spaces
        morseCode += dictionary[letters] + ` `;
      }
    }
  }
  // RETURN morse code trimmed of excess spaces
  return morseCode.trim();
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
