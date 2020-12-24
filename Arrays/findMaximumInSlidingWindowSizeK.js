/*
Given a large array of integers and a window of size ww, find the current maximum
value in the window as the window slides through the entire array.

Let’s try to find all maximums for a window size equal to 33 in the array given below:

arr = -4 2 -5 3 6

Step 1: For the first 3 elements in the window, max is 2.
Step 2: Slide window one position to the right and max for window becomes 3.
Step 3: In the last window, max is 6.

Result = [2, 3, 6]

https://www.educative.io/courses/coderust-hacking-the-coding-interview/k5llE
*/

// Option 1
// Time O((N - k + 1) * k) = O(n * k)
let findMaxSlidingWindow = function(arr, window_size) {
  var result = [];
  let max = 0;
  for(let i = 0; i < arr.length - window_size + 1; i++) {
    max = arr[i];
    for(let j = 0; j < window_size; j++) {
      if(arr[i + j] > max) {
        max = arr[i + j];
      }
    }
    result.push(max);
  }
  return result;
};