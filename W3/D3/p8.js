//json stringify parse
const employee ={
    id :403,
    name:"chaithra",
    dept:"CS",
    isActive:true
};
const jsonString = JSON.stringify(employee);
console.log(jsonString);
console.log(employee);

//JSON parsing
const parseObject = JSON.parse(jsonString);
console.log(parseObject);

