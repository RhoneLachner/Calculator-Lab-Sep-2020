

// IMPORT MODULES under test here:
import { addFunction } from './math-utils.js';
import { subtractFunction } from './math-utils.js';
import { multiplyFunction } from './math-utils.js'; 
import { divideFunction } from './math-utils.js';

// import { example } from '../example.js';
const test = QUnit.test;

//ADD TEST
test('If I add two and three it will return 5', (expect) => {
    const addingInput1 = 2;
    const addingInput2 = 3;
    const expected = 5;
  
    const actual = addFunction(addingInput1, addingInput2);
  
    expect.equal(actual, expected);
}); 

//SUBTRACT TEST
test('If I subtract three from ten it will return 7', (expect) => {
    const firstNumber = 10;
    const secondNumber = 3;
    const expected = 7;

    const actual = subtractFunction(firstNumber, secondNumber);
  
    expect.equal(actual, expected);
});

//MULTIPLY TEST
test('If I multiply three by ten it will return 30', (expect) => {
    const firstNumber = 10;
    const secondNumber = 3;
    const expected = 30;
    
    const actual = multiplyFunction(firstNumber, secondNumber);

    expect.equal(actual, expected);
});

//DIVIDE TEST:
test('If I subtract six by two it will return 3.', (expect) => {
    const firstNumber = 6;
    const secondNumber = 2;
    const expected = 3;
   
    const actual = divideFunction(firstNumber, secondNumber);
 
    expect.equal(actual, expected);
}); 
