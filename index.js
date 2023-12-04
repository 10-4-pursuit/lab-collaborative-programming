const morseCodeDictionary = require("./morse-code-dictionary.json");

/**
 * Returns an array of all of the words sorted by length, shortest first
 * @param {String[]} words - An array of strings.
 * @returns {string[]} An array of strings.
 */
function sortByStringLength(words) {
  // Use the sort() method with a custom comparison function
  words.sort(function(a, b) {
  // Compare the lengths of the two words
  return a.length - b.length;
});

return words;

}



/**
 * Returns an array of the word in all scrolling positions.
 * @param {String} word - A string.
 * @returns {string[]} An array of strings
 * Example: "Hello"
 * [ 'elloH', 'lloHe', 'loHel', 'oHell', 'Hello' ]
 */
function textScroller(word) {
  const result = [];

  // Loop through each character position
  for (let i = 0; i < word.length; i++) {
  // Create a rotated version of the word
  let rotatedWord = word.slice(i) + word.slice(0, i);
  // Push the rotated word to the result array
  result.push(rotatedWord);
  }

  result.push(word)
  result.shift()


  return result;
}

/**
 * Returns the difference between the largest and smallest number in the array
 * @param {Number[]} numbers - An array of numbers.
 * @returns {Number} The difference between the largest and smallest number.
 */
function betweenExtremes(numbers) { 
  // checks to see if the array only has numbers
  const onlyNumbersCheck = numbers.every((element => typeof element === "number"));

  //filters the array to only contain numbers
  const onlyNumbersFilter = numbers.filter((element) => typeof element === "number") 

  // stores the largest number in the array
  const maxNumber = Math.max(...onlyNumbersFilter)

  // stores the smallest number in the array
  const minNumber = Math.min(...onlyNumbersFilter)

  // stores the difference between the largest and smallest number in this array
  const difference = maxNumber - minNumber

  // return the original array if all elements are not all numbers
  if (!onlyNumbersCheck) {
  return numbers
  }

  // return empty array if input an empty string
  if (numbers === " "){
    return []
  }
  
  // returns the difference
  return difference 
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
  // uppercase every letter in the string to match with the dictionary
  let uppercaseMessage = message.toUpperCase();

  //initialize a variable to store the message translated in morse code
  let morseCode = "";

  // loops through the message, finds matches in the dictionary, and stores it in the variable morseCodeCharacter
  for (const character of uppercaseMessage){
    const morseCodeCharacter = Object.keys(dictionary).find(key => key === character);
  
  // if there is a match adds each character into the morseCode variable
    if (morseCodeCharacter){
      morseCode += dictionary[morseCodeCharacter] + " "

  }
}
// return the final morse code message and trim any extra space at the end of the string
return morseCode.trim();
  
}

module.exports = {
  sortByStringLength,
  textScroller,
  betweenExtremes,
  morseCodeTranslator,
};
