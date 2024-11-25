const findTheOldest = function (people) {

    return people.reduce((currentOldest, currentPerson) => {

        const currentYear = new Date().getFullYear();

        let currentOldestAge = currentOldest.yearOfDeath === undefined ?
            currentYear - currentOldest.yearOfBirth :
            currentOldest.yearOfDeath - currentOldest.yearOfBirth;

        let currentPersonAge = currentPerson.yearOfDeath === undefined ?
            currentYear - currentPerson.yearOfBirth :
            currentPerson.yearOfDeath - currentPerson.yearOfBirth

        return currentPersonAge > currentOldestAge ? currentPerson : currentOldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
