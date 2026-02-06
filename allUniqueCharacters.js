/*

    Suppose you have a string `s`.

    You are to write a function, allUniqueCharacters, that accepts a string and 
    returns `true` if the string has all unique characters, and `false` otherwise.

    * Output:   should be a boolean value `true` if the string has all unique characters,
                and `false` otherwise.
    * Input:    a single string `s`.
    * 
    * 


    Test Cases:

    console.log(allUniqueCharacters("abcdef")); // Expected output: true
    console.log(allUniqueCharacters("hello")); // Expected output: false
    console.log(allUniqueCharacters("1234567890")); // Expected output: true
    console.log(allUniqueCharacters("112233")); // Expected output: false
    console.log(allUniqueCharacters("")); // Expected output: true
    console.log(allUniqueCharacters("AaBbCc")); // Expected output: true
    
*/

function allUniqueCharacters(s) {
  let obj = {}
  for (let char of s) {
    if (obj[char]) {
      // console.log("Whoops, char already exists: ", char)
      return false
    } else {
      // console.log("First appearence of", char) 
      obj[char] = 1
    }
  }
  return true
}

// Example usage:
console.log(allUniqueCharacters("abcdef")); // Expected output: true
console.log(allUniqueCharacters("hello")); // Expected output: false
console.log(allUniqueCharacters("1234567890")); // Expected output: true
console.log(allUniqueCharacters("112233")); // Expected output: false
console.log(allUniqueCharacters("")); // Expected output: true
console.log(allUniqueCharacters("AaBbCc")); // Expected output: true
