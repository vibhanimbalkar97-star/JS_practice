// reverse string
// let str = "hello"
// console.log(str.split("").reverse().join(""))

// count vowels
// let str = "JavaScript"

// let count = 0
// for (let char of str.toLowerCase()){
//     console.log(char)
//     if("aeiou".includes(char)){
//         count+=1
//     }
// }
// console.log(count)

// pallindrome
// let str = "hello";

// let res = str.split("").reverse().join("")

// if(str === res){
//     console.log("true")
// } else {
//     console.log("false")
// }

/**
 * Interview trick: जब भी question में ये words आएँ, ध्यान दो:
- Count each character → Frequency object
- Count vowels → Counter + if
- Find duplicate characters → Frequency + condition
- First non-repeating character → Frequency + loop
 */
// count character
// let str = "banana"

// let res = {}

// for(let char of str){
//     if(res[char]){
//         res[char]++
//     } else {
//         res[char] = 1
//     }
// }
// console.log(res)

