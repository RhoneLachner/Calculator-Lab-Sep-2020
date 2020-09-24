// import functions and grab DOM elements

const NumberOne = document.getElementById('numOne');
const NumberTwo = document.getElementById('numTwo');
const addButton = document.getElementById('add-Button');
const outputDisplay = document.getElementById('output')
// initialize state

addButton.addEventListener('click', () => {

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
  
});


//FOR LATER:
/* 
const subtractButton = document.getElementById('subtract-Button');
const multiplyButton = document.getElementById('multiply-Button');
const divideButton = document.getElementById('divide-Button');
*/


/* 
   console.log(typeof value1AsNumber, typeof value2AsNumber);
    //     - Add them together
    const sum = value1AsNumber + value2AsNumber;
    //         - log out the sum
    console.log(sum);
    // - "Output the result" - show the answer to the user
    //     - change the textContent property of the results section
    addResults.textContent = sum;
*/





// set event listeners to update state and DOM
