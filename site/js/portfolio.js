document.getElementById("avatar").addEventListener("click", function () {
  avatar.src = "image/avatar.svg";
});

document
  .getElementById("promptcolorbutton")
  .addEventListener("click", function () {
    document.getElementById("firstname").innerText = prompt("Enter your name");
    document.getElementById("firstname").style.color = "white";
    document.querySelector(".pink-bg").style.backgroundColor =
      prompt("Enter a color");
  });
