// by puttin async in the start funciton returns a promise
/* async function hello() {
    console.log("hello")
}

// api function that returns weather data and calling the weather updata again and again after some await
function api() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("weather update")
            resolve(200)
        },2000)
    })
}
async function getweatherdata() {
    // await will wait for the fucntion to be complete and then move to other line
    await api();
    console.log("weather updated was published")
    await api()
  
}
getweatherdata()
*/

// solved the previous data example with help of async update
function getdata(dataid ) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataid)
            resolve(200)
        }, 2000);
    })
}
async function getalldata() {
    console.log("getting data 1...")
    await getdata(1)
       console.log("getting data 2...")
    await getdata(2)
       console.log("getting data 3...")
    await getdata(3)
       console.log("got all data")
}
getalldata()