// // Array.isArray = used to check the value is an array
// console.log(Array.isArray([1,2,3,4,5]))  // true
// console.log(Array.isArray({a:5}))       // false

// /**
//  * creating array methods = 1. array literal(recommended)
//  *                          2.empty array
//  *                          3.array constructor = new Array()
//  *                          4.array.of() = creates one element
//  *                          5.array.from() =create new array from an iterable or array like object.
//  */

// // 1.
// let students = ["a", "b", "c"]

// // 2.
// let s = []
// s[0]  = 10
// s[1]  = 20
// console.log(s)

// // 3.
// let s1 = new Array(10, 20, 30)
// console.log(s1)

// let s2 = new Array(5) 
// console.log(s2)    //creates empty spaces 5 times. [ <5 empty items> ]
// console.log(s2.length)  //5

// // 4.array of()
// let s3 = Array.of(5)
// console.log(s3)   //[5] creates one element with given value

// // 5.
// let s4 = "hello"
// let arr = Array.from(s4)
// console.log(arr) // [ 'h', 'e', 'l', 'l', 'o' ]

/** accessing array                             = index startts from 0,1,2,3....
 * last element access                          = arr.length - 1
 * negative index access from last one, use at  = arr.at(-1)
 * arr.at(0)                                    = 0th index from positive
 * arr[-1]                                      = undefined
 * arr[no index present]                        = undefined
 */
// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// console.log(fruits[3])           //orange
// console.log(fruits[-1])           //undefined
// console.log(fruits.at(-1))           //orange
// console.log(fruits.length - 1)           //3
// console.log(fruits[4])           //undefined

/**
 * updating array element
 * arr[index] = value
 * if index is beyond length, means there is no index present = increases
 *                                                              length and create sparse slots.
 */
// let arr = [10,20,30]
// arr[2]  = 100
// arr[5]  = 300   //beyond length

// console.log(arr)         //[10,20,100,empty x 2, 300] = [ 10, 20, 100, <2 empty items>, 300 ]
// console.log(arr.length)  //6


/**
 * length property = tells us how many elements in an array.
 * change length   = arr.length = value
 * reducing length = gives values upto that length
 * increase length = it creates empty slots.
 * increase and decrease array length changes actual array
 */
// let arr = [1,2,3,4,5]
// arr.length   = 3
// console.log(arr)     //[1,2,3]

// let a = [1,2,3]
// a.length = 8
// console.log(a)      //[1,2,3,<5 empty items>]

/**adding and removing elements
 * push  = add at end    = changes original array =  return length value
 * pop   = remove at end = changes original arr   =  return removed element
 */
// let arr = [1,2,3,4]
// push
// // arr.push(5)
// res = arr.push(5)      
// // console.log(arr)      //[ 1, 2, 3, 4, 5 ]
// console.log(res)         //5 = length

// pop
// arr.pop()
// // console.log(arr)           //[ 1, 2, 3 ]
// res = arr.pop()
// // console.log(res)         // 3

// unshift
// // arr.unshift(10,20,30)         
// // console.log(arr)              //[10, 20, 30, 1,2,  3,  4]
// res = arr.unshift(10)
// // console.log(res)                //5

// shift
// arr.shift()
// console.log(arr)           //[ 2, 3, 4 ]
// res = arr.shift()
// console.log(res)         // 1

/**
 * splice()    =  Add, Remove and Replace Elements
 * syntax      =  array.splice(start, deleteCount, item1, item2, ...);
 * it changes orignal array
 * it return value contains the removed elements, 
 * while original contain remaining values
 * for add             = return []
 * for delete, replace = return delete values
 * for -ve deletion it goes from right to left so give start index always big like -3,1.
 */
// let arr = [10,20,30,40]
// arr.splice(2,0,40)
// console.log(arr)         //[ 10, 20, 40, 30, 40 ]
// res = arr.splice(2,0,40)
// console.log(res)           //[] gives removed element, here not removed anything.

// arr.splice(1,2)
// console.log(arr)         //[ 10, 40 ]
// res = arr.splice(1,2)
// console.log(res)           //[ 20, 30 ]

// arr.splice(1,2,60,80)       
// console.log(arr)         //[ 10, 60, 80, 40 ]
// res = arr.splice(1,2,60,80)
// console.log(res)            //[ 20, 30 ]

// arr.splice(-3,0,80)       
// console.log(arr)         //[ 10, 80, 20, 30, 40 ]
// res = arr.splice(-3,0,80)
// console.log(res)            //[]

// arr.splice(-4,3)        
// console.log(arr)         //[40]
// res = arr.splice(-4,3)
// console.log(res)           //[ 10, 20, 30 ]

// arr.splice(-3,2,60,80)       
// console.log(arr)         //[ 10, 60, 80, 40 ]
// res = arr.splice(-3,2,60,80)
// console.log(res)            //[ 20, 30 ]

/**
 * slice()       = Extract Elements Without Changing Original
 * syntax        = array.slice(start, end);
 * Important     = The end index is excluded.
 * Copy entire array
 * original array not changed.
 * returns the extract values
 * splice = modify, slicee = copy/extract
 */
// let arr = [1,2,3,4,5]
// arr.slice(1,4)
// console.log(arr)         //[ 1, 2, 3, 4, 5 ]
// res = arr.slice(1,4)
// console.log(res)           //[ 2, 3, 4 ]

// let copy = arr.slice()
// console.log(c)               //[ 1, 2, 3, 4, 5 ]

// arr.slice(-1,-3)
// console.log(arr)         //[ 1, 2, 3, 4, 5 ]
// res = arr.slice(-1,-3)
// console.log(res)            //[] -1 > -3, must be -3,-1

// res = arr.slice(-3,-1)
// console.log(res)              //[ 3, 4 ]

/**
 * concat    = combine arrays
 * not modift/changes orginal array
 * size      = 2 different size array can concat.
 * It creates a new combined array without modifying the original arrays.
 * alternate = spread = let result = [...a, ...b];
 */
// let a1 = [10,20,30]
// let b1 =[10,20]
// let c1 =["a", 10, 40, ["b"], {"a":1}]
// a1.concat(b1)                
// console.log(a1,b1)           //[ 10, 20, 30 ] [ 10, 20 ]

// let res = a1.concat(b1)                
// console.log(res, a1, b1)  //[ 10, 20, 30, 10, 20 ] [ 10, 20, 30 ] [ 10, 20 ]

// let res = c1.concat(b1)                
// console.log(res)            // [ 'a', 10, 40, [ 'b' ], 10, 20 ], [ 'a', 10, 40, [ 'b' ], { a: 1 }, 10, 20 ]

/**
 * includes     =  checks if exists
 * syntax       = includes(value, startindex)
 * returns      = boolean = true false
 * case sensitive
 */
// let a1 = [10, 20, 30,"Banana"];
// console.log(a1.includes(10))           //true 
// console.log(a1.includes("10"))         //false = 10 and "10" different
// console.log(a1.includes("banana"))     //false = case sensitive
// console.log(a1.includes("9"))          //false
// console.log(a1.includes())             //false

// console.log(a1.includes(10, 1))             //false

/**
 * indexOf() and lastIndexOf() = first match
 * These methods return the index of an element.
 * if no index present = return -1
 * includes() uses SameValueZero comparison, which can match NaN. indexOf() uses strict equality, and NaN === NaN is false.
 */

// let a1 = [10, 20, 30, 20, NaN];
// console.log(a1.indexOf(20))           //1
// console.log(a1.indexOf(NaN))           //-1
// console.log(a1.includes(NaN))           //true
// console.log(a1.indexOf(40))           //-1
// console.log(a1.lastIndexOf(20))           //3
// console.log(a1.indexOf(30))           //2


/**
 * join      = convert array to string
 * not modify orignal array, gives new array
 */
// let a = ["JavaScript", "Python", "React"];
// let r = a.join()
// console.log(a, r)  //[ 'JavaScript', 'Python', 'React' ] JavaScript,Python,React

// a.join("-")
// console.log(a)       //[ 'JavaScript', 'Python', 'React' ]

/**
 * reverse           =  reverse array elements
 * modify            = original array
 * avoid modify      = make a copy and then reverse, use spread.
 * modern toReversed = create new reversed array
 */

// let a = [10,20,30]
// a.reverse()
// console.log(a)             // [ 30, 20, 10 ]

// let res = a.reverse()
// console.log(a, res)          // [ 30, 20, 10 ] [ 30, 20, 10 ]

// let res = [...a].reverse()
// console.log(a)                //[ 10, 20, 30 ]
// console.log(res)              //[ 30, 20, 10 ]

// let res = a.toReversed()
// console.log(a, res)                 //   [ 10, 20, 30 ] [ 30, 20, 10 ]              

/**
 * sort
 * for string            = arr.sort()
 * for numbers           = by default sort convert elements to string and sort them by UTF-16 code unit order.
 * for numbers ascending =arr.sort((a,b) => a-b)
 * for numbers decending =arr.sort((a,b) => b-a)
 * modify original sort  = yes
 * modern toSorted       = creates new sorted array, not modify original. only for numbers.
 * 
 */
// let fruits = ["Mango", "Apple", "apple","Banana"];
// // let res = fruits.sort()
// // console.log(fruits, res)    //[ 'Apple', 'Banana', 'Mango', 'apple' ]

// let n = [100, 5, 20, 30];
// // let res = n.sort((a,b) => a-b) 
// // console.log(n, res)            // [ 5, 20, 30, 100 ] [ 5, 20, 30, 100 ]

// // let res = n.toSorted((a,b) => a-b) 
// // console.log(n, res)               //[ 100, 5, 20, 30 ] [ 5, 20, 30, 100 ]

// let users = [
//   { name: "Raj", age: 30 },
//   { name: "Priya", age: 22 },
//   { name: "Amit", age: 25 }
// ];
// let res = users.toSorted((a,b) => a.age - b.age)
// console.log(users, res)
// // [  { name: 'Raj', age: 30 },
// //   { name: 'Priya', age: 22 },
// //   { name: 'Amit', age: 25 }
// // ] [
// //   { name: 'Priya', age: 22 },
// //   { name: 'Amit', age: 25 },
// //   { name: 'Raj', age: 30 }
// // ]]

/**
 * loop           = iterating through array, iteration means accessing.
 * for           = for(let i=0; i<arr.length-1;i++)
 * arr.length    = bcz if <= , tried to access one more index and get undefined
 * to print values= arr[i]
 * to index       = i
 * 
 * for-of     = gives the values
 * syntax     = for (let value of arr)
 *  used      = when need values not index
 * 
 * for-in     = used to iterate over enumerable property keys
 * in array  = gives index bcz index are keys
 * syntax    = for(let index in arr)
 * to get values= arr[index] 
 * 
 */

// let a1 = ["Apple", "Banana", "Mango"];
// for(let i=0; i < a1.length; i++){
//     console.log(i, a1[i])
// }

// for(let values of a1){
//     console.log(values)
// }

// for(let [index,values] of a1.entries()){
//     console.log(index,values)
// }

// for(let index in a1){
//     console.log(index, a1[index])
// }

/**
 * forEach() – Execute Function for Each Element
 * syntax    =  array.forEach(callback)
 * e.g       = arr.forEach(function(num){console.log(num)})
 * 
 * arrow     = arr.forEach(num => console.log(num))
 * 
 * get index, value
 * get i, array = arr.forEach((a, index, array)) => {console.log(a, index)}
 * a            = current element, 
 * index        = current index,
 * arr          = original array
 * 
 * updating elements 
 * arr.forEach((num,index,arr) => {
 * arr[index] = num * 2})
 * 
 * modify original array through arr[index]
 * 
 * does not return new array, gives undefined.
 * let res = arr.foreach((num) => num*2)
 * res = undefined, bcz It is used for performing actions, not creating a transformed array.
 * 
 * Can we break forEach()? No, not with break or continue.
 */

// let n = [10, 20, 30];

// n.forEach(num => console.log(num))

// n.forEach((n, i, array) => {
//     console.log(n,i,array)
// })

// update element
// n.forEach((num, i, arr)=>{
//     arr[i] = num * 2
//     console.log(num, i, arr[i])
// })
// console.log(n) //[ 20, 40, 60 ]

/**
 * map    = Transform Every Array Element
 * creates new array = by applying callback function to each element
 * When you use { } in an arrow function, you need an explicit return.      
 * if not use = undefined comes.
 * In React, map() is commonly used to render lists of components.
 * For lists that can be reordered or changed, use a stable unique ID as the key, rather than the array index.
 */

// let n = [1, 2, 3, 4];

// let res = n.map((num) => num * 2 )
// console.log(res)  //[ 2, 4, 6, 8 ]
// console.log(n)    //[ 1, 2, 3, 4 ]

// let res = n.map((num, i) => {
//  return `${num}: ${i}`
// })
// console.log(res)    //[ '1: 0', '2: 1', '3: 2', '4: 3' ]

// map with objects
// let users = [
//   { name: "Raj", age: 25 },
//   { name: "Priya", age: 30 }
// ];
// let res = users.map((user) => {
//     return `${user.name}: ${user.age}`
// })
// console.log(res)    //[ 'Raj: 25', 'Priya: 30' ]

/**
 * filter         = Filter Elements Based on Condition
 * Returns a new array containing only elements that pass the condition.
 * return         = an new array
 * returns        = all matches, true conditions
 * no match found = []
 * Checks every element in the array
 * mutate orignal array = No
*/

// let n = [10, 15, 20, 25, 30];

// let res = n.filter(num => num > 20)
// console.log(res)   // [ 25, 30 ] 
// console.log(n)     //[ 10, 15, 20, 25, 30 ]

// // even numvers
// let res = n.filter(num => num%2===0)
// console.log(res)      //[ 10, 20, 30 ]

// let users = [
//   { name: "Raj", age: 17 },
//   { name: "Priya", age: 25 },
//   { name: "Amit", age: 30 }
// ];

// let res = users.filter(user => user.age >= 20)
// console.log(res)      //[ { name: 'Priya', age: 25 }, { name: 'Amit', age: 30 } ]

/**
 * find    = find the first matching element.
 * return a single element. like = 5
 * if no element found = undefined
 * mutate orignal array = No
 * It checks elements one by one and stops when it finds the first matching element.
 *  does not return a new array. Instead, it returns the value of the first element that passes your test condition, or undefined if nothing matches
 * */
// let n = [10, 20, 30, 40];

// // let res = n.find(num => num > 40)
// // console.log(res)  //undefined

// // let res = n.find(num => num > 30)
// // console.log(res)  //40

// let users = [
//   { id: 1, name: "Raj" },
//   { id: 2, name: "Priya" },
//   { id: 3, name: "Amit" }
// ];

// let res = users.find(user => user.id === 2)
// console.log(res)       //  { id: 2, name: "Priya" },

/**
 * findIndex    = Find Index of First Matching Element
 * return index.
 * if no index found = -1
 * mutate orignal array = No
 * It checks elements one by one and stops when it finds the first matching element.
 *  does not return a new array. Instead, it returns the index of the first element that passes your test condition, or undefined if nothing matches
 * */
// let n = [10, 20, 30, 40];

// // let res = n.findIndex(num => num > 40)
// // console.log(res)      //-1

// let res = n.findIndex(num => num > 30)
// console.log(res)      //3

/**
 * Some    = Check Whether At Least One Element Matches
 * Or like logic
 * Returns true if at least one element passes the condition.
 * if no match = false return.
 * stops on first true
 * */
// let n = [1, 3, 5, 8];
// let res = n.some(num => num > 5)
// console.log(res)       // true

/**
 * every    = Check Whether All Elements Match
 * Returns true only if every element passes the condition.
 * if no match = false return.
 * AND like condition
 * stops on first false.
 * */

// let n = [2,4,6,8]
// let res = n.every(num => num%2===0)
// console.log(res)      //true

// let n = [2,4,6,8,9]
// let res = n.every(num => num%2===0)
// console.log(res)      //false

// let n = []
// console.log(n.some((num) => num > 0 ))      //false
// console.log(n.every((num) => num > 0 ))    //true
// Because there is no element that violates the condition. This is called vacuous truth.

/**
 * reduce    = processes array elements and combines them into a single accumulated result.
 * syntax    = array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue);
 * no new array created, reduce in one result
 * */
// sum of array
// let n = [10, 20, 30, 40];
// let res = n.reduce((acc, curr) => {
//     return acc + curr
// }, 0)
// console.log(res)         //100

// Find maximum number
// let n = [10, 50, 20, 80, -30];
// let max = n.reduce((acc, curr) => {
//     return acc > curr ? acc : curr
// }, 0)
// console.log(max)

// 
// let arr = ["a", "b", "a", "c", "b", "a"];
// let res = arr.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1
//     return acc;
// }, {})
// console.log(res)

/**
 * flat    = Flatten Nested Arrays
 * flat() removes one level of nesting by default.
 * flat() with depth = arr.flat(2) = teo levels
 * arr.flat(Infinity) = all nested levels
 * returns new array
 * 
 * */

// let arr = [1, 2, [3, 4], [5, 6]];
// let res = arr.flat()
// console.log(arr.flat())  //one level of nesting by default = [1,2,3,4,5,6]
// console.log(arr, res)    // [ 1, 2, [ 3, 4 ], [ 5, 6 ] ] [ 1, 2, 3, 4, 5, 6 ]

// let arr = [1, 2, [[3, 4], [5, 6]]];
// // console.log(arr.flat())            // [ 1, 2, [ 3, 4 ], [ 5, 6 ] ]
// console.log(arr.flat(2))            //[ 1, 2, 3, 4, 5, 6 ]

/**
 * fill    = Fill Array with a Specific Value
 * syntax =(value, start, end), end is excluded
 * modify = original array.
 * */



// let arr = [1, 2, 3, 4, 5];
// arr.copyWithin(1,2)
// console.log(arr)  //[1,3,4,5,5]

// let arr = [10, 20, 30];
// let res = arr.toSpliced(2, 1, 200)
// console.log(res)   //[ 10, 20, 200 ]
// console.log(arr)   //[ 10, 20, 30 ]

/**
 * Destructuring = Destructuring means extracting array values into separate variables.
 * skip element = [a, , c] empty position skip second element
 * default values= [a, b=50]
 * rest with destructuring = [a,b,...num], num comes in array[]
 * swapping variables = [a,b] =[b,a]
 */
// let arr = [10, , 30, 40, 50];

// let [b,c,d] = arr
// console.log(b)  //10
// console.log(c)  //20
// console.log(d)  //30

// let[, ,...d] = arr
// console.log(d) // [30,40,50]

// let [a, , b] = arr
// console.log(a,b)// 10, 30

// let [a,b=80] = arr
// console.log(a, b) //10,80

// let a = 10; // if not ; then gives reference error for swapping
// let b = 20;

// [a, b] = [b, a];

// console.log(a); // 20
// console.log(b); // 10


/**
 * spread             = expanding elements of an array.
 * copy array         = [...array] 
 * combine array      = [...a, ...b]
 * add elements while copying = [10,...a, 40]
 * spread            = used when passing or combing values
 * syntax            = [...arr]
 * 
 * rest             = collects the elements into new array
 * used             = in function parameter, destructing
 * syntax           =[first, ...remaining]
 */
// copy array
// let a = [10, 20, 30];
// // let b = [...a]
// // let c = [50,60]
// // console.log(b,a)   //[ 10, 20, 30 ] [ 10, 20, 30 ]

// // // combine arrays
// // let res = [...a, ...c]
// // console.log(res)    //[ 10, 20, 30, 50, 60 ]

// //Add elements while copying
// let r = [10, ...a, 40]
// console.log(r, a)    //[ 10, 10, 20, 30, 40 ] [ 10, 20, 30 ]

/**
 * reference          = b = a , reference to a, if change in b also change in a.
 * why?               = b = a does not create new array. both variables refers to same object.
 * 
 * shallow copy       = use spread, so here new array create.
 * change             = if change in a does not change in b.
 * problem            = with nested object
 * why?               = spread makes a shallow copy: outer array is copied, but nested object still shared references.
 * 
 * Deep copy          = Deep copy creates independent copies of nested objects too.
 * structuredClone()  = supports many built-in types, including arrays, objects, Maps and Sets, but not every JavaScript value (for example, functions).
 */

// reference 
// let a = [1,2,3,4]
// let b = a
// b[0]  = 100

// console.log(a,b) //[ 100, 2, 3, 4 ] [ 100, 2, 3, 4 ]

// shallow copy
// let b = [...a]
// b[1]  = 200
// console.log(a, b) //[ 1, 2, 3, 4 ] [ 1, 200, 3, 4 ]

// const stud = [
//   {name: "Raj"},
//   {name: "Karan"}
// ]
// console.log(stud)  //[ { name: 'Raj' }, { name: 'Karan' } ]

// let   b = [...stud]
// b[0].name = "AAAA" 
// console.log(b, stud) // [ { name: 'AAAA' }, { name: 'Karan' } ] [ { name: 'AAAA' }, { name: 'Karan' } ]

// deep copy
// let a1 = [1,2,3,4,5]
// let b1 = structuredClone(a1)
// b1[0]  = 100
// console.log(a1, b1) //[ 1, 2, 3, 4, 5 ] [ 100, 2, 3, 4, 5 ]

// const stud = [
//   {name: "Raj"},
//   {name: "Karan"}
// ]

// let b1     = structuredClone(stud)
// b1[0].name = "AAAA"
// console.log(b1, stud)  // [ { name: 'AAAA' }, { name: 'Karan' } ] [ { name: 'Raj' }, { name: 'Karan' } ]

/**
 * nested array accessing elements  
 * arr[0]    = [10, 20]
 * arr[0][1] = 20
 * 
 * nested loops
 * for(let i =0; i< arr.length; i++){
 * for(let j =0; j< arr[i].length; j++){
 * console.log(arr[i][j])
 * }}
 * Why two loops?
- Outer loop accesses each inner array.
- Inner loop accesses each value inside that inner array.
 */

// let arr = [
//   [10, 20],
//   [30, 40]
// ];
// console.log(arr[1])   //[30,40]
// console.log(arr[1][1])//40

// for (let i=0; i < arr.length; i++){
//   // console.log(i)  //gives index 0 1
//   // console.log(arr[i])  //[ 10, 20 ]
//                         // [ 30, 40 ]
  
// }

// for (let i=0; i < arr.length; i++){
//  for (let j =0; j < arr[i].length; j++){
//   console.log(arr[i][j])
//  }
  
// }

