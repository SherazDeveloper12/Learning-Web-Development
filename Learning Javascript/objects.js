var laptop ={
    color : "red",
    price : 55000,
    company : "dell"
}

laptop.color = "green"
console.log("laptop", laptop)
console.log("laptop price", laptop.price)

var keys = Object.keys(laptop)
console.log("keys of laptop object" , keys)

var values = Object.values(laptop)
console.log("values of laptop object" , values)