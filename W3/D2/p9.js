//immediately invoked function expression
//w/o parameter
(function(){
    console.log("basic IIFE execute immediatley");
})();
//with parameter
(function(appnName,verion){
    console.log("App:", appnName,"version",version);
})("NodeJs","v22.22.0");

//with return value
const result = (function() {
const a =10, b=20;
return a+b;
})(); 
console.log("sum is:",result);
