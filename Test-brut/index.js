/*
// Make a simple function called greet that returns the most-famous "hello world!".
// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?


function greet() {
    const hache = "h";
    const eel = "e";
    const hell = "l";
    const haut = "o";
    const wow = "w";
    const rrr = "r";
    const deer = "d";
    const espace = " ";
    const oh = "!"
    const yolo = [];
 
    for (let i = 0; i <= 69; i++) {
      if (i <= 0) {
        yolo.push(hache);
      } else if (i <= 1) {
        yolo.push(eel);
      } else if (i <= 3) {
        yolo.push(hell);
      } else if (i <= 4) {
        yolo.push(haut);
      } else if (i <= 5) {
        yolo.push(espace);
      } else if (i <= 6) {
        yolo.push(wow);
      } else if (i <= 7) {
        yolo.push(haut);
      } else if (i <= 8) {
        yolo.push(rrr);
      } else if (i <= 9) {
        yolo.push(hell);
      } else if (i <= 10) {
        yolo.push(deer);
      } else if (i <= 11) {
        yolo.push(oh);
      }
    } console.log(yolo.join(""))
  }

  greet()

*/
/*
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
    const b = weight / (height * height);

    if (b <= 18.5) {
        console.log("Underweight");
    } else if (b <= 25) {
        console.log("Normal");
    } else if (b <= 30) {
        console.log("Overweight");
    } else {
        console.log("Obese");
    }
}

bmi(80, 1.80)

*/
/*
// Given a non-empty array of integers, return the result of multiplying the values together in order.

function grow(x){
    const sum = x.reduce((a, c) => a * c);

    console.log(sum)

}

grow([1, 2, 3])

*/
/*
// Let's play! You have to return which player won! In case of a draw return Draw!.

function rps(p1, p2) {
    const s = "scissors";
    const r = "rock";
    const p = "paper";

    switch (p1 + p2) {
        case p + p :
        case r + r : 
        case s + s : console.log("Draw!");
        break;
        case s + p :
        case p + r :
        case r + s : console.log("Player 1 won!");
        break;
        case p + s :
        case r + p :
        case s + r : console.log("Player 2 won!");
        break;
    }

}

rps('paper', 'paper')

*/
/*
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

function points(games) {
    let result = 0

    for (const e in games) {
        if (games[e][0] > games[e][2]) {
            result += 3;
        } else if (games[e][0] === games[e][2]) {
            result += 1;
        }
    }
    
    console.log(result);
}

points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])
//points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"])

*/
/*
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
    if (array === null || array === undefined || array.length <= 1) {
        console.log(0);
        return
    }
    
    let all = 0;
    let mmi = Math.min(...array);
    let mma = Math.max(...array); 

    for (let i = 0; i < array.length; i++) {
        all += array[i];
    }
    
    console.log(all - (mmi + mma));
}

//sumArray(null)
//sumArray([ ])
//sumArray([ 3 ])
//sumArray([ 3, 5 ])
//sumArray([ 6, 2, 1, 8, 10 ])

*/
/*
// Your task is to find the first element of an array that is not consecutive.

function firstNonConsecutive (arr) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[0] + i) {
            result.push(arr[i]);
        } else if (arr[0] + i === arr[arr.length -1]){
            console.log(null);
            return null;
        }
    } 

    console.log(result[0]);
    return result[0];
}

firstNonConsecutive([2,3,4,5,7,8])

*/
/*
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(d, s) {

  console.log(Math.abs(d - 2 * s))
  return Math.abs(d - 2 * s);
    
}

twiceAsOld(36, 7) // 22 
twiceAsOld(55,30) // 5
twiceAsOld(42,21) // 0 
twiceAsOld(22,1) // 20 
twiceAsOld(29,0) // 29

*/
/*
//Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
//When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
//Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string) {
	const s = string.split("")
  let result = [];
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "5") {
      result.push("S");
    } else if (s[i] === "0") {
      result.push("O");
    } else if (s[i] === "1") {
      result.push("I");
    } else {
      result.push(s[i]);
    }
  }
  
  console.log(result.join(""));
  return result.join("");
}

correct("L0ND0N")
correct("DUBL1N")
correct("51NGAP0RE")

*/
/*
// Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount(n){
  if (n % 2 === 0) {
    console.log(n / 2);
    return n / 2;
  } else {
    console.log((n - 1) / 2);
    return (n - 1) / 2;
  }
  
}

oddCount(15) // 7

*/
/*
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

String.prototype.toAlternatingCase = function () {
  const ar = this.split("");
  let result = [];

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === ar[i].toUpperCase()) {
      result.push(ar[i].toLowerCase());
    } else if (ar[i] === ar[i].toLowerCase()) {
      result.push(ar[i].toUpperCase());
    } else {
      result.push(ar[i]);
    }
  }
  console.log(result.join(""));
  return result.join("");
}

"hello WORLD".toAlternatingCase()

*/
/*
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n){
  let result = [];

  for (let i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }

  console.log(result);
  return result;
}

powersOfTwo(4) // [1, 2, 4, 8, 16]

*/
/*
// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10) {
    console.log(100);
    return 100;
  } else if (exam > 75 && projects >= 5) {
    console.log(90);
    return 90;
  } else if (exam > 50 && projects >= 2) {
    console.log(75);
    return 75;
  } else {
    console.log(0);
    return 0;
  }
}

finalGrade(60, 5) // 100

*/
/*
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
// Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.

function howMuchILoveYou(nbPetals) { 
  let ar = [];

  for (let i = 0; i < nbPetals; i++) {
    if (ar[ar.length -1] === "I love you") {
      ar.push("a little");
    } else if (ar[ar.length -1] === "a little") {
      ar.push("a lot");
    } else if (ar[ar.length -1] === "a lot") {
      ar.push("passionately");
    } else if (ar[ar.length -1] === "passionately") {
      ar.push("madly");
    } else if (ar[ar.length -1] === "madly") {
      ar.push("not at all");
    } else {
      ar.push("I love you");
    }
  }
  
  console.log(ar[ar.length -1])
}

howMuchILoveYou(13)

*/
/*
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

function findDifference(a, b) {
  console.log(Math.abs((a.reduce((c, d) => c * d)) - (b.reduce((e, f) => e * f))));
}

findDifference([3, 2, 5], [1, 4, 4]) // 14

*/
/*

function yolo(x) {
  console.log([...x].sort((a, b) => a - b));
}

yolo([2, 1, 12, 4, 6, 3, 22, 18])

*/
/*
// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

function mango(q, p){
  let free = q / 3;
  console.log((q - Math.floor(free)) * p)
  
}

mango(3, 3) // 6
mango(9, 5) // 30
mango(2, 3) // 6
mango(5, 3) // 12
mango(38, 32) // 832

// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

*/
/*
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
      result++;
    }
  }

  console.log(result);
  return result;
}

getCount("abracadabra") // 5

*/
/*
// Your task is to write a function that takes a string and return a new string with all vowels removed.

function disemvowel(str) {
  const regex = /[aeiou]/ig;

  console.log(str.replace(regex, ""))
}

disemvowel("This website is for losers LOL!")

*/
/*
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
  let result = 0;

  for (let i = 0; i < number; i++) {
    if (i < number && i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }

  console.log(result);
  return result;
}

solution(10)

*/
/*
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
  const result = [];
  
  for (let i = a; i <= b; i++) {
    if (i <= b) {
      result.push(i);
    };
  }
  console.log(result);
  return result;
}

between(1, 4) // [1, 2, 3, 4]
between(-2, 2) // [-2, -1, 0, 1, 2]

*/
/*
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

function twoSort(s) {
  const ar = [...s].sort()
  const result = ar[0].split("").join("***")


  console.log(result);
}

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]) // 'b***i***t***c***o***i***n' 

*/