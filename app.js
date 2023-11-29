const menuLine = document.querySelector("#menuLine");
const theMenu = document.querySelector("#theMenu");
const hlink = document.querySelectorAll("#hLink");

menuLine.addEventListener("click", () => {
    theMenu.classList.toggle("hidden")
    menuLine.classList.toggle("bg-white")
})

hLinks.forEach(link=>{
    link.addEventListener("click", () => {
        theMenu.classList.toggle("hidden")
        menuLine.classList.toggle("bg-white")
    })
})
    
