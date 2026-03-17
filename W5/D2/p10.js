//chaining promise with returned values
function getBaseAmout(){
    return new Promise(function(resolve){
setTimeout(function(){
    resolve(1000);
},5000);
    });
}

getBaseAmout()
.then(function(amount){
    console.log("Base amount:",amount);
    return amount+200;
})
.then(function(updatedAmount){
    console.log("Amount after service charge:",updatedAmount);
    return updatedAmount - 100;
})
.then(function(finalAmount){
    console.log("final Amount after discount:",finalAmount);
});