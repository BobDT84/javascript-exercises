const findTheOldest = function(people) {
    let ages = [];
    let thisYear = new Date().getFullYear();
    for(let i=0; i<people.length; i++){
        if(isStillAlive(people[i])){ 
            ages[i] = thisYear-people[i].yearOfBirth
        } else {
            ages[i] = people[i].yearOfDeath - people[i].yearOfBirth
        }
    }
    indexOfOldest = ages.indexOf(Math.max(...ages));
    return people[indexOfOldest];
};

function isStillAlive(person){
    return isNaN(person.yearOfDeath);
}
// Do not edit below this line
module.exports = findTheOldest;
