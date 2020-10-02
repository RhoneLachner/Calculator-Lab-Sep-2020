// import functions and grab DOM elements
import { addFunction } from './math-utils.js';
import { subtractFunction } from './math-utils.js';
import { multiplyFunction } from './math-utils.js';
import { divideFunction } from './math-utils.js';
//ADD BUTTON:
const addButton = document.getElementById('add-Button');
addButton.addEventListener('click', () => {
    addFunction();
});
//SUBTRACT BUTTON:
const subtractButton = document.getElementById('subtract-Button');
subtractButton.addEventListener('click', () => {
    subtractFunction();
});
//MULTIPLY BUTTON:
const multiplyButton = document.getElementById('multiply-Button');
multiplyButton.addEventListener('click', () => {
    multiplyFunction();
});
//DIVIDE BUTTON:
const divideButton = document.getElementById('divide-Button');
divideButton.addEventListener('click', () => {
    divideFunction();
  
});

