//reduce function 
let num = [5, 10, 15];

let Total = num.reduce((intermediateSum, current) =>
    intermediateSum + current, 0);
console.log(Total);

//one line approach
let average = num.reduce((intermediateSum, current) =>
    intermediateSum + current, 0) / num.length;
console.log(average);

//two line approach
let total = num.reduce((intermediateSum, current) =>
    intermediateSum + current, 0);
console.log(total);
let avrg = total / num.length;
console.log(average);

//reduce to object count by category
let items = ["pen", "pencil", "pen", "eraser"];
let count = items.reduce((intermidiateValue, item) => {
    intermidiateValue[item] = (intermidiateValue[item] || 0) + 1;
    return intermidiateValue;
}, {});
console.log("item:", count);

