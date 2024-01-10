/*
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
	const num = numbers.split(" ").map((x) => Number(x));
	let max = Math.max(...num);
	let min = Math.min(...num);

	console.log(`${max} ${min}`);
	return `${max} ${min}`;
}

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"); // "42 -9";
highAndLow("1 2 3"); // "3 1";

*/
/*
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
	if (names.length === 0) {
		console.log("no one likes this");
		return "no one likes this";
	} else if (names.length === 1) {
		console.log(`${names} likes this`);
		return `${names} likes this`;
	} else if (names.length === 2) {
		console.log(`${names[0]} and ${names[1]} like this`);
		return `${names[0]} and ${names[1]} like this`;
	} else if (names.length === 3) {
		console.log(`${names[0]}, ${names[1]} and ${names[2]} likes this`);
		return `${names[0]}, ${names[1]} and ${names[2]} likes this`;
	} else if (names.length >= 4) {
		console.log(
			`${names[0]}, ${names[1]} and ${names.length - 2} others likes this`
		);
		return `${names[0]}, ${names[1]} and ${names.length - 2} others likes this`;
	}
}

likes([]); // "no one likes this";
likes(["Peter"]); // "Peter likes this";
likes(["Jacob", "Alex"]); // "Jacob and Alex like this";
likes(["Max", "John", "Mark"]); // "Max, John and Mark like this";
likes(["Alex", "Jacob", "Mark", "Max"]); // "Alex, Jacob and 2 others like this";

*/
/*
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n) {
	const arr = String(n).split("");
	console.log(Number(arr.sort((a, b) => b - a).join("")));
	return Number(arr.sort((a, b) => b - a).join(""));
}

descendingOrder(0); // 0
descendingOrder(1); // 1
descendingOrder(111); // 111
descendingOrder(15); // 51
descendingOrder(1021); // 2110

*/
/*
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
	const arr = s.split("");
	let first = [];
	let second = [];

	for (let i = 0; i < arr.length; i++) {
		if (i < arr.length / 2) {
			first.push(arr[i]);
		} else {
			second.push(arr[i]);
		}
	}
	if (arr.length % 2 === 0) {
		console.log(`${first[first.length - 1]}${second[0]}`);
		return `${first[first.length - 1]}${second[0]}`;
	} else {
		console.log(first[first.length - 1]);
		return first[first.length - 1];
	}
}

getMiddle("test"); // "es"
getMiddle("testing"); // "t"
getMiddle("middle"); // "dd"
getMiddle("A"); // "A"

*/
/*
// This time no story, no theory. The examples below show you how to write function accum:

function accum(s) {
	const result = [];
	const lowerStr = s.toLowerCase();

	for (let i = 0; i < lowerStr.length; i++) {
		let str = lowerStr[i].toUpperCase();
		for (let j = 0; j < i; j++) {
			str += lowerStr[i];
		}
		result.push(str);
	}
	console.log(result.join("-"));
	return result.join("-");
}

accum("AbCd"); // "A-Bb-Ccc-Dddd"
accum("ZpglnRxqenU"); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
accum("NyffsGeyylB"); // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"

*/
/*
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

function arrayDiff(a, b) {
	const result = [];

	a.forEach(function included(el) {
		if (!b.includes(el)) {
			result.push(el);
		}
	});

	console.log(result);
	return result;
}

arrayDiff([1, 2], [1]); // [2]
arrayDiff([1, 2, 2], [1]); // [2, 2];
arrayDiff([1, 2, 3], [1, 2]); // [3];
arrayDiff([], [1, 2]); // [];
arrayDiff([1, 2, 2], []); // [1, 2, 2];
arrayDiff([1, 2, 2], [2]); // [1];

*/
/*
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers) {
	let result = [];

	for (let i = 0; i < numbers.length; i++) {
		if (i === 0) {
			result.push(`(${numbers[i]}`);
		} else if (i === 2) {
			result.push(`${numbers[i]}) `);
		} else if (i === 5) {
			result.push(`${numbers[i]}-`);
		} else {
			result.push(`${numbers[i]}`);
		}
	}

	console.log(result.join(""));
	return result.join("");
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); //  "(123) 456-7890"
createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]); // "(111) 111-1111"
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890"

*/
/*
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

var countBits = function (n) {
	let binair = n.toString(2);
	let result = 0;

	for (let i = 0; i < binair.length; i++) {
		if (binair[i] === "1") {
			result++;
		}
	}

	console.log(result);
	return result;
};

countBits(0); // 0
countBits(4); // 1
countBits(7); // 3
countBits(9); // 2
countBits(10); // 2
countBits(1496656163); // 14

*/
/*
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
	let result = [];

	for (let i = 0; i < l.length; i++) {
		if (l[i] === l[i] * 1) {
			result.push(l[i]);
		}
	}
	console.log(result);
	return result;
}

filter_list([1, 2, "a", "b"]); // [1, 2];
filter_list([1, "a", "b", 0, 15]); // [1, 0, 15];
filter_list([1, 2, "aasf", "1", "123", 123]); // [1, 2, 123];

*/
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
