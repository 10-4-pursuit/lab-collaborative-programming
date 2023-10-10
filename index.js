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
  newArray = []
  let wordArray = word.split("")
  for(let i = 0; i < wordArray.length; i++ ){
       wordArray.push(wordArray.shift())
           
           newArray.push(wordArray.join(""))        

  }
  return newArray

}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers)
{
  numbers.sort((a,b) => a - b)
  if(numbers.every(number => typeof number === "number"))
  {
    const difference = numbers[numbers.length - 1] - numbers[0]
    return difference
    }  
  else {
    return numbers
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
  console.log(message)
  let translatedMessage = ""
  for(let i = 0; i < message.length; i++){
    letter = message[i].toUpperCase()
    if(dictionary[letter]){
      translatedMessage += dictionary[letter] + " "
      console.log(translatedMessage) 
    }
  }
  return  translatedMessage.trim()
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
