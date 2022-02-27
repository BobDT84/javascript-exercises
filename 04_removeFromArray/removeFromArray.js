const removeFromArray = function(array,...remove) {
    for(let i=0; i<remove.length; i++){
        array = removeElement(array,remove[i]);
    }
    return array;
};

function removeElement(array,element){
    while(array.indexOf(element)>=0){
        i = array.indexOf(element);
        array.splice(i,1);
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
