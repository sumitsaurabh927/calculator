// testing JS wiring
// console.log('wired');
let numbers = document.querySelectorAll('.num');
let zero = numbers[0];
let one = numbers[1];
let two = numbers[2];
let three = numbers[3];
let four = numbers[4];
let five = numbers[5];
let six = numbers[6];
let seven = numbers[7];
let eight = numbers[8];
let nine = numbers[9];

let screen = document.querySelector('.input');

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
        } else {
                console.log('no more operators')
        }
}

// populating screen on button press
let inputValue = screen.innerText;
const populator = (clickVal) => {
        let clicked = clickVal.innerText;
        inputValue = inputValue + clicked;
        // console.log(inputValue);
        screen.innerText = inputValue;
}

one.addEventListener('click', () => populator(one));
two.addEventListener('click', () => populator(two));
three.addEventListener('click', () => populator(three));
four.addEventListener('click', () => populator(four));
five.addEventListener('click', () => populator(five));
six.addEventListener('click', () => populator(six));
seven.addEventListener('click', () => populator(seven));
eight.addEventListener('click', () => populator(eight));
nine.addEventListener('click', () => populator(nine));



