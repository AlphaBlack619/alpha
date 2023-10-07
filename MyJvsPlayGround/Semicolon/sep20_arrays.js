let arr = new Array(5);
let ar2 = [1, 2, 3, 4, 5, 6];
let arr3 = new Array(5, 6, 7, 8, 9);
arr = [3, 4, 7, 3, 8, 4, {name : "Alpha"}];
console.log(arr);
arr.shift(23);
console.log(arr);
arr.unshift()
arr.pop();
arr.push(45);
console.log(arr);
arr.splice(2, 2);
console.log(arr);

Array.prototype.laugh = "lol";
console.log(arr.laugh);
// read about slice and splice array method..