//recursive function
// a function which call itself

function factorial(n){
    if(n<=1){
        return 1;
    }
    return n*factorial(n-1);
}