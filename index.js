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
  let newArr = [];

  for (let i = 1; i <= word.length; i++) {
    const rotation = word.slice(i)+word.slice(0,i);
    newArr.push(rotation);
  }

  return newArr;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  let newArr = [];

  let maxNum = numbers[0];

  let minNum = numbers[0];
  
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
      return numbers;
    }
    if (numbers[i] > maxNum) {
      maxNum = numbers[i]
    } 
    if (numbers[i] < minNum) {
      minNum = numbers[i]
    }
  }
  return maxNum - minNum;
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
    let myMessage = message.toUpperCase();

    let morseCode = "";

    for (let i = 0; i < myMessage.length; i++) {
      let character = myMessage[i];
      if (dictionary[character]) {
        morseCode += dictionary[character] + " ";
      }
    }
    return morseCode.trim();
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
