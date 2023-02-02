// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2);
}

returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);

const returnLastTwoDrivers = function(array) {
    return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function fareMultiplier(fare) {
        return (fare * integer);
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function selectDifferentDrivers(array, functionName) {
    return functionName(array);
}

selectDifferentDrivers(drivers, returnFirstTwoDrivers);

selectDifferentDrivers(drivers, returnLastTwoDrivers);