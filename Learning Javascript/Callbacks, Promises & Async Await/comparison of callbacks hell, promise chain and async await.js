
// call back hell
/*function getdata(dataid, getnextdata) {
    setTimeout(() => {
        console.log("data", dataid)
        if (getnextdata) {
            getnextdata();
        }
    }, 2000);
}
getdata(1, () => {
    console.log("getting data 2")
    getdata(2, () => {
        console.log("getting data 3")
        getdata(3, () => {
            console.log("getting data 4")
            getdata(4, () => {
                console.log("call back hell is finished here")
            })

        })
    })
})

// promise chain
function getdata(dataid ) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject("error bhai an")
            console.log("data", dataid)
            resolve("success")
        }, 2000);
    })
}
getdata(1).then((res)=>{
    console.log(res,"fetching next data 2")
    return getdata(2)})
    .then((res)=>{
        console.log(res,"fetching next data 3")
    return getdata(3)})
    .then((res)=>{
        console.log("fetching ends. All data received !")
    })
*/
// async await function
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