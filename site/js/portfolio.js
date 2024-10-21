const avatar = document.getElementById("avatar")

avatar.addEventListener("click", ()=>{
    avatar.src = "https://www.parcanimalierlabarben.com/wp-content/uploads/2023/07/fiche_loutre_carre.jpg"
})

const nameSpan = document.getElementById("firstname")
const buttonName = document.getElementById("change-name-and-color")

buttonName.addEventListener("click", ()=>{
    const namePrompt = prompt("Your name :")
    nameSpan.innerText = namePrompt
    nameSpan.style.color = "white"
})