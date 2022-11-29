const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce(fn(accumulator, element) { return element + accumulator}, 0);

const doubledAndSummedFromTen = [1, 2, 3].reduce(function(accumulator, element){ return element * 2 + accumulator}, 10)
// => 22