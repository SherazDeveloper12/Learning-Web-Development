// promises
/*a basic promise has two callbacks resolve and reject
let promise = new Promise((resolve, reject) => {
    console.log("i am the promise")
    resolve("success")
})
console.log(promise)*/

//function to understand promise handlers
/*function getdata(dataid, getnextdata) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject("error bhai an")
            console.log("data", dataid)
            resolve("success")
            if (getnextdata) {
                getnextdata()
            }
        }, 5000);
    })
}
*/

//promise always return reolsve or reject which we can get by using then or catch, if the promise is resolved then "then funciton" is printed and if promise is rejected then the catch function will be printed
/*const getpromise = ()=>{
  return new Promise((resolve, reject) => {
    console.log("i am the promise")
    resolve("success")
    // reject("agya jani tera error")
})}
let promise =getpromise()
promise.then((res)=>{           
    // [res is a by default perameter for then gives the resolved result] 
    console.log("promise fullfiled",res)
})
promise.catch((err)=>{     
    //  [err is a by default permater for catch that gives the rejected result] 
    console.log("error agya biroo",err)
    
})
    */

//  PROMISE CHAIN
// create two function which returns promise which console data1/2
   function asyncfunction1(){
     return new Promise((resolve, reject) => {
   setTimeout(() => {
        console.log("data1")
        resolve("success")
        reject("failed")
    
   }, 2000);
   })}

   function asyncfunction2(){
     return new Promise((resolve, reject) => {
   setTimeout(() => {
        console.log("data2")
        resolve("success")
        reject("failed")
    
   }, 2000);
   })}
// consoling the f1 then which console something and also run the f2 then in itself after being run and then f2 then will run an other f3 then in itself which creates a promise chain
console.log("fetching data 1....")
   asyncfunction1().then((res)=>{
    console.log(res,"fetching data 2....")
   asyncfunction2().then((res)=>{
    console.log(res,"fetching ends")
   })
   })
