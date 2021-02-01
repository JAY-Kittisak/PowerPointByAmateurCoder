//Dynamic type vs Static type

import { number } from "yargs"

// 1. string --> 'hello', "5" , `true`
// 2. number --> 10, 8.75
// 3. boolean --> true / false
let num = 10 

let str: string 
str = "10" 

const sum = (a: number,b: number) => {
    return a+b   
}

const total = sum(5, 10)
console.log(total)