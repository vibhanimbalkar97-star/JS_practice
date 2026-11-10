// let name  = "ABC"                       //letter
// let name1 = "123"                       //number
// let name2 = "@#$"                       //symbol
// let name3 = "Hello abc"                 //spaces
// let name4 = ""                          //empty

// // 3 ways to create strings
// // 1.single quote
// let a   =  'hee'

// //  2.double quote
// let b   =  "hee"

// // 3. backticks = template literals
// let c   = `hee`

// // 4.different quotes
// let d  = "It's hello"
// console.log(d)

// // 5. if inner and outer has same quotes then use escape character - \
// let e  =  'It\'s hello'
// console.log(e)

// // string indexing = starts from 0 and negative indexing work with at() not with ordinary bracket indexing [].
// let greet = "hello"
// console.log(greet[0])           //h
// console.log(greet.at(-1))       //o
// console.log(greet[10])          //undefined = no index 

// // string length = starts with 1, -v with = -1, use at()
// let greet1 = " hello "
// console.log(greet1.length)     //7 - spaces around count
// console.log(greet1.at(-1))     // gives empty space in console blank space = nothing
// console.log(greet1.length - 1) // 6
// console.log(greet1[0])         // gives empty space in console blank space

// // strings immutable
// let text = "hello"
// text[0]  = "y"
// console.log(text)                 //hello

// // way to create new string don't modify the current.
// let text1 = "hello"

// text1 = " Y" + text1.slice(1)
// console.log(text1)             // Yello

// // string concatenation
// // 1. using +
// let a1 = "hello"
// let b1 = "world"
// console.log(a1+b1)              //helloworld
// console.log(" "+ a1+" "+b1)     // hello world

// // 2.using +=
// let a2 = "hello"

// a2 += " world"
// console.log(a2)             //hello world

// // 3.concat()
// let b2 = "hello"
// let b3 = "world"
// console.log(b3.concat(b2))  //worldhello
// console.log(b3.concat(" ",b2))  //world hello

// // template literals - they support the below ones
// // 1. variable interpolation = the process of embedding variables or expressions directly inside a string literal, allowing their values to be dynamically evaluated and injected at runtime.
// let name5 = "ABC"
// let age   = 25
// console.log(`My name is ${name5} and age is ${age}`)

// console.log("Hello ${name}")  // hello ${name}

// // 2. expressions
// let a3 = 10
// let a4 = 5
// console.log(`res: ${a3+a4}`)

// // 3.multiline string
// let greet2 = `hello
// world`
// console.log(greet2)

// // Escape characters 
// let t = "hello\tworld"     //hello world
// console.log(t)

// let t1 = "hello\nworld"  //hello
// console.log(t1)          //world

// let t2 = 'It\'s ok'     //It's ok
// console.log(t2)

// let t3 = "he said \"hi\""     //he said "hi"
// console.log(t3)

// let t4 = 'c:\\users'     //c:\users
// console.log(t4)

// // Unlike a newline character (\n), which moves the cursor down to the next line, \r simply instructs the text cursor to go back to the very start of the same line
// let t5 = 'It"\r" ok'     //" ok
// console.log(t5)

// let t6 = 'It\b ok'     //I ok
// console.log(t6)

// string methods

let text = "Helloe"

// 1.case conversion
// console.log(text.toUpperCase())          //HELLO
// console.log(text.toLowerCase())          //hello
// console.log("hello" == "Hello")          //false
// console.log("hello" === "Hello")         //false
// console.log(text.toLowerCase() == text.toLowerCase())  //true
// console.log(text.toLowerCase() === text.toLowerCase()) //true

// // 2. removing spaces = trim(), the middle space not removed, start and end spaces removed
// let te1 = " hello all   "
// console.log(te1.trim())               //hello all
// console.log(te1.trimStart())          //hello all 
// console.log(te1.trimEnd())            // hello all
// console.log(te1.length)               // count spaces also = 13
// console.log(te1.trim().length)        // count spaces also = 9


// // 3.search methods
// // indexOf = first matching value = number
// console.log(text.indexOf("l"))       //2
// console.log(text.lastIndexOf("e"))   //5
// console.log(text.indexOf("r"))       //-1 if not present
// console.log(text.lastIndexOf("r"))   //-1 if not present
// console.log(text.indexOf("e", 2))    //5
// console.log(text.lastIndexOf("l", 2))//2

// includes = check if present = boolean 
// console.log(text.includes("a"))      //false
// console.log(text.includes("e"))      //true
// console.log(text.includes("e", 5))   //true , 2 argument where to start searching
// console.log(text.includes("h", 2))   //false

// startsWith = check beginning = boolean
// console.log(text.startsWith("h"))     //false = case-sensitive
// console.log(text.startsWith("H"))     //true
// console.log(text.startsWith("l",2 ))  //true

// endsWith = check the ending = boolean
// console.log(text.endsWith("e"))         //true
// console.log(text.endsWith("e",5))      //false, for every index value, this not correct to check  

// search = find match using regex = index or -1
// let te2 = "hello123"
// console.log(te2.search())                //0 = not given anything
// console.log(te2.search(5))               //-1 = if not present
// console.log(te2.search(/[0-9]/))         //5

// extracting part
// slice = (start,end) "Helloe" = end is excluded
// console.log(text.slice(1,4))            //ell
// console.log(text.slice(4, 1))           // nothing print in console
// console.log(text.slice(4))              //oe
// console.log(text.slice(-4))             //lloe
// console.log(text.slice(-4, -5))         // nothing print
// console.log(text.slice(-5, -3))         //el

// substring = (start, end) = end is excluded
// console.log(text.substring(1,4))            //ell
// console.log(text.substring(4, 1))           // ell = swap the places
// console.log(text.substring(4))              //oe
// console.log(text.substring(-1))             //Helloe = convert to 0
// console.log(text.substring(6))              //for no index values, nothing print in console.
// console.log(text.substring(-5, -3))         // nothing print = empty string

// replacing text
// replace = first occurance replace
//  console.log(text.replace("e", "a"))         // halloe

// replaceAll = all the text
// console.log(text.replaceAll("e", "a"))         //Halloa

// split = converts string into an array
// let te5 = "Hello-world, python, js,react"
// console.log(te5.split(" "))               //[ 'Hello-world' ]
// console.log(te5.split(""))                //[
//                                             //   'H', 'e', 'l', 'l',
//                                             //   'o', ' ', 'w', 'o',
//                                             //   'r', 'l', 'd'
//                                             // ]
// console.log(te5.split("-"))
// console.log(te5.split(","))
// console.log(te5.split())

// join = join array elements into string
// let arr = ['hello', 'world']
// console.log(arr.join(""))                  //helloworld
// console.log(arr.join(" "))                  //hello world
// console.log(arr.join(","))                  //hello,world

// padding = adds character to start and end until it reaches to specified length
// let n = "5he"
// console.log(n.padStart(4, "0"))                  //05he
// console.log(n.padStart(3, "0"))                  //5he
// console.log(n.padEnd(5,"0"))                  //5he if no value given then empty space comes

// repeat = repeating string
let s = "Hi"
// console.log(s.repeat(3))                  //HiHiHi
// console.log(s.repeat(0))                  //"", empty string=nothing print in console
// console.log(s.repeat(-1))                  //range error
// console.log(s.repeat(1))                  //Hi

// character methods
// charAt = returns character at a given index
// console.log(s.charAt(1))                 //i
// console.log(s.charAt(9))                  //""
// console.log(s.charAt(-1))                  //""

// other methods
// string = convert to string
let num = 5
console.log(String(num))                  //"5"
console.log(String("2"))                  //"2"
console.log(String(null))                  //"null"
console.log(String(undefined))                  //"undefined"

// tostring = for null and undefined provide type error
console.log(numtoString())                  //"5"
