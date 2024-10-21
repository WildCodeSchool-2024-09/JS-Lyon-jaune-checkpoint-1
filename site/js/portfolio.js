function changeAvatar() {
  let img = document.getElementById("avatar");
  img.src = "image/avatar.svg";
}

function nameChange() {
  let newName = prompt("What's your name?");
  if (newName) {
    document.getElementById("firstname").innerText = newName;
    document.getElementById("firstname").style.color = "white";
  }
}
