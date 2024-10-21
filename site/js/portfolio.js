const avatar = document.getElementById("avatar");

avatar.addEventListener("click", function () {
	avatar.src = "image/avatar-bis.png";
	imgDog.alt = "avatar2";
});

const button = document.querySelector("button");
const firstName = document.getElementById("firstname");
const backgroundElements = document.getElementById("presentation");
const pink = document.querySelector(".pink-text");
const pinkFooter = document.querySelector(".pink-bg");

button.addEventListener("click", function () {
	let name = prompt("What's your name?");
	let color = prompt("Choose a color");

	firstName.style.color = "white";
	firstName.innerHTML = name;
	backgroundElements.style.backgroundColor = color;
	pink.style.backgroundColor = color;
	pinkFooter.style.backgroundColor = color;
});
