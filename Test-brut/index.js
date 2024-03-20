/*
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
	let array = str.toLowerCase().split("");
	let resultX = 0;
	let resultO = 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i] === "x") {
			resultX++;
		} else if (array[i] === "o") {
			resultO++;
		}
	}

	if (resultX === resultO) {
		// console.log(true, resultX, resultO);
		return true;
	} else {
		// console.log(false, resultX, resultO);
		return false;
	}
}

XO("xo"); // true
XO("xxOo"); // true
XO("xxxm"); // false
XO("Oo"); // false
XO("ooom"); // false

*/
/*
// In this kata you will create a function that takes in a list and returns a list with the reverse order.
function reverseList(list) {
	console.log(list.reverse())
	return list.reverse()
}

reverseList([1, 2, 3, 4]); // [4, 3, 2, 1];
reverseList([3, 1, 5, 4]); // [4, 5, 1, 3];
*/
