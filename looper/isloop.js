'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let log = [];
  let loop = false;
  let currentNode = linkedlist.head;


  while (currentNode !== null) {

    log.forEach(node => {
      if (node.next === currentNode.next) loop = true
    })

    if (loop) return true

    log.push(currentNode);

    currentNode = currentNode.next
  }
  return false
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
