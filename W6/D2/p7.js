//setImmediate vs setTimeout
console.log("Schedule setTimeout and sestImmediate.");

//callback timer
setTimeout(()=> {
    console.log("Timer callback from setTimer.");
},0);

//setImmediate callback 
setImmediate(function(){
    console.log("setImmediate callback executed.");
});

console.log("Both callbacks are now waiting for the event loop");