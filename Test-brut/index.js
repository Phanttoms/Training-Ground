/*
// Given an integral number, determine if it's a square number:

var isSquare = function (n) {
	let result = Math.sqrt(n);
	if (result === Math.floor(result)) {
		console.log("gg");
    return true;
	} else {
		console.log("noob");
    return false;
	}
};

isSquare(-1); // false;
isSquare(0); // true;
isSquare(3); // false;
isSquare(4); // true;
isSquare(25); // true;
isSquare(26); // false;

*/
/*

let online = false;

let message = "";

if (online) {
	console.log((message = "Utilisateur en ligne !"));
} else {
	console.log((message = "Utilisateur hors ligne !"));
}

*/
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
