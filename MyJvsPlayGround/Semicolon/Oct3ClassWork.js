row1 = []
row2 = []
row3 = []
manin_array = []

let object1 = {
  name: 'sabo',
  population: 1000,
  temperature: 10,
  currency: '$'
}
var object2 = {
    name: 'yaba',
    population: 1000,
    temperature: 9,
    currency: '$'
}
  var object3 = {
    name: 'Unliga',
    population: 1000,
    temperature: 8,
    currency: '$'
}

row1.push(null)
row1.push(object1)
row1.push(object2)
row1.push(object3)
manin_array.push(row1)

  let object4 = {
    name: 'sabo',
    population: 1000,
    temperature: 10,
    currency: '$'
  }
  var object5 = {
    name: 'burutu',
    population: 600,
    temperature: 12,
    currency: '$'
  }
  var object6 = {
    name: 'warri',
    population: 100,
    temperature: 9,
    currency: '$'
  }

  row2.push(null)
  row2.push(object4)
  row2.push(object5)
  row2.push(object6)
  manin_array.push(row2)

  var object7 = {
    name: 'uyo',
    population: 1000,
    temperature: 10,
    currency: '$'
  }
  var object8 = {
    name: 'saboleft',
    population: 1000,
    temperature: 11,
    currency: '$'
  }
  var object9 = {
    name: 'oyo',
    population: 900,
    temperature: 15,
    currency: '$'
  }
  row3.push(null)
  row3.push(object7)
  row3.push(object8)
  row3.push(object9)
  manin_array.push(row3)
let total = 0
console.table(manin_array)
manin_array.forEach(element => {
    for (let x of element) {
        if (x != null) {
            if(x.temperature >= 10){
              total += x.population
            }
            
        }
    }
});
console.log(total)
manin_array.forEach(y =>{
    console.table(y)
})
