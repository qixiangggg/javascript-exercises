const findAge = function(birth,death){
    if (!death){
        const currentDate = new Date();
        return currentDate.getFullYear() - birth;
    }
    return death - birth;
}
const findTheOldest = function(people) {
    return people.reduce((oldestPerson,currentPerson)=>{
        let currentPersonAge = findAge(currentPerson.yearOfBirth,currentPerson.yearOfDeath);
        let oldestPersonAge = findAge(oldestPerson.yearOfBirth,oldestPerson.yearOfDeath);
        return currentPersonAge > oldestPersonAge ? currentPerson : oldestPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
// find the age of every people
