/*
You are given an integer array nums sorted in ascending order, and an integer target.

Suppose that nums is rotated at some pivot unknown to you
beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

If target is found in the array return its index, otherwise, return -1.
Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1

https://www.educative.io/courses/coderust-hacking-the-coding-interview/kR7nE
https://leetcode.com/problems/search-in-rotated-sorted-array/
*/

let binarySearchRotated = function(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let mid = 0;
  while(start <= end) {
    mid = Math.floor((start + end) / 2);
    if(key === arr[mid]) return mid;
    // Check if the left side is sorted
    if(arr[start] <= arr[mid]) {
      // If the left part is sorted, we can easily know if the element falls there
      if(arr[mid] >= key && arr[start] <= key) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else { // Right side sorted
      // If left side is not sorted, right part should be sorted
      if(nums[mid] < key && nums[end] >= key){
        start = mid + 1;
      }else{
        end = mid - 1;
      }
    }
  }
  return -1;
};