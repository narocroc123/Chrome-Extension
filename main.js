let openSettings = () => document.getElementById("settings").classList.toggle("settings-open");

document.getElementById("settings-button").addEventListener("click", openSettings);

let userName = localStorage.getItem('receivedName');

function saveName() {
	localStorage.saveItem('receivedName', userName);
};

if(userName === null) {
	userName = "friend";
};

function changeName() {
	getGreeting();
	userName = document.getElementById("name-input").value;
	saveName();
};

document.getElementById("name-form").addEventListener('submit', function(e) {
	e.preventDefault()
	changeName();
});

function getGreeting() {
	document.getElementById("greeting").innerHTML = `Hello, ${userName}. Enjoy your day!`;
};

getGreeting();