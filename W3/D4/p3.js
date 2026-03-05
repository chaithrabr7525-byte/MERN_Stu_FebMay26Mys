//array map
let prices = [100,200,300,400];
let pricesWithGST = prices.map(price => price + price*0.18);
console.log("price without tax",prices);
console.log("price with tax",pricesWithGST);