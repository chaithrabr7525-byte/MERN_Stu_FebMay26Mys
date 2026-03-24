//using the EventEmitter class
const EventEmitter = require("events");

//create a new event emitter instance
//This object can publish events and allow listeners
//to subscribe
const orderEmitter = new EventEmitter(); //eventEmitter instance

//Register a listerner for the "orderPlaced" event.
//whenever the event is Emitted, the function will execute
//once() register a listerner that automatically removes 
//itself after running for the first time
orderEmitter.once("OredrPlaced",
    function(orderId,Name,oerderValue){
        console.log("Bill amt",oerderValue);
        console.log("waiting for restuarant to accept ur order",orderId);
    }
);

orderEmitter.on("OredrPlaced",
    function(orderId,Name){
        console.log("Hello",Name);
        console.log("Restuarant accepted order.",orderId);
    }
);

orderEmitter.on("OredrPlaced",
    function(orderId,Name){
        console.log("Hello",Name);
        console.log("Assigning delivery partner");
    }
);

orderEmitter.on("OredrPlaced",
    function(orderId,Name){
        console.log("Hello",Name);
        console.log("Share this OTP-2435, Rakesh is delivering your order");
    }
);

//Emit the event with extra data
//The listerner receives the orderId value
orderEmitter.emit("OredrPlaced","Id-2442","chaithra",250);
orderEmitter.emit("OredrPlaced","Id-2442","chaithra",250);