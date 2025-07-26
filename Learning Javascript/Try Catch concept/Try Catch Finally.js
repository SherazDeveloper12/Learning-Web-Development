try {                               // anything in try will run in positive condition
    let a = parseInt(prompt("enter your first number"))
let b = parseInt(prompt("enter your second number"))
if(isNaN(a) || isNaN(b)){
    throw console.error("syntax error agya bhai");
}
console.log("the sum is ",a+b)

} catch (error) {       // if any error occurs then catch will run
    console.log("error to ana tha bhai")
}
finally{                // finally will run in every situation espeicall even after return in function
 console.log("mn to chalonga rajyy")
}


function trycatchconcept(){
try {
    let c = parseInt(prompt("enter your first number"))
let d = parseInt(prompt("enter your second number"))
if(isNaN(c) || isNaN(d)){
    throw console.error("syntax error agya bhai");
}
console.log("the sum is ",a+b)
return true 
}

catch (error) {
    console.log("error to ana tha bhai")
    return false            // ususally things don't run after a return in any function but  finally will always run even after return in the function
}

finally{            
 console.log("mn to chalonga rajyy")
}
}

trycatchconcept()