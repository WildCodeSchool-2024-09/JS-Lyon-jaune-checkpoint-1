const imgAvatar = document.querySelector("section img");

imgAvatar.addEventListener("click", () => {
  imgAvatar.src = "image/avatar.svg";
});

const buttonChangeNameAndColor = document.querySelector(
  "article section.description button"
);

buttonChangeNameAndColor.addEventListener("click", () => {
  const name = document.getElementById("firstname");

  let color = prompt("Hey ! envoie une couleur en hexadecimal !");
  let description = document.querySelector("article section.description");
  description.style.backgroundColor = color;

  let firstname = prompt("Hey ! envoie ton prénom !");

  name.style.color = "white";
  name.innerText = firstname;
});
