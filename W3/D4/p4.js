//
let prices = [100,200,300,400];
let pricesWithGST = prices.map(price => price + price*0.18);
console.log("price without tax",prices);
console.log("price with tax",pricesWithGST);

//using map to extract file
let users = [
    {name:"bubu", age: 21},
    {name:"dudu", age: 22}
];

let name = users.map(user => user.name);
console.log("",name);