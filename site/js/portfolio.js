let avatarImg = document.querySelector("#avatar1");

avatarImg.addEventListener("click", function () {
	avatarImg.src = "./image/avatar-bis.png";
});

const button = document.querySelector(".buttonModify");
button.addEventListener("click", () => {
	const buttonModify = prompt("Enter your name");
	document.getElementById("firstname").innerText = buttonModify;
	document.getElementById("firstname").style.color = "white";
});
