let title = document.getElementById("titleheading")
console.log(title)
let channel = document.getElementById("channel")
let views = document.getElementById("views")
let duration = document.getElementById("duration")
let ageofvideo = document.getElementById("ageofvideo")
let Thumbnail = document.getElementById("image")
function fn(videotitle,channelname,viewscount,old,timestamp,url) {
    
    title.replaceWith(videotitle);
    channel.replaceWith (channelname);
    views.replaceWith (viewscount);
    ageofvideo.replaceWith (old);
    duration.replaceWith(timestamp)
    Thumbnail.setAttribute("src", `${url}`);
}

let button = document.getElementById("btn")
button.addEventListener("click", ()=>{
fn("Introduction to Backend | Sigma Web Dev video #2","sheraz","760k","1 day ago","09:20","thmbnail.2.jpg")
fn("Introduction to Backend | Sigma Web Dev video #2","sheraz","760k","1 day ago","09:20","thmbnail.2.jpg")
})