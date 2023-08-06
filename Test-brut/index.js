/*
const a = 3;
const b = 6;
const isMajeur = undefined;
const notes = [6, 12, 14, 50, "yolo", [1, 2, 3]];

//----------------
*/
/*

let a = "salut";
let b = a;

console.log("yolo les noobs")

if (true) {
    console.log("wesh")
}

//--------------------
*/
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
*/
/*

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

const solution = getRandomInt(10);
console.log(solution);

function isRight(n) {
    return solution === n;
}

function guess() {
    const number = prompt("Entrez un chiffre") * 1;
    return isRight(number);
}

for (i = 0; i < 3; i++) {
    if (guess()) {
        console.log("GG");
        break;
    } else if (i === 2) {
        console.log("noob");
    }
}

//-------------------------------------------
*/
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

// ------
*/