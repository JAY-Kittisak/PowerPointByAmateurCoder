//Dynamic type vs Static type

// 1. string --> 'hello', "5" , `true`
// 2. number --> 10, 8.75
// 3. boolean --> true / false

let str = 'hello'
console.log('str',typeof str)
str = 10 
console.log('str',typeof str)
str = true
console.log('str',typeof str)

const sum = (a,b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a+b    
    } 

        throw Error('Invalid inputs.')

}

const total = sum('5', 10)
console.log(total)