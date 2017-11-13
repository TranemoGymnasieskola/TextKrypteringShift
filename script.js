/* global document */

const encryptForm = document.getElementById('kryp');
const decryptForm = document.getElementById('deKryp');



encryptForm.addEventListener('submit', (e) => {
	e.preventDefault(); // Förhindra att sidan laddas om
	let plainText  = document.getElementById('plain').value;

	document.getElementById('result').value = 'koden för ' + plainText + ' är: ' + transform(plainText); 
	return false;
}, false);

decryptForm.addEventListener('submit', (e) => {
	e.preventDefault(); // Förhindra att sidan laddas om
	let plainText  = document.getElementById('plain2').value;

	document.getElementById('result').value = 'lösningen för ' + plainText + ' är: ' + unTransform(plainText); 
	return false;
}, false);



function transform(text) {
	let caesar = text.replace(/[a-z]/gi, function(c) {
		switch (c) {
		case 'z':
			return 'a';
		case 'Z':
			return 'A';
		default:
			return String.fromCharCode(1 + c.charCodeAt(0));
		}
	});
	return caesar.replace(/[aeiou]+/g, function(vowel) {
		return vowel.toLowerCase();
	});
}

function unTransform(text) {
	let caesar = text.replace(/[a-z]/gi, function(c) {
		switch (c) {
		case 'a':
			return 'z';
		case 'A':
			return 'Z';
		default:
			return String.fromCharCode(-1 + c.charCodeAt(0));
		}
	});
	return caesar.replace(/[aeiou]+/g, function(vowel) {
		return vowel.toLowerCase();
	});
}

// answer.innerHTML = "koden för " + toCheck + " är: " + transform(plainText); 