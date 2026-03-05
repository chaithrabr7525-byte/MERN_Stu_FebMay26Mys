//Filter method
 let marks = [75,49,56,70,82,51,68];
 let passed = marks.filter(mark => marks >=70);
 console.log(marks);
 console.log(passed);

//filter method

let students = [
    { name: "dudu", score: 85 },
    { name: "Bubu", score: 92 },
    { name: "bugu", score: 78 },
    { name: "Dugu", score: 50 },
    { name: "gudu", score: 68 }
];

// Use filter to get students with score > 7
let qualifiedStudents = students.filter(student => student.score > 70).map(student => student.name);
console.log(qualifiedStudents);

