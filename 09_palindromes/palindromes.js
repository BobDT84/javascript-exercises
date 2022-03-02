const palindromes = function (str) {
    str = str.toLowerCase();
    str = removeNonChar(str);
    let reversedstr = "";
    reversedstr = str.split('').reverse();
    reversedstr = reversedstr.join('');
    if (str == reversedstr){
        return true;
    } else {
        return false;
    }
};

function removeNonChar(str){
    let arrays = [...str.matchAll(/[a-z]/g)];
    let returnArray = [];
    for(let array of arrays){
        //matchAll returns an Array of Arrays
        //for each array in the array of arrays
        //the letters that match the regular
        //expression are in the first element
        //Reference:
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll#syntax
        returnArray.push(array[0]);
    }
    return returnArray.join('');
}
// Do not edit below this line
module.exports = palindromes;
