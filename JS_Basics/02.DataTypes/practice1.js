let value = 5
value = "abc"
console.log(value) //abc

// primitive data types = 7
console.log(typeof("Hello"))       //string
console.log(typeof(5))             //number
console.log(typeof(true))          //boolean
console.log(typeof(1234n))         //bigint
console.log(typeof(undefined))     //undefined
console.log(typeof(null))          //object
console.log(typeof(Symbol("id")))  //symbol

// non-primitive = objects includes arrays and functions
console.log(typeof(function(){}))   //function

// primitive   = copy the value, so change in b value does not affect a.
let a = "Hello"
let b = a
    b = "ABC"
console.log(a,b)          //Hello ABC

// Non-primitive = copy the reference, hence if change value b then a also changed.
const user1 = {
    name:"karan"
}
const user2 = user1
user2.name  = "karan2"

console.log(user1.name, user2.name) //karan2, karan2

console.log(typeof null === "object") //true

// Implicit conversion = also known as type coercison. JS converts value type automatically
console.log("5" + "Hello") // 5Hello
console.log("5" -2)        //3

// Explicit conversion = developers can manually concert the value types using function such as String(), Number(), Boolean()
console.log(String("5"))
console.log(typeof("5"))

console.log(Boolean('false'), Boolean(''), Boolean(0)); 
// true false false non-empty string is truthy value, empty string falsey valye, 0 is false




