function range(start, end, step = 1) {
    let result = [];
    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        result.push(i);
      }
    } else {
      for (let i = start; i >= end; i += step) {
        result.push(i);
      }
    }
    return result;
  }
function sum(array) {
    return array.reduce((acc, current) => acc + current, 0);
  }
  

let numbers = range(1, 10);
console.log(numbers);
  
let sumResult = sum(numbers);
console.log("Sum of the elements: " + sumResult);
  

let evenNumbers = range(1, 10, 2);
console.log(evenNumbers);
  
let decreasingNumbers = range(5, 2, -1);
console.log(decreasingNumbers);
  