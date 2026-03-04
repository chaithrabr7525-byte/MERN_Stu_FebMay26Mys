//basics of java
const person ={name:"chaithra",
    age:21,
    city:"krpete"};

//console.log("person",person);
console.log(person.name);//dot notation
console.log(person.age);
console.log(person.city);

//bracket notation
console.log("name",person.name);

//add a new property
person.id="12345";
console.log("person",person);

//modify
person.age =20;
console.log("person",person)

//delete
delete person.id;
console.log("person",person)

//object constructor
const car= new Object();
car.make ="BMW";
car.model ="A4";
car.year ="2k26";
console.log("car",car)

