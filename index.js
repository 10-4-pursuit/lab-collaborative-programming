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
  const newWordArray = [];
  const randomWords = word.length;
  for (let i = 0; i < randomWords; i++) {
    const random = word.slice(i) + word.slice(0, i);
    newWordArray.push(random);
  }
  newerWord = newWordArray.shift();
  newWordArray.push(newerWord)
  return newWordArray
}
  
  

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) {
  const largeSmall = numbers.sort((a,b) => a - b)

  for(let number of numbers){
    if(typeof number !== 'number'){
      return numbers
    }
  }
  
  const least = largeSmall.shift()
  const greatest = largeSmall.pop()
  return greatest - least
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
const string = message.split("")
const morseCode = []

for(let letter of string){
  const translation = dictionary[letter.toUpperCase()]
  if(translation){
    morseCode.push(translation)
  } 
  
}
return morseCode.join(" ")
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
