// error handling with try catch finally
try {
    console.log("hello i ma here to create an error after me")
    console.log("shahmer", shahmeer)
} catch (error) {
    console.log("error here",error)
}
finally{
    console.log("there is error or no error i simply don't care")
}

// destructing (it extract attributes of object  to variables )
var mouseobj = {
    color: "red",
    price: 245,
    company: {namec: "Dell", model:"xZ21"
}
}
var {color, price, company} = mouseobj // it will extract these attribute and we can call them anywhere
console.log("company name", company)

//spread operator (it adds up attributes of two objects or two array in one)

var obj1 ={
    nameofcomp : "dell",
    model : "mKA1"
}
var obj2 ={
    owner : "shaha",
    price : 241
}

var finalobj= {
    ...obj1,
    ...obj2
}
console.log("final object", finalobj)

var array1 = [1,2,34,5,5]
var array2 = [2,5,7,8,9,9]
var fianlarray= [...array1,...array2]
console.log("final array", fianlarray)

//rest opertaor (it create a function in which we add anything will be added to a array)
function sum(...arg) {
    console.log("arg", arg)
}
sum(12,5,6,7,8,5,12,12,141,4,1, "naveed")

//timeout and timeinterval (we can run any fucntion after some time with timeout function and we can run any function continously after some interval with time interval)

console.log("john : hi whatsapp")
console.log("john: harry wait for uncle")
function callback() {
    console.log("uncle: am i late than you harry")
}
setTimeout(callback, 3000)
console.log("harry: i can't wait for it")

function callback() {
    console.log("uncle: where are you harry :(")
}
// setInterval(callback, 500)

// async await
// function wait()  {
//     setTimeout(() =>{
//     return "wait for wait"
// }, 3000);

// async function showresult() {
//     var result=await wait();
//     console.log("result", result)
    
// }


//finding element in arry (inlcudes is used to check false or true about existenace of attribue in array)
var jol = [1,23,4,5,5,6,87,6]
var isExist = jol.includes(23)
console.log("is there any 23 in jol", isExist)

//sort method on jol (it arrange them in ascending or descending order)
var newjol = jol.sort((a,b) => b-a)
console.log("new jole", newjol)

//random number (this function give us a randomg number)

var random =Math.random()
console.log("random", random)

// finding max value in arry
var maxvalue= Math.max(...jol)
console.log("max value in jole", maxvalue)
var minvalue= Math.min(...jol)
console.log("min value in jole", minvalue)

//rouding off numbers

console.log("rounded off form of 234.54", Math.round(234.54)) // round()  function is used to round of any number
console.log("rounded off form of 234.24", Math.ceil(234.24)) // ceil()  function is used to round of any number to uper number in any case
console.log("rounded off form of 234.84", Math.floor(234.84)) // fllor()  function is used to round of any number to lower number in any case

