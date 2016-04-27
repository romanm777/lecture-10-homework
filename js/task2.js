// Write function which takes array of strings and returns SUM of all numeric values.
// E.g. getNumericSum( [‘a’, ‘2’, ‘3’] ); // -> 5

function getNumericSum(strings) {
  return strings.reduce(function(total, value) {
    var num = parseInt(value);

    if(isNaN(num)) {
      return total;
    }
    else {
      return total + num;
    }
  }, 0);
}
