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
