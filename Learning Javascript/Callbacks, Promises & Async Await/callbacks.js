
/* Basic call back function is given below */

// a basic function of sum
function sum(a,b) {             
    console.log(a+b)
}
// a basic function that is taking 2 arguments as variable and third one as funciton which is taking 2 variables
function calculator(a,b,sumCallBack) {
    sumCallBack(a,b)
    
}
// running the recent function where giving 2 numbers as argument and the sum as function argument  
// basic funciton of sum is being call back here
// it is synchronous call back funciton
calculator(9,5,sum)

//here it is taking time to run callback funciton due to settimeout fucniton which takes call back funciton as argument
// it is asynchrnus call back function
setTimeout(()=>{
    calculator(10,5,sum)
}, 1500)

// call back function generated
function getdata(dataid, getnextdata) {
    setTimeout(() => {
        console.log("data", dataid)
        if (getnextdata){           /*[ this if(getnextdata) means that it will only run getnextdata, if it given] */
            getnextdata();
        }
    }, 2000);
    
}

// callback hell or call back peramid (created by nested callbacks)
getdata(1,()=>{      /*[ this  arrow function ()=> means that a function is given in function as argument */
    console.log("getting data 2")
    getdata(2,()=>{      /*[ this get(2, arowfn) means that 2 is argument and arrow function is also argument that runs the other function] */
            console.log("getting data 3")
        getdata(3, ()=>{
                console.log("getting data 4")
            getdata(4,()=>{
                console.log("call back hell is finished here")
            })
            
        })
    })
})





