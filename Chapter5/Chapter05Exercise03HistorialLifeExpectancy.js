function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
var ages = {}

ancestry.forEach(function(person){
ages[Math.ceil(person.died / 100)] = []
})
ancestry.forEach(function(person){if(ages[Math.ceil(person.died / 100)]){
ages[Math.ceil(person.died / 100)].push(person.died - person.born)
}
  })
for(var prop in ages) {
console.log(average(ages[prop]))
} 