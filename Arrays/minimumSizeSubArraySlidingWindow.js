/*
Given an array of integers and a target, return the length of the shortest contiguous
subarray whose sum is greater than or equal to the target.

Given an array of positive integers, nums, along with a positive integer, target. Find the length of the shortest contiguous subarray whose sum is
greater than or equal to the target. If there is no such subarray, return 0 instead.

https://www.educative.io/courses/coderust-hacking-the-coding-interview/qAvy5oxWN52
https://leetcode.com/problems/minimum-size-subarray-sum/description/
*/

var minSubArrayLen = function (target, nums) {
  if (!nums.length) {
    return 0;
  }

  let start = 0;
  let end = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  while (end < nums.length) {
    sum += nums[end];
    // If we reach the goal
    while (sum >= target) {
      min = Math.min(end - start + 1, min);
      sum -= nums[start];
      start++;
    }
    // Increase end window
    end++;
  }
  return min !== Number.MAX_SAFE_INTEGER ? min : 0;
};
