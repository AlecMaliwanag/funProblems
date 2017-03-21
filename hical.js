const sampleData =   [
  {startTime: 0,  endTime: 1},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10},
];

const mergeRanges = function merge(array) {
  //sort first
  const sortedArray = array.slice().sort((a, b) => a.startTime - b.startTime);
  let mergedMeetings = [sortedArray[0]];
  for (let i = 0; i < sortedArray.length; i++) {
    let lastMerged = mergedMeetings[mergedMeetings.length-1];
    if (sortedArray[i].startTime <= lastMerged.endTime) {
      lastMerged.endTime = Math.max(array[i].endTime, lastMerged.endTime);
    } else {
      mergedMeetings.push(sortedArray[i]);
    }
  }
  return mergedMeetings;
};

mergeRanges(sampleData);
  
