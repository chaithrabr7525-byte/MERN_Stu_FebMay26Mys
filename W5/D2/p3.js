//Asynchronous approach of node.js

console.log("step 1: script started.")


setTimeout(()=>{
    console.log("step 3: delayed callback finished.F1.")
 
},1000);

setTimeout(function () {
    console.log("step 3: delayed callback finished.F2.")
},3000);

console.log("step 2: script did not stop while waiting.");