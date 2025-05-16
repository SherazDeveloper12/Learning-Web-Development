var currentdate = new Date()
console.log("current date is ",currentdate);
var currentDate= currentdate.getDate();
console.log("current date is ",currentDate);
var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "satureday"]
var currentday = currentdate.getDay();
console.log("current day is ", days[currentday]);
var months= ["january", "februry", "march", "april", "may","june", "july", "august", "september", "octuber", "november", "december"]
var currentmonth = currentdate.getMonth();
console.log("current month is ", months[currentmonth]);
var currentYear = currentdate.getFullYear()
console.log("current year is ",currentYear);


var currentTime = currentdate.getTime()
console.log("current TIME is ",currentTime);
var currenthours = currentdate.getHours()
console.log("current hours is ",currenthours);
var currentmin = currentdate.getMinutes();
console.log("current min is ",currentmin);
var currentsec = currentdate.getSeconds()
console.log("current Sec is ",currentsec);

