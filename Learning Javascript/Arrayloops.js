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
var result = numbers.map((element, index )=> element >5);
    console.log("result=>", result)
//  filter loop (it does return a value and save it to a new array, we can change the lenght of new array by applying filters )
var result = numbers.filter((element, index) => element >4); // here we change the lenght of new array
console.log("result=>", result)