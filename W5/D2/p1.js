//intro to callback function
function greetUser(name,Callback){
    console.log("hello,"+name);
//the callback function is execution only after the 
//execution of the current function
    Callback();
}
function showCompletionMessage(){
    console.log("the greeting task is complete");
}

greetUser("chaithra",showCompletionMessage);