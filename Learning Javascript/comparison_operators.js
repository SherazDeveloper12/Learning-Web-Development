var num1 = 5;
var num2 = 10;
var num3 = 15;
var num4 = 20;

var result1 = num1 > num2;
var result2 = num1 < num2;
var result3 = num1 >= num2;
var result4 = num1 <= num2;
var result5 = num1 == num2;
var result6 = num1 != num2;
var result7 = num1 === num2;
var result8 = num1 !== num2;
var result9 = num1 > num2 && num3 > num4;
var result10 = num1 > num2 && num3 < num4;
var result11 = num1 < num2 && num3 > num4;
var result12 = num1 < num2 && num3 < num4;

var result13 = num1 > num2 || num3 > num4;
var result14 = num1 > num2 || num3 < num4;
var result15 = num1 < num2 || num3 > num4;
var result16 = num1 < num2 || num3 < num4;


var result17 = num1 < num2 || num3 < num4 && num1 < num2 && num3 > num4;

var firstname = "sheraz";
var lastname = "khan";
var result18 = firstname == lastname;
var result19 = firstname != lastname;

console.log("number 1 is greator than number 2",  result1)
console.log("number 1 is less than number 2",  result2)
console.log("number 1 is greator than or equal to number 2",  result3)
console.log("number 1 is less than or equal to number 2",  result4)
console.log("number 1 is equal to number 2",  result5)
console.log("number 1 is not equal to number 2",  result6)
console.log("number 1 is equal to and have same data type as number 2",  result7)
console.log("number 1 is not equal to and have same data type as number 2",  result8)
console.log("number 1 is greator than number 2 and number 3 is greator than number 4 ",  result9)
console.log("number 1 is greator than number 2 and number 3 is less than number 4 ",  result10)
console.log("number 1 is less than number 2 and number 3 is greator than number 4 (result11)",  result11)
console.log("number 1 is less than number 2 and number 3 is less than number 4 ",  result12)
console.log("number 1 is greator than number 2 or number 3 is greator than number 4 ",  result13)
console.log("number 1 is greator than number 2 or number 3 is less than number 4 ",  result14)
console.log("number 1 is less than number 2 or number 3 is greator than number 4 ",  result15)
console.log("number 1 is less than number 2 or number 3 is less than number 4 (result16)",  result16)
console.log("number 1 is less than number 2 or number 3 is less than number 4 and number 1 is less than number 2 and number 3 is greator than number 4 ",  result17)
console.log("first name is same as last name" ,result18)
console.log("first name is not same as last name" ,result19)