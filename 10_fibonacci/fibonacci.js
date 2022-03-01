const fibonacci = function(n) {
    if(n<0){
        return "OOPS";
    }
    let fibArray = [0,1];

    for(let i= 2; i<=n; i++){
        fibArray[i]  = fibArray[i-1] + fibArray[i-2]; 
    }
    return fibArray[n];
};

// Do not edit below this line
module.exports = fibonacci;
