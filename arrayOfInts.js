const sampleArray = [1, 3, 2, 6, -3, -9, 11];

const arrayOfInts = function AOI(array) {
  //take the first three numbers, sort from highest to lowest
  //iterate over array, change the three highest numbers
  if (array.length < 3) {
    return null;
  }
  // let highestProductOf2 = array[0] * array[1];
  // let lowestProductOf2 = array[0] * array[1];
  // let highestProductof3 = 0;
  // let highest;
  // let lowest;
  // if (array[1] > array[0]) {
  //   highest = array[1];
  //   lowest = array[0];
  // } else {
  //   highest = array[0];
  //   lowest = array[1];
  // }
  // for (const i = 2; i < array.length; i++) {
  //   if (highestProductOf2 * array[i] > highestProductof3) highestProductof3 = highestProductOf2 * array[i];
  //   if (lowestProductOf2 * array[i] > highestProductof3) highestProductof3 = lowestProductOf2 * array[i];
  //   if (highest * array[i] > highestProductOf2) {
  //     highestProductOf2 = highest * array[i];
  //     if (array[i] > highest) highest = array[i];
  //   }
  //   if (lowest * array[i] > highestProductOf2) {
  //     highestProductOf2 = lowest * array[i];
  //     if (array[i] < lowest) lowest = array[i];
  //   }
  //   if (lowest * array[i] < lowestProductOf2) {
  //     lowestProductOf2 = lowest * array[i];
  //     if (lowest > array[i]) lowest = array[i];
  //   }
  //   if (highest * array[i] < lowestProductOf2) {
  //     lowestProductOf2 = highest * array[i];
  //     if (array[i] < lowest) lowest = array[i];
  //   }
  // }
  // return highestProductof3;

  // using Math...
  let highest = Math.max(array[0], array[1]);
  let lowest = Math.min(array[0], array[1]);
  let highestProductOf2 = array[0] * array[1];
  let lowestProductOf2 = array[0] * array[1];
  let highestProductof3 = 0;
  let current;
  for (let i = 0; i < array.length; i++) {
    current = array[i];
    highestProductof3 = Math.max(highestProductOf2 * current, lowestProductOf2 * current, highestProductof3);
    highestProductOf2 = Math.max(highestProductOf2, highest * current, lowest * current);
    lowestProductOf2 = Math.max(lowestProductOf2, lowest * current, highest * current);
    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);
  }
  return highestProductof3;
};
arrayOfInts(sampleArray);
