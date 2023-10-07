let array = [5, 6, 3, 6, 8, 3, 6];
console.table(array);
for (let i in array){
    process.stdout.write('${i}')}
    // console.log();
let obj = {
    name: "nero",
    age: 25,
    height: "5.4",
    cohort: 17}
let objval = Object.values(obj);
let objkey = Object.keys(obj);
console.log();
for (let i of objkey){
    process.stdout.write('${i}');
}
