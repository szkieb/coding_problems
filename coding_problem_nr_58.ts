// Good morning! Here's your coding interview problem for today.
// This problem was asked by Amazon.

// A sorted array of integers was rotated an unknown number of times.
// Given such an array, find the index of the element in the array in faster than linear time. If the element doesn't exist in the array, return null.

// You can assume all the integers in the array are unique.

// For example, given the array [13, 18, 25, 2, 8, 10] and the element 8, return 4 (the index of 8 in the array).

function findIndex(rotatedList: number[], numberToFind: number): number | null {
  //since the sorted array is rotated we want to keep track of the last number we checked
  let previous: number;

  // binary search is faster than linear; we start at the middle and work our way up or down towards the number we are looking for
  // we start our search at the middle of the rotatedList
  let searchIndex = Math.round(rotatedList.length / 2);

  previous = searchIndex - 1;

  // loop to go through elements of array
  for (let index = 0; index < rotatedList.length; index++) {
    if (rotatedList[searchIndex] === numberToFind) {
      return searchIndex;
    }

    if (rotatedList[searchIndex] < numberToFind) {
      searchIndex = searchIndex + 1;
    }

    if (rotatedList[searchIndex] > numberToFind) {
      searchIndex = searchIndex - 1;
    }

    // since the array is rotated we may reach end or beginning of array before finding the desired element
    // if that happens we continue our search from the other end of the array
    if (searchIndex === rotatedList.length) {
      searchIndex = 0;
    }

    if (searchIndex === -1) {
      searchIndex = rotatedList.length - 1;
    }
  }
  return null;
}

module.exports = findIndex;
