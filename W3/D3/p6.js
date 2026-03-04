//nested object and methods
const student = {
    firstname: "chaithra",
    lastname: "B R",
    score: {
        DS: 85,
        ADA: 80,
        MATHS: 75,
        CN: 70
    }, SGPA:8.2,
    fullname: function (){
        return this.firstname + " " + this.lastname;
    },
    greet() {
        console.log("hi,", this.fullname());
    },
};
    console.log("student", student);
    student.greet();
