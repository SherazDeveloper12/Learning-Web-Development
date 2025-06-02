var numbers = [1,2,3,4,5,6,7,8,9,10]
var newnumbers = []
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index] *2;
    newnumbers.push(element)
}

console.log("odl number", numbers)
console.log("new number", newnumbers)

// Arrow function
 
const sumfunction =(a,b) => a+b;
console.log("sum of 2+3", sumfunction(2,3))

//  loops on array
//these loops only works on array
//  foreach loop (it does not return any value)
numbers.forEach((element, index )=> {
    console.log("element => ", element, "index=>",index )
});

//  map loop (it does return a value and save it to a new array, it return the new array lenght with same lenght of old array always)
let array= [1,2,3,4,5]
let result = array.map((element, index, array) =>{ 
   return  element **2 
})
    console.log("result=>", result)

// //  filter loop (it does return a value and save it to a new array, we can change the lenght of new array by applying filters )
let newresult = array.filter((element, index) => element>2); // here we change the lenght of new array
console.log("result=>", newresult)
// numbers.forEach(element => {
    
// });

for (const element of numbers) {
    console.log(element)
    
}

let a = [1,2,3,4,5]
console.log("reduced function => ", a.reduce(sumfunction))
// // let string = "harry"
// // let newarrayfromstring= array.from("string")
// console.log("new array from string", array.from("string"))