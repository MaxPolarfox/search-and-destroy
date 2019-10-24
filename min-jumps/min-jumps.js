'use strict';

// Complete this algo
const minJumps = arr => {
  let steps = arr.length;
  let jumps = 0;
  let currValInd = 0;

  while (steps > 0) {
    let range = arr.slice(currValInd + 1, currValInd + arr[currValInd] + 1);
    let largest = 0;

    for (let i = 0; i < range.length; i++) {
      if (largest < range[i]) {
        largest = range[i]
      }
    }

    if (largest >= steps) jumps += 1;
    else {
      currValInd += largest;
      jumps += 1;
      steps -= largest;
    }
  }

  return jumps
};

module.exports = minJumps
