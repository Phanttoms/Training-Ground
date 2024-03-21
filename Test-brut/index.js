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
/*
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
	const array = text.toUpperCase().split("").sort();
	let result = [];
	let final = 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i] === array[i + 1]) {
			result.push(array[i]);
		}
	}

	for (let j = 0; j < result.length; j++) {
		if (result[j] !== result[j + 1]) {
			final++;
		}
	}

	console.log(final);
	return final;
}

duplicateCount(""); // 0
duplicateCount("abcde"); // 0
duplicateCount("aabbcde"); // 2
duplicateCount("aabBcde"); // 2 "should ignore case"
duplicateCount("Indivisibility"); // 1
duplicateCount("Indivisibilities"); // 2 "characters may not be adjacent"
*/
