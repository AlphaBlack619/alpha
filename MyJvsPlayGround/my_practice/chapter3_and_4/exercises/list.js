function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
      list = { value: arr[i], rest: list };
    }
    return list;
}
function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
}
function prepend(element, list) {
    return { value: element, rest: list };
}
function nth(list, n) {
    if (!list) return undefined;
    if (n === 0) return list.value;
    return nth(list.rest, n - 1);
}

  let myList = arrayToList([1, 2, 3]);
  console.log(myList);
  
  let myArray = listToArray(myList);
  console.log(myArray);
  
  let newList = prepend(0, myList);
  console.log(newList);
  
  console.log(nth(myList, 1));
  console.log(nth(myList, 4));
  