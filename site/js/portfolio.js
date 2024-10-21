const avatar = document.querySelector("#avatar");

avatar.addEventListener("click", () => {
  avatar.src = "image/avatar.svg";
});

const button1 = document.querySelector("#button1");

button1.addEventListener("click", () => {
  const myFirstName = prompt("Veuillez entrer votre prénom");
  const prénom = document.querySelector("#firstname");

  if (myFirstName) {
    prénom.textContent = myFirstName; // Change le texte du paragraphe
    prénom.style.color = "white"; // Change la couleur du texte en blanc
  } else {
    alert("Aucun prénom saisi");
  }
});
