const imgAvatar = document.querySelector("section img");

imgAvatar.addEventListener("click", () => {
  imgAvatar.src = "image/avatar.svg";
});

const buttonChangeNameAndColor = document.querySelector(
  "article section.description button"
);

buttonChangeNameAndColor.addEventListener("click", () => {
  const name = document.getElementById("firstname");

  let colorPrompt = prompt("Hey ! envoie une couleur en hexadecimal !");
  let bgPinkElements = document.querySelectorAll(".pink-bg");

  for (const bgPinkElement of bgPinkElements) {
    bgPinkElement.style.backgroundColor = colorPrompt;
  }

  let textPinkElements = document.querySelectorAll(".pink-text");
  for (const textPinkElement of textPinkElements) {
    textPinkElement.style.color = colorPrompt;
  }

  let firstname = prompt("Hey ! envoie ton prénom !");

  name.style.color = "white";
  name.innerText = firstname;
});
