//created a program to give random colors to random boxes

/* let boxes = document.body.children[0].children
console.log(boxes)
let a = parseInt(Math.random()*20)
let b = parseInt(Math.random()*20)
let c = parseInt(Math.random()*20)
let d = parseInt(Math.random()*20)
let e = parseInt(Math.random()*20)
let aa = parseInt(Math.random()*20)
let bb = parseInt(Math.random()*20)
let cc = parseInt(Math.random()*20)
let dd = parseInt(Math.random()*20)
let ee = parseInt(Math.random()*20)

const colors = {
  0: "red",
  1: "blue",
  2: "green",
  3: "yellow",
  4: "purple",
  5: "orange",
  6: "pink",
  7: "brown",
  8: "cyan",
  9: "magenta",
  10: "lime",
  11: "teal",
  12: "indigo",
  13: "violet",
  14: "gold",
  15: "silver",
  16: "coral",
  17: "crimson",
  18: "turquoise",
  19: "olive",
  20: "maroon"
};
boxes[0].style.backgroundColor=colors[a]
boxes[1].style.backgroundColor=colors[b]
boxes[2].style.backgroundColor=colors[c]
boxes[3].style.backgroundColor=colors[d]
boxes[4].style.backgroundColor=colors[e]
boxes[0].style.color=colors[aa]
boxes[1].style.color=colors[bb]
boxes[2].style.color=colors[cc]
boxes[3].style.color=colors[dd]
boxes[4].style.color=colors[ee] */

let boxes = document.body.children[0].children

function getrandomcolor(){
  let firstcolor= Math.ceil(0 + Math.random()*255);
  let secondcolor= Math.ceil(0 + Math.random()*255);
  let thirdcolor= Math.ceil(0 + Math.random()*255);
  return  `rgb(${firstcolor}, ${secondcolor}, ${thirdcolor})`
}
Array.from(boxes).forEach(e=>{
 e.style.backgroundColor = getrandomcolor()
 e.style.color = getrandomcolor()
})
