document.getElementById("avatar").addEventListener("click", function () {
  avatar.src = "image/avatar.svg";
});

document
  .getElementById("promptcolorbutton")
  .addEventListener("click", function () {
    document.getElementById("firstname").innerText = prompt("Enter your name");
    document.getElementById("firstname").style.color = "white";
    let colore = prompt("Enter a color");
    let thePinkText = document.querySelectorAll(".pink-text");
    let thePinkBg = document.querySelectorAll(".pink-bg");
    thePinkText.forEach((element) => (element.style.color = colore));
    thePinkBg.forEach((element) => (element.style.backgroundColor = colore));
    let theLink = document.querySelectorAll("a");
    theLink.forEach((element) => (element.style.color = colore));
  });
