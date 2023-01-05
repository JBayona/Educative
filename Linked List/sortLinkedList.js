/*
Given a linked list and n, reverse the list in between, example:
1 -> 2 -> 3 -> 4 -> 5 -> 6
n = 3
Result = 3 -> 2 -> 1 -> 6 -> 5 -> 4
*/

function Node(val, next) {
  this.val = val;
  this.next = next || null;
}

let sortedInsertion = function (head, node) {
  // Return head if node is None
  if (!node) {
    return head;
  }

  // Return node if there is no head node
  // or node's value is less than or equal to the head's value
  if (!head || node.data <= head.data) {
    node.next = head;
    return node;
  }

  let curr = head;

  // Loop to find the sorted postion in the linked list
  while (curr.next && curr.next.data < node.data) {
    curr = curr.next;
  }
  // Adding node in the linked list
  node.next = curr.next;
  curr.next = node;

  // Returning head of the modified linked list
  return head;
};

let insertionSort = function (head) {
  // Initializing a list for sorted linked list
  let sorted = null;
  let curr = head;
  // Looping over the original linked list and passing each node
  // to the sorted_insert function to get a sorted linked list
  while (curr) {
    let temp = curr.next;
    sorted = sortedInsertion(sorted, curr);
    curr = temp;
  }

  return sorted;
};
