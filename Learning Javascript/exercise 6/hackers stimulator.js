function dotdelay(){
    var dotdelaytime = 500
    return dotdelaytime;
}
async function first() {
    return new Promise((resolve, reject) => {
        function timedelay() {
            var randomtime = (Math.floor((Math.random() * 7) + 1)) * 1000
            return randomtime;
        }

        console.log(timedelay())
        setTimeout(() => {
            let firstline = `<div class="firstline"><span>initilizing Hacking</span></div>`
            document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + firstline

            resolve(200);
        }, timedelay());

    })
}
async function dot () {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
         let dots = `<span>.</span>`
         document.querySelector(".firstline").innerHTML = document.querySelector(".firstline").innerHTML + dots
         resolve(200)
         console.log("dot done")
    }, dotdelay());

    })
}
async function dots() {
       await dot()
       await dot()
       await dot()
    
}

async function sec() {
    return new Promise((resolve, reject) => {
        function timedelay() {
            var randomtime = (Math.floor((Math.random() * 7) + 1)) * 1000
            return randomtime
        }
        console.log(timedelay())
        setTimeout(() => {
            let secline = ` <div class="secline"> <span>Reading your files</span></div>`
            document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + secline
            resolve(200)
        }, timedelay());
    })
}
async function dot2 () {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
         let dots = `<span>.</span>`
         document.querySelector(".secline").innerHTML = document.querySelector(".secline").innerHTML + dots
         resolve(200)
         console.log("dot done")
    }, dotdelay());

    })
}

async function dots2() {
       await dot2()
       await dot2()
       await dot2()
    
}
async function third() {
    return new Promise((resolve, reject) => {
        function timedelay() {
            var randomtime = (Math.floor((Math.random() * 7) + 1)) * 1000
            return randomtime
        }
        console.log(timedelay())
        setTimeout(() => {
            let thirdline = `   <div class="thirdline"> <span>Password Files Detected</span></div>`
            document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + thirdline
            resolve(200)
        }, timedelay());
    })
}
async function dot3 () {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
         let dots = `<span>.</span>`
         document.querySelector(".thirdline").innerHTML = document.querySelector(".thirdline").innerHTML + dots
         resolve(200)
         console.log("dot done")
    }, dotdelay());

    })
}

async function dots3() {
       await dot3()
       await dot3()
       await dot3()
      
    
}
async function fourth() {
    return new Promise((resolve, reject) => {
        function timedelay() {
            var randomtime = (Math.floor((Math.random() * 7) + 1)) * 1000
            return randomtime
        }
        console.log(timedelay())
        setTimeout(() => {
            let fourthline = `   <div class="fourthline"> <span>Sending All the personal Files and Passwords to
                server</span></div>`
            document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + fourthline
            resolve(200)
        }, timedelay());
    })
}
async function dot4 () {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
         let dots = `<span>.</span>`
         document.querySelector(".fourthline").innerHTML = document.querySelector(".fourthline").innerHTML + dots
         resolve(200)
         console.log("dot done")
    }, dotdelay());

    })
}

async function dots4() {
       await dot4()
       await dot4()
       await dot4()
}
async function fifth() {
    return new Promise((resolve, reject) => {
        function timedelay() {
            var randomtime = (Math.floor((Math.random() * 7) + 1)) * 1000
            return randomtime
        }
        console.log(timedelay())
        setTimeout(() => {
            let fifthline = ` <div class="fifthline"> <span>Cleaning up</span><span>.</span><span>.</span><span>.</span></div>`
            document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + fifthline
            resolve(200)
        }, timedelay());
    })
}
async function dot5 () {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
         let dots = `<span>.</span>`
         document.querySelector(".fourthline").innerHTML = document.querySelector(".fourthline").innerHTML + dots
         resolve(200)
         console.log("dot done")
    }, dotdelay());

    })
}

async function dots5() {
       await dot5()
       await dot5()
       await dot5()
}

async function gettinglines() {
    await first();
    await dots();
    await sec();
    await dots2()
    await third();
    await dots3()
    await fourth();
    await dots4()
    await fifth();
    await dots5()

}
gettinglines()
console.log("hello")