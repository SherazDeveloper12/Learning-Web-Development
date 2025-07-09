// let title = document.getElementById("titleheading")
// console.log(title)
// let channel = document.getElementById("channel")
// let views = document.getElementById("views")
// let duration = document.getElementById("duration")
// let ageofvideo = document.getElementById("ageofvideo")
// let Thumbnail = document.getElementById("image")
// function fn(videotitle,channelname,viewscount,old,timestamp,url) {
    
//     title.replaceWith(videotitle);
//     channel.replaceWith (channelname);
//     views.replaceWith (viewscount);
//     ageofvideo.replaceWith (old);
//     duration.replaceWith(timestamp)
//     Thumbnail.setAttribute("src", `${url}`);
// }

// let button = document.getElementById("btn")
// button.addEventListener("click", ()=>{
// fn("Introduction to Backend | Sigma Web Dev video #2","sheraz","760k","1 day ago","09:20","thmbnail.2.jpg")
// fn("Introduction to Backend | Sigma Web Dev video #2","sheraz","760k","1 day ago","09:20","thmbnail.2.jpg")
// })

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }

let html =   `<div class="card">
            <div class="thumbnail">
                <img id="image" src="${thumbnail}" alt="">
                 
                <div class="duration">
                   <p id="duration">${duration}</p>
                </div>
            </div>
            <div class="videodetails">
                <div class="title"><h3 id="titleheading">${title}</h3></div>
                <div class="metadata">
                    <div class="channel"><p id="channel">${cName}</p></div>
                    <div class="views"><p id="views">${viewStr}</p></div>
                    <div class="ageofvideo"><p id="ageofvideo">${monthsOld} month old</p></div>
                </div>
            </div>
        </div>`
    
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 569990, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

