// let students = {
//     school:"friends public school",
//     fee: 4000,
//     class:5,
// }
// let subject = {
// a:"engish",
// b:"Math",
// c:"urdu",
// }
// console.log(students.fee)
// console.log(subject)
// subject.__proto__=students       /* here __proto__ is used to protype one object from other object*/
// console.log(subject.fee)         /*here we call fee function from prototype of object.*/


class students {                            /*classes are created to create multiple objects */
    constructor(name) {                     /*constructor will run in every suation when the class is run*/
        this.name = name                    /*this could also be used as student.name, it is used to give attribute value*/
        console.log("object is created...")
    }
    fee(){                                  /*these functions will be available in prototype of objects*/
        console.log("fee is ",4000)
    }
    school (){
        console.log("friends public school")
    }
}
let a = new students("sheraz")              /*created an object from class*/

console.log(a)
console.log(a.school())


class classtwo extends students{        /* by uisng extend we get the other class prototypes fn in our object prototypes fn */
    
  
    constructor(name) {
          super(name)               /*super will call parent construction and argument in it will pass the argument to parent class argument*/
          console.log("class object is created")
    }
    class(){
        console.log("class two")
    }
    subjects(){
        console.log("maths, englisj, urdu etc")
    }
    fee(){              /* here we override the fee function by method overriding*/
        super.fee()     /* we just call the super class function here by using super  */
        console.log("class two fee is only",2000)
    }
}

let b = new classtwo("shah")
console.log(b)
console.log(b.fee())