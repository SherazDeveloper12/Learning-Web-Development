// TO FIND THE INNER HTML OF ANY ELEMENT OR DIV
let a = document.querySelector(".container").innerHTML
console.log("inner elements of container are ",a)
// TO FIND THE OUTER HTML OF ANY ELEMENT OR DIV
let b = document.querySelector(".container").outerHTML
console.log("outer elements of container are ", b)
// TO FIND THE TEXT CONTENT  OF ANY ELEMENT OR DIV
let c = document.querySelector(".container").textContent
console.log(" Text of container are ", c)
// TO FIND THE TAG NAME OF ANY ELEMENT OR DIV
let d = document.querySelector(".container").tagName
console.log(" tag name of container is ", d)
// TO FIND THE NODE NAME  OF ANY ELEMENT OR DIV
let e = document.querySelector(".container").nodeName
console.log(" Node name of container is ", e)
// TO CHECK THE ELEMENT IS HIDDEN OR NOT IT WILL RETURN BOLEN VALUE AS TRUE OR FALSE
let f = document.querySelector(".box").hidden 
console.log(" the first box class element is hidden ", f)
// TO MAKE ANY ELEMENT WE CAN SET THE VALUE OF HIDDEN TAGS AS TRUE
document.querySelector(".box").hidden = true
// to check if element has that attribute
let g = document.querySelector(".box").hasAttribute("class")
console.log(`the first box class element has a class attribute in it ${g}`)
// to set any attribute in any element
document.querySelector(".red").setAttribute("style", "background-color: red; border: 2px solid black; text-align: center; color: white; height: 40px")
document.querySelector(".container").setAttribute("style", "background-color: yellow; border: 2px solid black;")
document.querySelector(".lastbox").setAttribute("data-createdby", "sheraz")
// to get the value of any attribute
let h = document.querySelector(".red").getAttribute("class")
console.log("the classes of .red class elements are ",h)
//  to access any data attribute
let k = document.querySelector(".lastbox").dataset
console.log("the elemeent having dataset of sher khan", k)
// to get all the attributes of any element
let l = document.querySelector(".red").attributes
console.log("the attributes of red class element are ",l)
// // to remove any attribute from any element
document.querySelector(".red").removeAttribute("data-createdby")
// to create a div
let div = document.createElement("div")
//to setup its inner text
div.innerHTML= "hi i am created now and place at the end of container"
// to set its class
div.setAttribute("class", "divcreated")
// to place created div at the end of container
document.querySelector(".container").append(div)
//to create an other div
let divb = document.createElement("div")
divb.innerHTML= "hi i am created now and place at the start of container"
divb.setAttribute("class", "seconddivcreated")
// to place created div at the start of container
document.querySelector(".container").prepend(divb)
//to create an other div
let divc = document.createElement("div")
divc.innerHTML= "hi i am created now and place before of container"
divc.setAttribute("class", "thirddivcreated")
// to place created div  before of container
document.querySelector(".container").before(divc)
//to create an other div
let divd = document.createElement("div")
divd.innerHTML= "hi i am created now and place after of container"
divd.setAttribute("class", "fourthdivcreated")
// to place created div after of contained
document.querySelector(".container").after(divd)
//to replace newcreated div with an other div
let dive = document.createElement("div")
dive.innerHTML= "hi i am created now and place after of container and styled as well"
dive.setAttribute("class", "fivthdivcreated")
dive.setAttribute("style", "background-color: green; border: 2px solid red; color: white;")
// to replace created div with the node
document.querySelector(".fourthdivcreated").replaceWith(dive)
// inserting adjsanthtml
let cont = document.querySelector(".container")
// inserted html after star  of node
cont.insertAdjacentHTML("afterbegin","hello i am inserted after begin of <b>container</b>")
// inserted html after star of node
cont.insertAdjacentHTML("afterend","hello i am inserted after end of <b>container</b>")
// inserted html after end  of node
cont.insertAdjacentHTML("beforebegin","hello i am inserted before begin of <b>container</b>")
// inserted html before ending of node
cont.insertAdjacentHTML("beforeend","hello i am inserted before end of <b>container</b>")
//to remove any node
document.querySelector(".daba").remove()
// to add class in class list 
document.querySelector(".container").classList.add("green")
document.querySelector(".container").classList.add("yellow")
document.querySelector(".container").classList.add("pink")
// to check class list in array form
let classlists = document.querySelector(".container").classList
console.log("class list of container is ", classlists)
// to remove any class
document.querySelector(".container").classList.remove("pink")
// to check only class names
let classnames= document.querySelector(".container").className
console.log("names of classes in container", classnames)
// to toggle the class
document.querySelector(".rectangle").classList.toggle("dark")