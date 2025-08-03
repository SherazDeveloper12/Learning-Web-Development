console.log(a6)                 /*  <= it will be undefined */
async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

(async function main() {                     /*a async function named as main and its being called imediately here*/
    let a = await sleep()
    console.log(a)                          /*    <== its IIFE function here                  */
    let b = await sleep()
    console.log(b)
}
)()                             /*function is created in () and () after the function shows its being called imediately*/


/*Desstructing concept*/

// creating arrays directly from variable
let  [x,y, ... c ]= [5,6,7,89,56,0]
console.log(`the value of x is ${x} the value of y is ${y} and the rest is an array which is ${c} `)

// gettiing elements directly from object
let obj = {
    aa:2,
    bb:4,
    c:5,
}
let {aa,bb} = obj
console.log(aa,bb)

//spread syntax
let g = {...obj}        /*spread out the object in form of array*/
console.log(g)

function sum (a,b,c,d,e){
    return a+b+c+d+e

}
let h = [3,5,6,7,9]
console.log(sum(h[0],h[1],h[2],h[3],h[4]))
console.log(sum(...h))              /*   <= array elements are spread out here           */

var a6 =7           /*  <= hosting a6 to top and if it was in a function or it was a let or const then it gives us a error and function can also be host*/
