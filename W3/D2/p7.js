//Arrow function
(args)=> {
    //body of the function
}
// adding of two numbers
const sum = (a,b) => {
    return a+b;
}
console.log("3+5 =", sum(3,5));

//single line return / implicit return
const square = x => x*x;
console.log("square of 44:",square(44));
const sayHellow = () => confirm.log("hello from arrow func");
sayHellow();