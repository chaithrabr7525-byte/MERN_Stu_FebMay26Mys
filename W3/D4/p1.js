//Array basics 
console.log("array basics");
//creating arrays
let emptyArray= [];
let numArray = [1,2,3,4];
let mixedArray = [42,"hello",true,null,{name:"duda"},
     [5,6]];
     console.log(emptyArray);
     console.log(numArray);
     console.log(mixedArray);

//creation of Array using constructor
let fruits = new Array("apple","strowberry");
console.log(fruits);
console.log("is the fruits is an array?",Array.isArray(fruits));

//adding a value to array (push)
fruits.push("banana");
console.log(fruits);

//removing the value (pop)
fruits.pop("banana");
console.log(fruits);

//unshift: adds to beginning
fruits.unshift("orange");
console.log(fruits);

//shift: remove from beginning
fruits.shift("orange");
console.log(fruits);


