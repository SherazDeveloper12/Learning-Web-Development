var names = ["ali", "khan", "baloch", "sameer", "king", "wasif","najeeb"]
console.log("names are", names);
names.push("kashif");
console.log("names after push method are", names)
names.pop();
names.pop();
console.log("names after pop method are", names)
names.unshift("sab sy phela name mera")
console.log(console.log("names after unshift method are", names))
names.shift()
names.shift()
console.log(console.log("names after shift method are", names))
names.splice(1,3,"jawaid","haideri","given ton murshid");
console.log(console.log("names after splice method are", names))
var newnames = names.slice(2,4,"silice")
console.log ("newnames", newnames);