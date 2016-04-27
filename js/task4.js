// Write function which takes string and returns quantity of it’s unique characters
// E.g. getQuanOfUniqueCharacters( ‘muahaha’ ); // -> 4

function getQuanOfUniqueCharacters(str) {
  var uniqueCount = 0;
  for(var i = 0; i < str.length; ++i) {
    // The character at the specified position
    var char = str.charAt(i);

    // Check if there is no identical character
    // up to the end and up to the start of the string
    if(-1 === str.indexOf(char, i + 1) && str.indexOf(char) === i) {
      ++uniqueCount;
    }
  }

  return uniqueCount;
}
