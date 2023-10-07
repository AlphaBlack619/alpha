function deepEqual(obj1, ob2j) {
    if (obj1 === ob2j) {
      return true;
    }
    if (obj1 == null || typeof obj1 !== "object" || ob2j == null || typeof ob2j !== "object") {
      return false;
    }
  
    let keysA = Object.keys(obj1);
    let keysB = Object.keys(ob2j);
  
    if (keysA.length !== keysB.length) {
      return false;
    }
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(obj1[key], ob2j[key])) {
        return false;
      }
    }
    return true; 
}
  
let obj1 = { a: 1, b: { c: 2, d: 3 } };
let obj2 = { a: 1, b: { c: 2, d: 3 } };
let obj3 = { a: 1, b: { c: 2 } };
console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
  