/*
We’re given an array of integers and a value. Determine if there are any two integers in the array whose sum is equal to the given value.
Return true if the sum exists; otherwise, return false.

https://www.educative.io/courses/coderust-hacking-the-coding-interview/jv314
*/

let findSumOfTwo = function (nums, val) {
  let n = new Set();
  for (let num of nums) {
    let tmp = val - num;
    if (n.has(tmp)) {
      return true;
    }
    n.add(num);
  }
  return false;
};
