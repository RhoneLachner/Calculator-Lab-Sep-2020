// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add } from './mathUtils.js';

const test = QUnit.test;

test('If I add two and three it will return 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
  
    const addingInput1 = 2;
    const addingInput2 = 3;
    const expected = 5;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(addingInput1, addingInput2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



import { subtract } from './mathUtils.js';



test('If I subtract three from ten it will return 7', (expect) => {
    //Arrange
    // Set up your arguments and expectations
  
    const subtractingInput1 = 10;
    const subtractingInput2 = 3;
    const expected = 7;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(subtractingInput1, subtractingInput2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
