// This is a function code along
// Section below was writen by SCP while following the 10/26 2.2 class

//Not sure to understand this function

//Getting expected result when running (in the terminal) command
// npx ts-node 2.2/functionPractice

function addTwo(input: number): number { // input = number , output = number
    console.log(input)
    return input + 2
}

let firstNumber = 3;
let secondNumber = addTwo(firstNumber) // is equal the the output value of function addTwo | If firstNumber = 3, this would =5
let thirdNumber = addTwo(50) // is equal to the value of 50 + 2, which equals 52

console.log(firstNumber, secondNumber)
console.log(`First Number: ${firstNumber}, Second Number: ${secondNumber}`)
console.log(thirdNumber)