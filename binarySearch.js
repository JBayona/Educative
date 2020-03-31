/*
Implement Binary Search on a Sorted Array
Given a sorted array of integers, return the index of the given key. Return -1 if the key is not found.

https://www.educative.io/courses/coderust-hacking-the-coding-interview/k5qJx
*/

// Recursion
let binarySearch = function(a, key) {
  return helper(a, key, 0, a.length-1);
};

/*
Time O(log n).
Space O(log n).
*/
function helper(array, key, start, end) {
  if(start > end) {
    return -1;
  }
  let middle = Math.floor((start + end) / 2);
  if(array[middle] === key) {
    return middle;
  }
  if(key < array[middle]) {
    return helper(array, key, start, middle - 1);
  } else if(key >  array[middle]) {
    return helper(array, key, middle + 1, end)
  }
}