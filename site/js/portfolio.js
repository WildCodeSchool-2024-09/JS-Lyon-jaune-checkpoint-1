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

const links = document.querySelectorAll("a")
for(let link of links){
    link.style.color = "#750ff7"
}

const listTools = document.getElementById("front-dev-tools")
const toolsItems = listTools.getElementsByTagName("li")
const modifyButton = document.getElementById("modify-button")

modifyButton.addEventListener("click", () => {
    toolsItems[0].innerHTML = "VSCode"
    toolsItems[1].innerHTML = "Gihub"
    toolsItems[2].innerHTML = "Terminal"
})

const buttonAdd = document.getElementById("add-button")
const listToolsBack = document.getElementById("back-dev-tools")


buttonAdd.addEventListener("click", () => {
    const addText = document.getElementById("add-tool").value
    const li = document.createElement("li")
    li.innerText = addText
    listToolsBack.appendChild(li)
})