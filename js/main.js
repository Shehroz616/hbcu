let gridWrapper = document.querySelectorAll(".grid-wrapper img")
let windowHeight = window.innerHeight
let girdRow = (windowHeight / 3 ) 
console.log(girdRow)
gridWrapper.forEach(img => {
    img.style.maxHeight = girdRow + "px"
})
window.addEventListener("resize", () => {
    let windowHeight = window.innerHeight
    let girdRow = (windowHeight / 3 )
    gridWrapper.forEach(img => {
        img.style.maxHeight = girdRow + "px"
    })
    
});

