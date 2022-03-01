const caesar = function(message,shift) {
    let messageArray = message.split('');
    let endOfArray = messageArray.length;
    let char = '';

    for(let i=0; i<endOfArray; i++){
        char = messageArray[i];
        if(isInAlphabet(char)){
            messageArray[i] = shiftCharacter(char,shift);
        }
    }
    return messageArray.join('');
};

function isInAlphabet(char){
    return char == char.match(/[a-zA-Z]/);
};

function shiftCharacter(char,shift){
    let charUnicode = char.codePointAt(0);
    let shiftedChar = '';
    if(isAlphabetUnicode(shiftedUnicode)){
        shiftedChar = String.fromCharCode(shiftedUnicode);
    } else {
        
    }

    return shiftedChar;
};

function isAlphabetUnicode(unicode){
    if(unicode >= 97 && unicode <= 122){
        return true;
    } else if (unicode >= 65 && unicode <= 90){
        return true;
    } else {
        return false;
    }
};

function isLowerAlphabetUnicode(unicode){

};

function unicodeShift(unicode,shift){
    if()
    let shiftedUnicode = unicode + shift;
};
// Do not edit below this line
module.exports = caesar;
