// All html elements 
const upperElement = document.getElementById('upper');
const lowerElement = document.getElementById('lower');
const numberElement = document.getElementById('number');
const specialElement = document.getElementById('special');
const lengthElement = document.getElementById('length');
const lengthTextElement = document.getElementById('length-val');
const passwordField = document.getElementById('passwordField');
const generateElement = document.getElementById('generate');
const copyElement = document.getElementById('copy');
const darkBtn = document.getElementById('darkMode');

// All characters to make password
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specials = ['@', '#', '$', '%', '&', '*', '(', ')', '-', '+', '{', '}', ':', '[', ']', '<', '>', '?', '/',];

// functions
function toggleDarkMode() {
	if (darkBtn.innerText == 'dark mode') {
		darkBtn.innerText = 'light mode';
	}
	else {
		darkBtn.innerText = 'dark mode';
	}
	document.body.classList.toggle('dark');
}

function showLengthValue() {
	lengthTextElement.innerText = lengthElement.value;
}

function generatePassword() {
	var password = "";
	var availableCharacters = [];

	if (lowerElement.checked) {
		availableCharacters = availableCharacters.concat(lowers);
	}

	if (upperElement.checked) {
		availableCharacters = availableCharacters.concat(uppers);
	}

	if (numberElement.checked) {
		availableCharacters = availableCharacters.concat(numbers);
	}

	if (specialElement.checked) {
		availableCharacters = availableCharacters.concat(specials);
	}

	if (availableCharacters.length == 0) {
		passwordField.value = "Please choose atleast one option";
		return;
	}  

	var randomIndex = 0;
	const length = lengthElement.value;
	for (let i = 0; i < length; i++) {
		randomIndex = Math.floor(Math.random()*availableCharacters.length);
		password += availableCharacters[randomIndex];
	}

	passwordField.value = password;
}

function copy(){
	passwordField.select();
	navigator.clipboard.writeText(passwordField.value);
}



// calling the functions on specific buttons click
darkBtn.addEventListener('click', toggleDarkMode);
lengthElement.addEventListener('input', showLengthValue);
generateElement.addEventListener('click', generatePassword);
copyElement.addEventListener('click', copy);