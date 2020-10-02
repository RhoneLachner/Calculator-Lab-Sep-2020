

//ADD FUNCTION
const NumberOne = document.getElementById('numOne');
const NumberTwo = document.getElementById('numTwo');
const outputDisplay = document.getElementById('output');

export function addFunction() {
    const valueOne = NumberOne.value;
    const valueTwo = NumberTwo.value;

    console.log(valueOne, valueTwo);

    const valueOneNumber = Number(valueOne);
    const valueTwoNumber = Number(valueTwo);

    console.log(typeof valueOneNumber, typeof valueTwoNumber);

    const sum = valueOneNumber + valueTwoNumber;
    //         - log out the sum
    console.log(sum);

    outputDisplay.textContent = sum;
}

//SUBTRACT FUNCTION
const NumberOneSubtract = document.getElementById('numOneSubtract');
const NumberTwoSubtract = document.getElementById('numTwoSubtract');
const outputDisplaySubtract = document.getElementById('outputSubtract');

export function subtractFunction() {
    const valueOneSubtract = NumberOneSubtract.value;
    const valueTwoSubtract = NumberTwoSubtract.value;

    console.log(valueOneSubtract, valueTwoSubtract);

    const valueOneNumberSubtract = Number(valueOneSubtract);
    const valueTwoNumberSubtract = Number(valueTwoSubtract);

    console.log(typeof valueOneNumberSubtract, typeof valueTwoNumberSubtract);

    const sum = valueOneNumberSubtract - valueTwoNumberSubtract;
    //         - log out the sum
    console.log(sum);

    outputDisplaySubtract.textContent = sum;
}

//MULTIPLY FUNCTION
const NumberOneMultiply = document.getElementById('numOneMultiply');
const NumberTwoMultiply = document.getElementById('numTwoMultiply');
const outputDisplayMultiply = document.getElementById('outputMultiply');

export function multiplyFunction() {
    const valueOneMultiply = NumberOneMultiply.value;
    const valueTwoMultiply = NumberTwoMultiply.value;

    console.log(valueOneMultiply, valueTwoMultiply);

    const valueOneNumberMultiply = Number(valueOneMultiply);
    const valueTwoNumberMultiply = Number(valueTwoMultiply);

    console.log(typeof valueOneNumberMultiply, typeof valueTwoNumberMultiply);

    const sum = valueOneNumberMultiply * valueTwoNumberMultiply;
    //         - log out the sum
    console.log(sum);

    outputDisplayMultiply.textContent = sum;
}

//DIVIDE FUNCTION
const NumberOneDivide = document.getElementById('numOneDivide');
const NumberTwoDivide = document.getElementById('numTwoDivide');
const outputDisplayDivide = document.getElementById('outputDivide');

export function divideFunction() {
    const valueOneDivide = NumberOneDivide.value;
    const valueTwoDivide = NumberTwoDivide.value;

    console.log(valueOneDivide, valueTwoDivide);

    const valueOneNumberDivide = Number(valueOneDivide);
    const valueTwoNumberDivide = Number(valueTwoDivide);

    console.log(typeof valueOneNumberDivide, typeof valueTwoNumberDivide);

    const sum = valueOneNumberDivide / valueTwoNumberDivide;
    //         - log out the sum
    console.log(sum);

    outputDisplayDivide.textContent = sum;
}
