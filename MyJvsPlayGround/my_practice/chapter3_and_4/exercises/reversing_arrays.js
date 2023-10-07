function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
}
  
  
let originalArray = [1, 2, 3, 4, 5];
let reversed = reverseArray(originalArray);
console.log(reversed);
  

function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      let temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }  
}
  

let arrayToReverse = [6, 7, 8, 9, 10];
reverseArrayInPlace(arrayToReverse);
console.log(arrayToReverse);
  