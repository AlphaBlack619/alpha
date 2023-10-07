let obj = {
    id : "12",
    available : "true",
    count: "2",
    name: "Alpha",
    author: "Uknwon"};

let obj2 = {
    id : Number(obj.id),
    available : Boolean(obj.available),
    count: Number(obj.count),
    name: (obj.name),
    author: (obj.author)}
console.log(obj2);