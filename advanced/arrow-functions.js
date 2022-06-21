const people = [{
    name: 'andrew',
    age: 27
}, {
    name: 'mohsen',
    age: 34
}, {
    name: 'zahra',
    age: 30.5
}]

const over30 = people.filter(person => person.age > 30)
const under30 = people.filter(person => person.age < 30)

console.log(over30);

people[2].age = 29

console.log(people);
console.log(over30);

const whoseAgeIs34 = people.find(person => person.age === 34).name

console.log(whoseAgeIs34);