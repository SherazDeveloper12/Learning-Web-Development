/* factorial using reduce method for given array */

// let arrayred =[1,2,3,4,5,6]
// let multiplication = (a,b) => a*b;
// let factorial = arrayred.reduce(multiplication)
// console.log("factorial of 6 = ",factorial)

/* factorial using reduce method for any number */

let a = parseInt(prompt("Enter the number of which you want as factorial"))
function Arraay (number) {
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,))
    let factorial = arr.slice(1).reduce((a,b) => a*b)
    alert(`factorial of ${number} = ${factorial}`)
}
Arraay(a)

// there is an other method for for loop as well which was not understandable by me for now 

