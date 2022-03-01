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
    charUnicode = shiftUnicode(charUnicode,shift);
    let shiftedChar = String.fromCharCode(charUnicode);
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
    if(unicode >= 97 && unicode <= 122){
        return true;
    } else {
        return false;
    }
};

function isUpperAlphabetUnicode(unicode){
    if (unicode >= 65 && unicode <= 90){
        return true;
    } else {
        return false;
    }
};

function shiftUnicode(unicode,shift){
    if(isLowerAlphabetUnicode(unicode)){
        return shiftLower(unicode,shift);
    } else if(isUpperAlphabetUnicode(unicode)){
        return shiftUpper(unicode,shift);
    }
};

function shiftLower(unicode,shift){
    let shiftedUnicode = unicode + shift;
    if(isLowerAlphabetUnicode(shiftedUnicode)){
        return shiftedUnicode;
    } else {
        shiftedUnicode = wrapShiftLower(shiftedUnicode);
        return shiftedUnicode;
    }
};

function shiftUpper(unicode,shift){
    let shiftedUnicode = unicode + shift;
    if(isUpperAlphabetUnicode(shiftedUnicode)){
        return shiftedUnicode;
    } else {
        shiftedUnicode = wrapShiftUpper(shiftedUnicode);
        return shiftedUnicode;
    }
};

function wrapShiftLower(unicode){
    let a = 97;
    let z = 122;
    if(unicode > z){
        while(!isLowerAlphabetUnicode(unicode)){
            unicode = unicode - 26;
        }
        return unicode;
    } else if(unicode < a){
        while(!isLowerAlphabetUnicode(unicode)){
            unicode = unicode + 26;
        }
        return unicode;
    }
};

function wrapShiftUpper(unicode){
    let A = 65;
    let Z = 90;
    if(unicode > Z){
        while(!isUpperAlphabetUnicode(unicode)){
            unicode = unicode - 26;
        }
        return unicode;
    } else if(unicode < A){
        while(!isUpperAlphabetUnicode(unicode)){
            unicode = unicode + 26;
        }
        return unicode;
    }
};


// Do not edit below this line
module.exports = caesar;
