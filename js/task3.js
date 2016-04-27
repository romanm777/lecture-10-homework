// Write function which takes array of elements and returns quantity of it’s unique elements
// E.g. getQuanOfUniqueElements( [2, ‘3’, 3, 2] ); // -> 3

function getQuanOfUniqueElements(elems) {
  return elems.reduce(function(uniqueCount, current, index, arr) {
    // check if there is no identical item up to the end and up to the start
    if(-1 === arr.indexOf(current, index + 1) && arr.indexOf(current) === index)
      return ++uniqueCount
    else
      return uniqueCount;
  }, 0);
}
