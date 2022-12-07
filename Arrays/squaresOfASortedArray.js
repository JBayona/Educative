/*
Given a sorted array of integers, return a sorted array of their squares.

https://www.educative.io/courses/coderust-hacking-the-coding-interview/7Xy5EY390Zj
*/

// Time O(N)
// Two pointers
let sortedSquares = function (nums) {
  let result = [nums.length].fill(null);
  let left = 0;
  let right = nums.length - 1;

  let index = nums.length - 1;
  while (index >= 0) {
    let a = Math.pow(nums[left], 2);
    let b = Math.pow(nums[right], 2);
    if (a > b) {
      result[index] = a;
      left++;
    } else {
      result[index] = b;
      right--;
    }
    index--;
  }
  return result;
};
