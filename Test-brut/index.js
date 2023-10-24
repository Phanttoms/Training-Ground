/*
// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

function stringy(size) {
  let ar = [];
  for (let i = 0; i < size; i++) {
    if (ar[ar.length -1] === 1) {
      ar.push(0);
    } else {
      ar.push(1);
    }
  }
  console.log(ar.join(""));
  // return ar.join("");
}

//stringy(3)
//stringy(12)
//stringy(5)
stringy(49)

*/

/*
String.prototype.isUpperCase = function() {
  console.log(this.map((x) => x === x.toUpperCase()));
}

*/
/*
// Create a method to see whether the string is ALL CAPS

function isUpperCase(x) {
  if (x.toUpperCase() === x) {
    console.log("upper");
    return
  } else {
    console.log("lower");
    return
  }
}

isUpperCase('HELLO I AM DONALD')
isUpperCase('c')
isUpperCase('BOB WALKS HIS DOG EVERY DAY.')
isUpperCase('HeLLO I AM DONaLD')

*/
/*
// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

function findMultiples(integer, limit) {
  let result = [];
  let num = 0;
  for (let i = 0; i < limit; i++) {
    num += integer;
    if (num <= limit) { 
      result.push(num);
    }
  }
  console.log(result)
  return result;
}

findMultiples(5, 25) // [5, 10, 15, 20, 25]
findMultiples(4, 27) // [4, 8, 12, 16, 20, 24]

*/
/*
// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

function fixTheMeerkat(arr) {
  console.log(arr.reverse());
  return arr.reverse();
}

fixTheMeerkat(["tail", "body", "head"])
fixTheMeerkat(["tails", "body", "heads"])
fixTheMeerkat(["lower legs", "torso", "upper legs"])

*/
/*
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  let result = [];
  let zero = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      result.push(arr[i]);
    } else {
      zero.push(arr[i]);
    }
  }
  console.log(result.concat(zero));
  return result.concat(zero);
}

moveZeros([1,2,0,1,0,1,0,3,0,1]) // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]

*/
/*
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
  str = str.trim().split(/\s{1,}/);
  result = str.map(val => {
    if (/^[A-Za-z]+$/.test(val)) {
      return `${val.slice(1)}${val.slice(0, 1)}ay`;
    }
      return val;
    }).join(' ');
  
  console.log(result)
}

pigIt('Pig latin is cool') // 'igPay atinlay siay oolcay'
//pigIt('This is my string') // 'hisTay siay ymay tringsay'
//pigIt('Pig latin is cool') // 'igPay atinlay siay oolcay'
//pigIt('Hello world !');     // 'elloHay orldway !'

*/
/*
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

function humanReadable (seconds) {
  let heures = 0;
  let minutes = 0;
  let secondes = 0;
  for (let i = 0; i < seconds; i++) {
    secondes++;
    if (secondes === 60) {
      secondes -= 60;
      minutes++;
    } else if (minutes === 60) {
      minutes -= 60;
      heures++;
    } 
  }
  if (heures < 10) {
    heures = "0" + heures;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (secondes < 10) {
    secondes = "0" + secondes;
  }
  console.log(`${heures}:${minutes}:${secondes}`);
  return `${heures}:${minutes}:${secondes}`;
}

humanReadable(0) // '00:00:00'
humanReadable(59) // '00:00:59'
humanReadable(60) // '00:01:00'
humanReadable(3599) // '00:59:59'
humanReadable(86399) // '23:59:59'

*/
/*
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(string){
  const ar = string.split(" ");
  const result = [];
  for (const element of ar) {
    if (element.length >= 5) {
      result.push(element.split("").reverse().join(""));
    } else {
      result.push(element);
    }
  }
  console.log(result.join(" "))
  return result.join(" ");
}

spinWords("Welcome") // "emocleW"
spinWords("Hey fellow warriors") // "Hey wollef sroirraw"
spinWords("This is a test") // "This is a test"
spinWords("Just kidding there is still one more") // "Just gniddik ereht is llits one more"

*/
/*
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  let count = 0;
  let arr = A.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      console.log(arr[i]);
      return arr[i];
    }
  }
}

findOdd([7]) // 7
findOdd([0]) // 0
findOdd([1,1,2]) // 2
findOdd([0,1,0,1,0]) // 0
findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]) // 4

*/
/*
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

function squareDigits(num) {
	const str = String(num);
	const arr = str
		.split("")
		.map((x) => x * x)
		.join("");

	console.log(arr);
	return arr;
}

squareDigits(3212); // 9414
squareDigits(2112); // 4114
squareDigits(0); // 0

*/
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
