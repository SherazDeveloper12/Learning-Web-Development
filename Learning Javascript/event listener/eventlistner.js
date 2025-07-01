let button = document.querySelector(".btn")
button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "i am clicked buddy"
    })

    // stopped the propagation
let container = document.querySelector(".container")
container.addEventListener("click",(e)=>{
    e.stopPropagation()
    container.style.backgroundColor = "Red";
    })
let box =document.querySelector(".box")
box.addEventListener("click", (e)=>{
    e.stopPropagation()
    box.style.backgroundColor= "blue"
})
