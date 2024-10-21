const avatar = document.getElementById("avatar")

avatar.addEventListener("click", ()=>{
    avatar.src = "https://www.parcanimalierlabarben.com/wp-content/uploads/2023/07/fiche_loutre_carre.jpg"
})

const nameSpan = document.getElementById("firstname")
const buttonName = document.getElementById("change-name-and-color")
const bgPinkSections = document.getElementsByClassName("pink-bg")
const pinkText = document.getElementsByClassName("pink-text")

buttonName.addEventListener("click", ()=>{
    
    const bgColorSelection = prompt("Choose a color :")
    const namePrompt = prompt("Your name :")
    nameSpan.innerText = namePrompt
    nameSpan.style.color = "white"
    for(let bg of bgPinkSections){
        bg.style.backgroundColor = bgColorSelection
    }
    for(let text of pinkText){
        text.style.color = bgColorSelection
    }
})