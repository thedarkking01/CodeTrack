// src/dsaProblems.js

const dsaProblems = [
  {
    name: "Two Sum",
    difficulty: "Easy",
    topic: "Array",
    
    statement: `
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9
-10^9 <= target <= 10^9
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?`

  },
  {
    name: "Valid Anagram",
    difficulty: "Easy",
    topic: "String",
    statement: "Given two strings s and t, return true if t is an anagram of s."
  },
  {
    name: "Merge Intervals",
    difficulty: "Medium",
    topic: "Array",
    statement: "Given a collection of intervals, merge all overlapping intervals."
  },
  {
    name: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    topic: "String",
    statement: "Given a string, find the length of the longest substring without repeating characters."
  },
  {
    name: "Binary Search",
    difficulty: "Medium",
    topic: "Searching",
    statement: "Given a sorted array of integers, find the index of a target value using binary search."
  },
  {
    name: "Lowest Common Ancestor of a Binary Search Tree",
    difficulty: "Medium",
    topic: "Tree",
    statement: "Given a binary search tree, find the lowest common ancestor of two given nodes."
  },
  {
    name: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    topic: "Tree",
    statement: "Given a binary tree, find its maximum depth."
  },
  {
    name: "Rotate Image",
    difficulty: "Medium",
    topic: "Array",
    statement: "Rotate an n x n matrix representing an image by 90 degrees (clockwise)."
  },
];

export default dsaProblems;
