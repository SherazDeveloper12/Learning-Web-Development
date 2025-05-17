var statement = "hello i am pakistan";
var getstatementlength = statement.length
console.log("strings length" , getstatementlength)
var slice = statement.slice(0,5)
console.log("sliceing the hello word =>" , slice)
var substring = statement.substring(11,19)
console.log("substring the work pakistan =>", substring)
var replacedstatement = statement.replace("pakistan", "sheraz")
console.log("i repaced the word pakistan with sheraaz here =>", replacedstatement)
var submation = statement+ " " + replacedstatement
console.log("submation of strings => " , submation)
var concat = statement.concat(" ".concat( replacedstatement))
console.log("catcut of strings =>", concat)
var uppercasing = statement.toUpperCase()
console.log("i upercased the statement here => ", uppercasing)

var day = "Sunday"
if(day.toLowerCase()==="sunday"){
    console.log("it is sunday today")
}
else{
    console.log("its not sunday today")
}

var username = "sheraz ";
var trimmed = username.trim()
console.log("i removed spaces here = > ", trimmed , );
console.log("total length of username => ", username.length)
console.log("total lenght of trim =>", trimmed.length)
var charatusername = username.charAt(5)
console.log("the 5th character in username is =>" , charatusername)
var indexusername = username.indexOf("z")
console.log("the 5th character in username is =>" , indexusername)

var stringsarray = "i , love , pakistan , 23"
console.log("conversion of string into array =>", stringsarray.split(","))

var numbersstring = "1,2,3,4,5,6,7,8,9,10"
console.log("conversion of numberstring into array", numbersstring.split(","))

var numbersofarray = numbersstring.split(",")

var numbersarray = []
for (let index = 0; index < numbersofarray.length; index++) {
    const element = numbersofarray[index];
    const parsed = parseInt(element)
console.log("element", parsed)
numbersarray.push(parsed)
}

console.log("numbers array is here => " , numbersarray)