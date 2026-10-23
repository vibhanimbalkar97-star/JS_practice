// console.log("" && 5)      // nothing print
// console.log("Hello" && 5) //  5
// console.log(0 && 5)       //  0
// console.log(-0 && 5)      //  -0
// // NOTE - for && if left value is falsy then it stops execution


// console.log("" || 5)      // 5
// console.log("Hello" || 5) //  Hello
// console.log(0 || 5)       //  5
// console.log(-0 || 5)      //  5
// // NOTE - for || if left value is truthy then it stops execution

// console.log("" ?? 5)      // nothing print
// console.log("Hello" ?? 5) //  Hello
// console.log(0 ?? 5)       //  0
// console.log(-0 ?? 5)      //  -0
// console.log(null ?? 5)    //  5
// console.log(undefined ?? 5)//  5
// // NOTE - for ?? if left value is null or undefined then use right side value

// let age = 0;

// console.log(age || 18); //18
// console.log(age ?? 18) //0

// ++x = pre-increment, increases first then return updated value
let a = 8
console.log(++a) //9
console.log(a)   //9

//x++ = post increment, returns old value first then increase the variable
let b = 9
console.log(b++)  //9
console.log(b)    //10

console.log(2+3*5)        //17
console.log((2+3)*5)      //25
console.log(2 ** 2 ** 2) // 16 = (2 ** (2 ** 2))

// spread = expand an iterable or objects properties, used in obkects and array.
const num = [1,2]
const num1 =[...num, 4,5,6]
console.log(num)                //[1,2]
console.log(num1)               //[1,2,3,4,5,6]

// rest = collect the remaining value into an array or object.
function add(first, ...others) {
  console.log(first);
  console.log(others);
}

add(10, 20, 30, 40);

const nums = [1, 2]; console.log([...nums, 3]);