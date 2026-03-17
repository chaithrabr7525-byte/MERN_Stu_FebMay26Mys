//chain promises with centralized error handling
function validateLogin(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Login validated");
        },4000);
    });
}
function fetchAccountData(){
    return new Promise(function (resolve,reject){
        setTimeout(function(){
            const accountFound = true;
            if(accountFound){
                resolve("Account data loaded.")
            }else{
                reject("Account data could not be found")
            }
        },7000);
    });
}
validateLogin()
.then(function(message){
    console.log(message);
    return fetchAccountData();
})
.then(function(accountMessage){
    console.log(accountMessage);
})
.catch(function(error){
    console.log("chain error: ",error);
});