// define the function here
function sumoftwonumbers(params) {
var num1 = 5;
var num2 = 9;
var sum = num1 + num2
console.log("sum", sum)
}
sumoftwonumbers()

//sending values to paremeters
function summation(a,s,f,g) {
    var sum = a+s+f+g;
    console.log("summation =>", sum)
}
summation(5,2,1,2)
//giving default values to parameters
function jama(a=0,s=0,f=0,g=0) {
    var sum = a+s+f+g;
    console.log("jama =>", sum)
}

jama(5,0,2)

//defining return 

function sumationreturn(a=0,s=0,f=0,g=0) {
    var sum = a+s+f+g;
    return("sumationreturn =>", sum)
}

var returnedvalue = sumationreturn(4,6,1,3)
console.log("retuurn value", returnedvalue)
