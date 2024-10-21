const image = document.getElementById("imagechanger");

let currentImage = 1;

image.addEventListener("click", () => {
	currentImage = currentImage === 1 ? 2 : 1;
	image.src = currentImage === 1 ? "image/avatar-bis.png" : "image/avatar.svg";
});

const changeName = document.getElementById("firstname");

function onButtonClick() {
	prompt("Enter your name");
}
