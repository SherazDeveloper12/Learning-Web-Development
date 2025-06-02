/* factorial using reduce method */
let arrayred =[1,2,3,4,5,6]
let multiplication = (a,b) => a*b;
let factorial = arrayred.reduce(multiplication)
console.log("factorial of 6 = ",factorial)

/* factorial using for loop method */
// let array =[1,2,3,4,5,6]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     let product = element * element * element 
//     console.log(product)
// }
