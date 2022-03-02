const sumAll = function(num1,num2) {
    if(isValidArgumentForSumAll(num1,num2)){
        return sumAllBetween(
                Math.min(num1,num2),
                Math.max(num1,num2)
                );
    } else {
        return 'ERROR';
    }
};

function sumAllBetween(start,end){
    let i = start
        sum = 0;
    while(i<=end){
        sum = sum + i;
        i++;
    }
    return sum;
};

function isValidArgumentForSumAll(a,b){
    if(isNaN(a) || isNaN(b)){
        return false;
    } else if(a < 0 || b < 0){
        return false;
    } else if (typeof a === "string" || typeof b === "string"){
        return false;
    } else {
        return true;
    }
};
// Do not edit below this line
module.exports = sumAll;
