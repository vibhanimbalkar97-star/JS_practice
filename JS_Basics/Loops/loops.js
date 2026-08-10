// print 1-50 numbers
// for (let i=1; i<=50; i++){
//     console.log(i)
// }

// print sum of 1-20 using while
// let sum = 0;
// let i = 1
// while(i<=10){
//     sum = sum + i
//     i++
// }
// console.log(sum)

// print characters of string
//    const printChar= (str) => {
//     for (let i = 0; i < str.length; i++) {
//         console.log(str[i])
//     }
//    } 
// printChar("abc")
// printChar("Javascript")

// using for of = sirf string pe lagta hai
const printChar= (str) => {
    for (let char of str) {
        console.log(char)
    }
   } 
// printChar("abc")
// printChar("Javascript")
// printChar("rrrrrr")


// skips even numbers between 1 and 20
// for (let i=1; i <=20; i++){
//     if (i%2!==0){
//         console.log(i)
//     } 
// }

// do while loop , do condition galat hui tab bhi ek bar chalega, while mein condition likhte hai.
// let n =5
// do {
//     console.log(n)
//     n--
// }
// while(n > 0)

// calculate factorial of 5
// fact = 1;
// for (let i=5; i > 0; i--){
//     fact = fact * i
// }
// console.log(fact)

// write nested loop to print 3 * 3 grid of numbers
for(let i=1; i<=3; i++){
    let output=""
    for(let j=1; j<=3;j++){
     output += `${j} `
    }
    // console.log(output)
}

// star grid
for(let i=1; i<=3; i++){
    let output=" "
    for(let j=1; j<=3;j++){
        output += `* `
    }
    // console.log(output)
}

// Print Row and Column Numbers
for(let i=1; i<=5;i++){
    for(let j=1; j<=5;j++){
        // console.log(`Rows: ${i}, Columns: ${j}`)
    }
}

// Multiplication Table Grid
for(let i=1; i<=3;i++){
    let output=""
    for(let j=1; j<=3;j++){
        output += `${i * j} `
    }
    // console.log(output)
}

// Number Grid
let hold=1
for(let i=1; i<=3;i++){
    let output = ""
    for(let j=1; j<=3; j++){
        output += `${hold} `
        hold++
    }
    // console.log(output)
}

// pyramid pattern
let n=3
let hold1=1
for(let row=3; row>0; row--){
    let output=""
    // spaces
    for(let space=3; space >= n - row; space--){
        output += " "
    }
    // stars
    for(let star=3; star >= 2*row-1; star--){
        output += `${row} `
        // hold1++
    }
    console.log(output)
}