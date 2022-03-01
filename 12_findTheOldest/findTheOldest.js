const findTheOldest = function(people) {
    let ages = [];
    let thisYear = new Date();
    thisYear = thisYear.getFullYear();
    for(let i=0; i<people.length; i++){
        if(isNaN(people[i].yearOfDeath)){
            ages[i] = thisYear-people[i].yearOfBirth
        } else {
            ages[i] = people[i].yearOfDeath - people[i].yearOfBirth
        }
    }
    let index = 0;
    indexOfOldest = ages.indexOf(Math.max(...ages));
    return people[indexOfOldest];
};

// Do not edit below this line
module.exports = findTheOldest;
