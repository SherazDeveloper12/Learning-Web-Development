for( var index = 1; index < 10; index++){
    console.log("index is ", index);
}
// for in loop
let obj = {
    naem : "ali",
    cast : "chahjra",
    salary : 39000
}
for (const key in obj) {
     {
        const element = obj[key];
        console.log(key, element)
        
    }
}

// for of loop
for (const c of "choromphyil" ) {
    console.log(c)
}

var i= 1;
while(i<30)
{
    console.log("the value of i is ), ", i);
    i++;
}

var num = 1;
do{
    console.log("the value of number starts from 1", num);
     num++;
}
while(num <10) 
