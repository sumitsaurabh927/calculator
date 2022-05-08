// testing JS wiring
// console.log('wired');
let numbers = document.querySelectorAll(".num");
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
let dot = numbers[10];
let screen = document.querySelector(".input");
let add = document.querySelector(".add");
let subtract = document.querySelector(".subtract");
let multiply = document.querySelector(".multiply");
let divide = document.querySelector(".divide");
let equalTo = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let del = document.querySelector(".delete");

// functions for four basic numberical operations
let addition = (operandOne, operandTwo) =>
        Number(operandOne) + Number(operandTwo);
let subtraction = (operandOne, operandTwo) =>
        Number(operandOne) - Number(operandTwo);
let multiplication = (operandOne, operandTwo) =>
        Number(operandOne) * Number(operandTwo);
let division = (operandOne, operandTwo) =>
        Number(operandOne) / Number(operandTwo);

// the operate function
let operate = (operator, operandOne, operandTwo) => {
        // console.log(operator,typeof(operator))
        if (operator === "+") {
                return addition(operandOne, operandTwo);
        } else if (operator === "-") {
                return subtraction(operandOne, operandTwo);
        } else if (operator === "*") {
                return multiplication(operandOne, operandTwo);
        } else if (operator === "/") {
                return division(operandOne, operandTwo);
        } else {
                console.log("no more operators");
        }
};

// populating screen on button press
let inputValue = screen.innerText;
const populator = (clickVal) => {
        let clicked = clickVal.innerText;
        inputValue = `${inputValue}${clicked}`;
        // console.log(clickVal);
        screen.innerText = inputValue;
};

// clear button behaviour
clear.addEventListener("click", () => {
        screen.innerText = "";
        inputValue = "";
});

// backspace button behaviour
del.addEventListener("click", () => {
        let stringToUpdate = screen.innerText.toString();
        let updatedString = stringToUpdate.slice(0, -1);
        screen.innerText = `${updatedString} `;
        inputValue = updatedString;
        // console.log(stringToUpdate, updatedString)
});

// running pupulator functin on button press
zero.addEventListener("click", () => populator(zero));
one.addEventListener("click", () => populator(one));
two.addEventListener("click", () => populator(two));
three.addEventListener("click", () => populator(three));
four.addEventListener("click", () => populator(four));
five.addEventListener("click", () => populator(five));
six.addEventListener("click", () => populator(six));
seven.addEventListener("click", () => populator(seven));
eight.addEventListener("click", () => populator(eight));
nine.addEventListener("click", () => populator(nine));
dot.addEventListener("click", () => populator(dot));

// what happens on pressing any of the four mathematical operator's button on calculator
add.addEventListener("click", () => {
        inputValue = `${inputValue} ${add.innerText} `;
        screen.innerText = `${inputValue}`;

        // giving control to newly minted function called 'severaloperatorscheck'
        severalOperatorsCheck(inputValue);
});
subtract.addEventListener("click", () => {
        inputValue = `${inputValue} ${subtract.innerText} `;
        screen.innerText = `${inputValue}`;

        // giving control to newly minted function called several operators check
        severalOperatorsCheck(inputValue);
});
multiply.addEventListener("click", () => {
        inputValue = `${inputValue} ${multiply.innerText} `;
        screen.innerText = `${inputValue}`;

        // giving control to newly minted function called several operators check
        severalOperatorsCheck(inputValue);
});
divide.addEventListener("click", () => {
        inputValue = `${inputValue} ${divide.innerText} `;
        screen.innerText = `${inputValue}`;

        // giving control to newly minted function called several operators check
        severalOperatorsCheck(inputValue);
});

// what happens on pressing =
equalTo.addEventListener("click", () => {
        // handling multiple =
        // console.log(screen.innerText.split('').findIndex("="))

        // severalOperatorsCheck(screen.innerText);

        let screenString = screen.innerText.split(" ");
        let firstOperand = screenString[0];
        let secondOperand = screenString[2];
        let operator = screenString[1];

        let result = operate(operator, firstOperand, secondOperand);
        screen.innerText = `${result}`;
});

// code to check if there's a second operator and it there is, perform the first operation on first two operands and then on the next.
// This is supposed to run on every click of +,-,*,/
let plusCounter = 0,
        minusCounter = 0,
        multiplyCounter = 0,
        divideCounter = 0,
        // temp = [],
        operandA = 0,
        operandB = 0,
        opCount = 0,
        sign = 0;

const severalOperatorsCheck = (inputString) => {
        // split input into individual digits
        let inputStringArray = inputString.split("");

        //       using counters if there's a second operator, finish the first operator on the operands and then proceed
        for (let i = 0; i < inputStringArray.length; i++) {
                // console.log('loop running')
                //  console.log(inputStringArray)
                if (inputStringArray[i] === "+") {
                        plusCounter += 1;
                        opCount += 1;
                        // dry run of function for +
                        // what happens when there are more than one plus
                        if (plusCounter > 1 && opCount > 1) {
                                // console.log(`**${inputString}**`)
                                // console.log(inputString.split(' '))
                                operandA = Number(inputString.split(" ")[0]);
                                operandB = Number(inputString.split(" ")[2]);
                                sign = inputString.split(" ")[3];
                                // console.log('sign is: ', sign);
                                // console.log(operandA, operandB);

                                // let result = operate('+', operandA, operandB);

                                let result = Number(operandA) + Number(operandB);
                                inputValue = `${result} ${sign} `;
                                screen.innerText = inputValue;
                                // console.log(`---${inputValue}---`);

                                // resetting stuff
                                plusCounter = 0;
                                // opCount = 0;
                                // inputString = inputValue;
                                // temp = []
                                // console.log(plusCounter);
                        }
                } else if (inputStringArray[i] === "-") {
                        // copied from line #146 (the 'plus' section of if-else and modified to work with this operator)
                        minusCounter += 1;
                        opCount += 1;

                        // dry run of function for -
                        // what happens when there are more than one minus
                        if (minusCounter > 1 && opCount > 1) {
                                // console.log(`**${inputString}**`)
                                // console.log(inputString.split(' '))
                                operandA = Number(inputString.split(" ")[0]);
                                operandB = Number(inputString.split(" ")[2]);
                                sign = inputString.split(" ")[3];
                                // console.log(sign)
                                // console.log(operandA, operandB);

                                // let result = operate('+', operandA, operandB);

                                let result = Number(operandA) - Number(operandB);
                                inputValue = `${result} ${sign} `;
                                screen.innerText = inputValue;
                                // console.log(`---${inputValue}---`);

                                // resetting stuff
                                minusCounter = 0;
                        }
                } else if (inputStringArray[i] === "*") {
                        // copied from line #146 (the 'plus' section of if-else and modified to work with this operator)
                        multiplyCounter += 1;
                        opCount += 1;

                        // dry run of function for *
                        // what happens when there are more than one multiply
                        if (multiplyCounter > 1 && opCount > 1) {
                                // console.log(`**${inputString}**`)
                                // console.log(inputString.split(' '))
                                operandA = Number(inputString.split(" ")[0]);
                                operandB = Number(inputString.split(" ")[2]);
                                sign = inputString.split(" ")[3];
                                // console.log(sign)
                                // console.log(operandA, operandB);

                                // let result = operate('+', operandA, operandB);

                                let result = Number(operandA) * Number(operandB);
                                inputValue = `${result} ${sign} `;
                                screen.innerText = inputValue;
                                // console.log(`---${inputValue}---`);

                                // resetting stuff
                                multiplyCounter = 0;
                                // opCount = 0;
                                // inputString = inputValue;
                                // temp = []
                                // console.log(plusCounter);
                        }
                } else if (inputStringArray[i] === "/") {
                        // copied from line #146 (the 'plus' section of if-else and modified to work with this operator)
                        divideCounter += 1;
                        opCount += 1;

                        // dry run of function for /
                        // what happens when there are more than one divide
                        if (divideCounter > 1 && opCount > 1) {
                                // console.log(`**${inputString}**`)
                                // console.log(inputString.split(' '))
                                operandA = Number(inputString.split(" ")[0]);
                                operandB = Number(inputString.split(" ")[2]);
                                sign = inputString.split(" ")[3];
                                // console.log(sign)
                                // console.log(operandA, operandB);

                                // let result = operate('+', operandA, operandB);

                                let result = Number(operandA) / Number(operandB);
                                inputValue = `${result} ${sign} `;
                                screen.innerText = inputValue;
                                // console.log(`---${inputValue}---`);

                                // resetting stuff
                                divideCounter = 0;
                        }
                } else {
                        // window.alert("You messed up! Please refresh and start again");
                }
        }
};
