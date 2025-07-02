let button = document.querySelector(".btn")
button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "i am clicked buddy"
    setInterval(a)
    
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
    
})
// for getting any key from keyboard
document.addEventListener("keydown", (e)=>console.log(e.key))
function getrandomcolor(){
  let firstcolor= Math.ceil(0 + Math.random()*255);
  let secondcolor= Math.ceil(0 + Math.random()*255);
  let thirdcolor= Math.ceil(0 + Math.random()*255);
  return  `rgb(${firstcolor}, ${secondcolor}, ${thirdcolor})`
}
var a = setInterval(() => {
    box.style.backgroundColor= getrandomcolor()
}, 500);
console.log(a)
let clearbtn = document.querySelector(".clearbtn")
clearbtn.addEventListener("click", ()=>{
clearInterval(a)  })

setTimeout(() => {
    container.style.backgroundColor=getrandomcolor()
}, 1000);