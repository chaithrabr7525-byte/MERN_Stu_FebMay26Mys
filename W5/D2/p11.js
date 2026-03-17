//chaining promise with returned promises
function getOrderID(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(501);
        },5000);
    });
}
function getOrderDetails(orderID){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({
                id:orderID,
                product:"laptop",
                quantity: 2
            });
        }, 7000)
    });
}
getOrderID()
.then(function(oredrID){
    console.log("Order ID recevied:",oredrID);
    return getOrderDetails(oredrID);
})
.then(function(OrderDetails){
    console.log("oredr details loaded.")
    console.log("product:",OrderDetails.product)
    console.log("quantity:",OrderDetails.quantity)
});