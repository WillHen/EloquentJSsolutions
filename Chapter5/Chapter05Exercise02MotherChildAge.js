function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});
var ageArr = []
for(prop in byName) {
  if(byName[byName[prop].mother]) {ageArr.push(byName[prop].born - 
                                               byName[byName[prop].mother].born) }
}
console.log(average(ageArr))
