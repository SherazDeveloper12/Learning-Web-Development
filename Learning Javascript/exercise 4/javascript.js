//created a program to give random colors to random boxes
let boxes = document.body.children[0].children
console.log(boxes)
let a = parseInt(Math.random()*20)
let b = parseInt(Math.random()*20)
let c = parseInt(Math.random()*20)
let d = parseInt(Math.random()*20)
let e = parseInt(Math.random()*20)
// let box1 = parseInt(Math.random()*5)
// let box2 = parseInt(Math.random()*5)
// let box3 = parseInt(Math.random()*5)
// let box4 = parseInt(Math.random()*5)
// let box5 = parseInt(Math.random()*5)
// console.log(box1)
// console.log(box2)
// console.log(box3)
// console.log(box4)
// console.log(box5)

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
