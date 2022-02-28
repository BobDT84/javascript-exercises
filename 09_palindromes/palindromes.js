const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    str = str.replace(/\s/g,"");
    let reversedstr = "";
    reversedstr = str.split('').reverse();
    reversedstr = reversedstr.join('');
    if (str == reversedstr){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
