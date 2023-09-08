/*

const year = 2023;
const birthyear = prompt('Quel est votre année de naissance ?');
const age = year - birthyear;

if (age <= 13) {
    console.log("Le Roi Lion")
} else if ( age <= 18) {
    console.log("matrix")
} else {
    console.log("La coline a des yeux")
}

//--------------------
*/
/*

const a = prompt("Rentrez un 1er chiffre");
const b = prompt("rentrez un 2eme chiffre");
const result = a * b;

if (result >= 0) {
    console.log("positif")
} else if (result < 0) {
    console.log("negatif")
} else {
    console.log("operation invalide")
}

//--------------------------------
*/
/*

const num = [4, 8, 15, 16, 23, 42];

for (let i in num) {
    console.log(num[i])
}

//----------------------------------
*/
/*

const num = prompt("Rentrez un chiffre entre 1 et 10" );

if (num > 10 || num < 1) {
    console.log("c'est pas bon frer")
} else {
    for (let i = num; i >= 1; i--) {
        console.log(i)
    }
}

//-----------------------------------
*/
/*

const guess = 48;
const num = prompt("Devinez le nombre") * 1;

if (num === guess) {
    console.log("Bravo frer")
} else if (num < guess) {
    console.log("Plus bro")
} else if (num > guess) {
    console.log("Moins bro")
} else {
    console.log("J'ai dit un nombre !!")
}

*/

/*
// Solution avec boucle

const guess = 8
while(true) {
    const chiffre = prompt('Votre chiffre') * 1
    if (chiffre < guess) {
        console.log('Plus')
    } else if (chiffre > guess) {
        console.log('Moins')
    } else {
        break
    }
}
console.log('Bravo ! vous avez deviné')

//---------------------------------------
/*

function isPremier(n) {
    for (i = 2; i < n; i++) {
        if(n % i === 0) {
            return false;
        }
    } 
    return n > 1;
}

console.log(isPremier());

//--------------------------------------------
*/
/*
// Exercice
// Créez une fonction qui vérifier l’égalité de deux paramètres a et b. La valeur et le type de paramètres doivent être testés afin d’avoir une égalité. La fonction doit renvoyer TRUE si les paramètres sont égaux et FALSE s’ils sont différents.

function checkEq(a, b) {
    return a === b;
}

// Afficher la sortie
console.log(checkEq(5, 5));
console.log(checkEq(5, 0));
console.log(checkEq(5, false));
console.log(checkEq(5, "5"));

//--------
*/
/*
// Créez une fonction qui renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.

function isEmpty(str) {
	return str === "";
}

// Afficher la sortie
console.log(isEmpty("1"));
console.log(isEmpty("WayToLearnX"));
console.log(isEmpty("  "));
console.log(isEmpty(""));
console.log(isEmpty(''));

//-------
*/
/*
// Avec deux chaînes, str1 et str2, renvoyez une seule chaîne au format « str1 | str2 ».

function concatStr(str1, str2) {
	return `${str1} | ${str2}`;
}

// Afficher la sortie
console.log(concatStr("True", "False"));
console.log(concatStr("On", "Off"));
console.log(concatStr("A", "B"));

//---------
*/
/*
// Créez une fonction qui prend un nom et renvoie un message d’accueil sous la forme d’une chaîne. N’utilisez pas une fonction normale mais utilisez une fonction fléchée(Arrow)

const msg = name => `Hello ${name}, Welcome to WayToLearnX!`;

// Afficher la sortie
console.log(msg("Thomas"));
console.log(msg("Alex"));
console.log(msg("Emily"));

//--------
*/
/*
// Écrivez une fonction qui renvoie la longueur d’une chaîne. Utiliser une fonction récursive.

function size(str, n = 0) {
    if(str[n] === undefined) {
      return n;
    }
   return size(str, n + 1);
}

// Afficher la sortie
console.log(size("alex"));
console.log(size("x"));
console.log(size(""));

//------
*/
/*
// Créez une fonction qui prend deux chaînes str1 et str2 comme arguments et renvoie TRUE si le nombre total de caractères dans la première chaîne est égal au nombre total de caractères dans la deuxième chaîne sinon renvoie FALSE.

function compareSize(str1, str2) {
	return str1.length === str2.length;
}

// Afficher la sortie
console.log(compareSize("AA", "BB"));
console.log(compareSize("123", "1"));
console.log(compareSize("Ali", "Bob"));

//------
*/
/*
// Créez une fonction qui prend la hauteur et la largeur et trouve le périmètre d’un rectangle.

function getPerimeter(height, width) {
	return (height + width) * 2;
}

// Afficher la sortie
console.log(getPerimeter(2, 6));
console.log(getPerimeter(3, 10));
console.log(getPerimeter(1, 5));

//------
*/
/*
// Créez une fonction qui prend un nombre comme argument et renvoie « pair » pour les nombres pairs et « impair » pour les nombres impairs.

function check(n) {
	if (n % 2 === 0) {
        return "Pairs";
    } else {
        return "Impair"
    }
}

// Afficher la sortie
console.log(check(2));
console.log(check(7));
console.log(check(22));

//------
*/
/*
// Créez une fonction qui prend une chaîne et renvoie TRUE ou FALSE, selon que les caractères sont en ordre ou non.

function checkOrder(str) {
	const test = str.split("").sort().join("");
    return test === str

}

// Afficher la sortie
console.log(checkOrder("abc"));
console.log(checkOrder("zyx"));
console.log(checkOrder("123"));
console.log(checkOrder("aabbcc"));

//------
*/
/*
// Créez une fonction qui ajoute une sous-chaîne à la fin de chaque chaîne du tableau.

function addEnd(tableau, fin) {
// solution 1	return `"${tableau[0] + fin}", "${tableau[1] + fin}", "${tableau[2] + fin}"`
// solution 2    return tableau.map(mot => mot + fin);
}

// Afficher la sortie
console.log(addEnd(["accept", "achet", "adapt"], "able"));
console.log(addEnd(["aim", "act", "ard"], "ant"));

//-------
*/
/*
// Créez une fonction qui vérifie si l’argument est un entier ou une chaîne. Renvoie « int » s’il s’agit d’un entier et « string » s’il s’agit d’une chaîne.

function checkIntOrStr(x) {
	if (typeof x === "number") {
        return "int";
    } else if (typeof x === "string") {
        return "string";
    }
}

// Afficher la sortie
console.log(checkIntOrStr("WayToLearnX"));
console.log(checkIntOrStr(1));
console.log(checkIntOrStr("250"));

//--------
*/
/*
// Créez une fonction qui prend une phrase et renvoie le nombre de mots.

function count(str) {
	return str.split(" ").length;
}

// Afficher la sortie
console.log(count("Welcome to WayToLearnX"));
console.log(count("Hello World"));
console.log(count("I am going to my school"));

//------
*/
/*
// Créez une fonction pour multiplier toutes les valeurs d’un tableau par la longueur du tableau donné.

function mulByLen(tab) {
	return tab.map(i => i * tab.length);
}

// Afficher la sortie
console.log(mulByLen([1, 1, 1]));
console.log(mulByLen([1, 2, 3]));
console.log(mulByLen([0, 0, 0, 0, 2]));

//------
*/
/*
// Créez une fonction pour supprimer toutes les valeurs nulles d’un tableau.

function deleteNull(tab) {
	return tab.filter(i => i !== null)
}

// Afficher la sortie
console.log(deleteNull(["Alex", null, "Emily", "Bob"]));
console.log(deleteNull([0, 1, null, 2, null, 3]));
console.log(deleteNull([null, null, null]));

//------
*/
/*
// Une année bissextile a un jour ajouté à février pour être synchronisée avec l’année saisonnière. Une année bissextile apparaît avec une fréquence régulière, déterminée par la règle ci-dessous:
// Une année doit être divisible par 400 ou divisible par 4 et non pas 100.
// Vous devez implémenter une fonction qui renvoie TRUE si c’est une année bissextile, ou FALSE si ce n’est pas le cas.

function bissextile(year) {
	if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else {
        return false;
    }
}

// Afficher la sortie
console.log(bissextile(2020));
console.log(bissextile(1400));
console.log(bissextile(2000));

//------
*/
/*
// Créez une fonction qui trouve tous les nombres pairs de 1 au nombre donné.

function nbrPaire(n) {
    let paire = [];
  
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        paire.push(i);
      }
    }
    
    return paire;
}

// Afficher la sortie
console.log(nbrPaire(6));
console.log(nbrPaire(4));
console.log(nbrPaire(2));

//-----
*/
/*
// Convert number to reversed array of digits

function digitize(n) {
    const digits = String(n).split("").reverse().map(Number)
    console.log(digits)
}

digitize(35231)

*/
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
// Find the average of an ARRAY

function findAverage(array) {
    let num = 0;
    
    for (const element of array) {
        num += element;
    }
    
    if (num === 0) {
        console.log(0);
    } else {
        console.log(num / array.length);
    }
}


findAverage([1, 2, 3, 4]);

*/
/*
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
    let allclass = 0;
    let mclass = 0;
    
    for (const element of classPoints) {
        allclass += element;
    }

    if (classPoints.length !== 0) {
        mclass = allclass / classPoints.length;
    }

    if (mclass < yourPoints) {
        console.log(true);
    } else {
        console.log(false);
    }


    
    console.log(mclass);
}

betterThanAverage([2, 3], 5)

*/
/*
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

function sum (numbers) {
    let result = 0;

    for (const element of numbers) {
        result += element
    }
    
    console.log(result);
};

sum([1, 5.2, 4, 0, -1])

*/
/*
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
    let result = [];

    for (const element of array) {
        if (element > 0) {
            result.push(-element)
        } else {
            result.push(Math.abs(element))
        }
        
    } 
    console.log(result);
}

invert([1,2,3,4,5])
invert([])
invert([-1, -72, 69, -32])

*/
/*
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
      console.log([]);
    }
  
    let pos = [];
    let neg = 0;

    for (const element of input) {
      
      if (element > 0) {
        pos.push(element);
      } else if (element < 0) {
        neg += element;
      }
    }

      console.log([pos.length, neg]);

}

countPositivesSumNegatives([])
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
countPositivesSumNegatives([0, 0])

*/
/*
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

function check(a, x) {
    console.log(a.includes(x));
}

check([66, 101], 66)

*/
/*
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
    let result = [];
    
    for (const element of x) {
        if (element < 5) {
            result.push(0);
        } else {
            result.push(1);
        }
    }
    console.log(result.join(""));
}

fakeBin('45385593107843568') // '01011110001100111'

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
// Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
    let ar = [];
    
    for (let i = n; i >= 1; i--) {
        ar.push(i);
    }
    console.log(ar);
}

reverseSeq(5)

*/
/*
// Create a function with two arguments that will return an array of the first n multiples of x.

function countBy(x, n) {
    let z = [];
    let num = 0;
    

    for (let i = 0; i < n; i++) {
        num += x;
        z.push(num);
    }

  
    console.log(z);
}

countBy(2,5)

*/
/*
// Given a non-negative integer, 3 for example, return a string with a murmur.


const countSheep = function (num){
    let sheeps = [];
    for (let i = 1; i <= num; i++) {
      sheeps.push(`${i} sheep...`);
    }
    console.log(sheeps.join(""));
}

countSheep(3);

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