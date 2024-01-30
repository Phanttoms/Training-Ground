/*
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers) {
	let odd = [];
	let even = [];
	let result = 0;

	for (let i = 0; i < integers.length; i++) {
		if (integers[i] % 2 === 0) {
			even.push(integers[i]);
		} else {
			odd.push(integers[i]);
		}
	}

	if (odd.length === 1) {
		result = odd[0];
		console.log(result);
		return result;
	} else if (even.length === 1) {
		result = even[0];
		console.log(result);
		return result;
	}
}

findOutlier([0, 1, 2]); // 1
findOutlier([2, 6, 8, 10, 3]); // 3
findOutlier([1, 2, 3]); // 2

*/
/*
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
	let array = str.toUpperCase().split("").sort();
	let result = 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i] === array[i + 1]) {
			result++;
		}
	}

	if (result === 0) {
		// console.log(true, result);
		return true;
	} else {
		// console.log(false, result);
		return false;
	}
}

isIsogram("aabbccdd");
isIsogram("Dermatoglyphics"); // true
isIsogram("isogram"); // true
isIsogram("aba"); // false
isIsogram("moOse"); // false
isIsogram("isIsogram"); // false
isIsogram(""); // true

*/
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
