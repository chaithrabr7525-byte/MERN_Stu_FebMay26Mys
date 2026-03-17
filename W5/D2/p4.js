//writing custom callback functions
function processStudent(name,score,callback,monkey){
    console.log("student name: ",name);
    console.log("score: ",score);
    callback(name,score);
    monkey(name,score);
}
function showResult(name,score){
    if(score >=70){
        console.log(name+ "has passed.");
    }
    else{
        console.log(name+ "has failed");
    }
}
function showGrade(name,score){
if(score >=85){
        console.log("Grade : A");
    }
    else if (score >=70){
        console.log("Grade : b");
    }
    else{
        console.log("Grade: fail");
    }
}
//processStudent("bugu",86,showResult)
processStudent("bugu",86,showResult,showGrade)
processStudent("dudu",66,showResult,showGrade)
processStudent("bubu",70,showResult,showGrade)



