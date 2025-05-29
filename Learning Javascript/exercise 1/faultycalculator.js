/* faulty computer using if else method  */

var randomNumber = Math.random()
var a = parseFloat(prompt("enter first number"))
var b = parseFloat(prompt("enter second number"))
console.log("You first number =", a)
console.log("You second number =", b)
console.log("random number is = ", randomNumber)
 console.log("sum  of these two numbers is =", a + b)
if (randomNumber > 0.1) {
    alert("sum  of these two numbers is =", a + b)
    alert("Multiply  of these two numbers is =", a * b)
    alert("Subtraction  of these two numbers is =", a - b)
    alert("Division  of these two numbers is =", a / b)
}
else {
    alert("sum  of these two numbers is =", a - b)
    alert("Multiply  of these two numbers is =", a + b)
    alert("Subtraction  of these two numbers is =", a / b)
    alert("Division  of these two numbers is =", a ** b)

}

/* faulty computer using eval  method  */

// let randomNumber = Math.random()
// console.log("random number is =", randomNumber)
// let a = prompt("enter your first number")
// let c = prompt("enter your operator ")
// let b = prompt("enter your second number")
// console.log("first number is =", a)
// console.log("operation is =", c)
// console.log("second number is =", b)

// let obj = {
//     "+" : "-",
//     "-" :"/",
//     "*" : "+",
//     "/" : "**"
// }
// if (randomNumber > 0.1) {
//    alert(`the result it ${eval(`${a} ${c} ${b}`)}`)
// } else {
//     c = obj[c]
//     alert(`the result it ${eval(`${a} ${c} ${b}`)}`)
// }