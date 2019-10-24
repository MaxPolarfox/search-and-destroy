'use strict';

// Complete this algo
// const binarySearch = (array, target) => {

// 	const midPoint = Math.ceil(array.length / 2);
// 	const midElement = array[midPoint];

// 	if (midElement === target) return true

// 	if (array.length === 1) {

// 		if (array[0] === target) return true
// 		else return false

// 	} else if (midElement < target) {

// 		const right = array.slice(midPoint + 1);
// 		console.log('right', right)

// 		if (right.length) {
// 			return binarySearch(right, target);
// 		} else {
// 			return false
// 		}

// 	} else {
// 		const left = array.slice(0, midPoint)

// 		if (left.length) {
// 			return binarySearch(left, target);
// 		} else {
// 			return false
// 		}
// 	}
// };



/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/


const binarySearch = (array, target) => {

	let start = 0;
	let end = array.length - 1

	while (end - start) {

		console.log(end - start)
		console.log('start', start)

		const midPoint = Math.ceil((start + end) / 2);

		const midElement = array[midPoint];


		if (array[end] === target || array[start] === target || midElement === target) {
			return true
		}

		if (array[start] < target && target < midElement) {
			console.log('inside first console')
			end = midPoint;
		} else if (midElement < target && target < array[end]) {
			start = midPoint
			console.log('inside second console')
		} else {
			return false
		}

	}
	return false
}


module.exports = binarySearch
