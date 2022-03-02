const fibonacci = function(n) {
    if(n<0){
        return "OOPS";
    }
    let fibArray = [0,1];
    //Fibonacci 0 1 1 2 3 5 8 13 21 ...
    //If array is currently at [0,1,1,2,3] and n is 5
    //fibA[5] = fibA[4] + fibA[3]
    //   5    =    3    +    2
    for(let i= 2; i<=n; i++){
        fibArray[i]  = fibArray[i-1] + fibArray[i-2]; 
    }
    return fibArray[n];
};

// Do not edit below this line
module.exports = fibonacci;
