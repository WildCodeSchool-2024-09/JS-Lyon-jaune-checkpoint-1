const imageAChanger = document.querySelector("#mon-image");

imageAChanger.addEventListener("click", function () {
	imageAChanger.src = "image/avatar-bis.png";
	imageAChanger.alt = "Mon nouveau avatar";
});

const textAChanger = document.querySelector("button");

textAChanger.addEventListener("click", function () {
	const question = prompt("Enter your name");
	const reponse = document.getElementById(firstname);
	console.log(`Hi, I’m ${firstame}`);
});
