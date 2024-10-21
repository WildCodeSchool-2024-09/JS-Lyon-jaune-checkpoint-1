function changeAvatar() {
	const avatarImg = document.getElementById("avatar");
	avatarImg.addEventListener("click", () => {
		avatarImg.src = "image/avatar.svg";
		avatarImg.alt = "newAvatar";
	});
}
changeAvatar();

const firstName = getElementById("firstname");
firstName.addEventListener("click", () => {
	const newFirstName = prompt("Enter your name");
});
