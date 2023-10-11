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
