// BONUS practice:
// A finance company is carrying out a study on the worst stock investments and would like to acquire a program to do so.
// The program must be able to analyze a chronological series of stock values in order to show the largest loss that it is
// possible to make by buying a share at a given time t0 and by selling it at a later date t1. The loss will be expressed
// as the difference in value between t0 and t1. If there is no loss, the loss will be worth 0.
// getBiggestPossibleLoss( [3, 2, 4, 2, 1, 5] ); // -> -3  | getBiggestPossibleLoss( [1, 2, 4, 4, 5] ); // -> 0

function getBiggestPossibleLoss(stockValues) {
  var prevValue,
      loses = [],
      tempLose = 0;

  for(var i = 0; i < stockValues.length; ++i) {
    // first iteration condition
    if(prevValue === undefined) {
      prevValue = stockValues[i];
      continue;
    }

    // difference between previous and current values
    var difference = stockValues[i] - prevValue;

    // if there are loses
    if(difference < 0) {
      tempLose += difference;  // increse counter
    }
    // if there is increasing of value
    else if(difference > 0 && tempLose < 0){
      loses.push(tempLose);   // save lose value
      tempLose = 0;           // reset counter
    }

    // current becomes previous
    prevValue = stockValues[i];
  }

  // max lose search
  return loses.reduce(function(maxLose, current) {
    return (current < maxLose) ? current : maxLose;
  }, 0);
}
