// Write function which takes array of strings and returns array of numbers.
// E.g. getNumbers([‘2’, ‘3’, ‘4’, ‘das’]); // -> [2, 3, 4]

function getNumbers(strings) {
  return strings.reduce(function(numbers, str) {
    var val = parseInt(str);

    if(isNaN(val)) {
      return numbers;
    }
    else {
      numbers.push(val);
      return numbers;
    }
  }, []);
}
