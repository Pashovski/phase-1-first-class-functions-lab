// Code your solution in this file!
// const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0, 2)
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num){
    return function(fare) {
        return fare * num;

    }
}
const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

// const fareDoubler = createFareMultiplier(2);

// const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driverToReturn) {
    return driverToReturn(drivers);
}