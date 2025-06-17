
//slected by queryselectorAll
document.querySelectorAll(".box").forEach(e =>{e.style.backgroundColor="gray"})

// selected by css class and it give us html collection first and then we select the element by index
var boxes = document.getElementsByClassName("box")
console.log(boxes)
boxes[0].style.backgroundColor="red"

// selected by css id selector
document.getElementById("redbox").style.backgroundColor="lightgreen"
document.getElementById("redbox").style.width="80px"

//selected by queryselector
document.querySelector(".box").style.width="90px"

//selected by tagname
var ali= document.getElementsByTagName("div")
console.log(ali)
//used the matches function here
console.log(ali[2].matches("redbox"))
//used the closed fucntion here 
console.log(ali[2].closest(".container"))
//used the containes fucniton here
console.log(document.querySelector("body").contains(document.querySelector(".container")))