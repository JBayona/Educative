/*
Given an integer array nums, write an algorithm to shuffle the array randomly.
All permutations of the array should be equally likely.

https://www.educative.io/courses/coderust-hacking-the-coding-interview/3w5GKYqj6Nn
*/

class Solution {
  constructor(nums) {
    this.original = nums;
    this.nums = this.original;
    this.n = nums.length;
  }
  reset() {
    return this.original;
  }
  shuffle() {
    var shuffled = [];
    // Make a copy
    this.original.forEach((n, index) => (shuffled[index] = n));
    for (let i = 0; i < shuffled.length; i++) {
      // Random between i and n
      let indexSuffle = Math.floor(Math.random() * (this.n - i + 1) + i);
      // Swap
      let tmp = shuffled[i];
      shuffled[i] = shuffled[indexSuffle];
      shuffled[indexSuffle] = tmp;
    }
    return shuffled;
  }
}
