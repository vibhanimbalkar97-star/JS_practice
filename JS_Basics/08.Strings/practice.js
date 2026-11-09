let name  = "ABC"                       //letter
let name1 = "123"                       //number
let name2 = "@#$"                       //symbol
let name3 = "Hello abc"                 //spaces
let name4 = ""                          //empty

// 3 ways to create strings
// 1.single quote
let a   =  'hee'

//  2.double quote
let b   =  "hee"

// 3. backticks = template literals
let c   = `hee`

// 4.different quotes
let d  = "It's hello"
console.log(d)

// 5. if inner and outer has same quotes then use escape character - \
let e  =  'It\'s hello'
console.log(e)

// string indexing = starts from 0 and negative indexing work with at() not with ordinary bracket indexing [].
let greet = "hello"
console.log(greet[0])           //h
console.log(greet.at(-1))       //o
console.log(greet[10])          //undefined = no index 

// string length = starts with 1, -v with = -1, use at()
let greet1 = " hello "
console.log(greet1.length)     //7 - spaces around count
console.log(greet1.at(-1))     // gives empty space in console blank space = nothing
console.log(greet1.length - 1) // 6
console.log(greet1[0])         // gives empty space in console blank space

// strings immutable
let text = "hello"
text[0]  = "y"
console.log(text)                 //hello

// way to create new string don't modify the current.
let text1 = "hello"

text1 = " Y" + text1.slice(1)
console.log(text1)             // Yello

// string concatenation
// 1. using +
let a1 = "hello"
let b1 = "world"
console.log(a1+b1)              //helloworld
console.log(" "+ a1+" "+b1)     // hello world

// 2.using +=
let a2 = "hello"

a2 += " world"
console.log(a2)             //hello world

// 3.concat()
let b2 = "hello"
let b3 = "world"
console.log(b3.concat(b2))  //worldhello
console.log(b3.concat(" ",b2))  //world hello





// 1. variable interpolation = the process of embedding variables or expressions directly inside a string literal, allowing their values to be dynamically evaluated and injected at runtime.