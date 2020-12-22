"""
Implement Binary Search on a Sorted Array
Given a sorted array of integers, return the index of the given key.
Return -1 if the key is not found.

https://www.educative.io/courses/coderust-hacking-the-coding-interview/k5qJx
"""

import math

# Recursion
# Time O(log n).
# Space O(log n).
def binary_search(a, key):
  #TODO: Write - Your - Code
  return helper(a, key, 0, len(a) - 1)

def helper(array, key, start, end):
  # Not found
  if(start > end):
    return -1
  
  middle = math.floor((start + end) / 2)
  if(key == array[middle]):
    return middle
  if(key > array[middle]):
    return helper(array, key, middle + 1, end)
  else:
    return helper(array, key, start, middle - 1)
  
  # Iterative
  import math

def binary_search(a, key):  
  low = 0
  high = len(a) - 1
  
  while low <= high:
    mid = math.floor((high + low) / 2)
    
    if a[mid] == key:
      return mid
    
    if key < a[mid]:
      high = mid - 1
    else:
      low = mid + 1
  return -1
