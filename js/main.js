// testing JS wiring
// console.log('wired');
let numbers = document.querySelectorAll('.num');

// functions for four basic numberical operations
let addition = (operandOne, operandTwo) => operandOne + operandTwo;
let subtraction = (operandOne, operandTwo) => operandOne - operandTwo;
let multiplication = (operandOne, operandTwo) => operandOne * operandTwo;
let division = (operandOne, operandTwo) => operandOne / operandTwo;

// the operate function
let operate = (operator, operandOne, operandTwo) => {
        // console.log(operator,typeof(operator))
        if (operator === '+') {
                return addition(operandOne, operandTwo);
        } else if (operator === '-') {
                return subtraction(operandOne, operandTwo);
        } else if (operator === '*') {
                return multiplication(operandOne, operandTwo);
        } else if (operator === '/') {
                return division(operandOne, operandTwo);
        }else{
                console.log('no more operators')
        }
}