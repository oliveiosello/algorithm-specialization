// This file contains all of the 100,000 integers between 1 and 100,000 (inclusive) in some order, with no integer repeated.
// Your task is to compute the number of inversions in the file given, where the i^{th}ith row of the file indicates the i^{th} ith entry of an array.
// Because of the large size of this array, you should implement the fast divide-and-conquer algorithm covered in the video lectures.

// i 100k ints
// o num
// c ints are unique
// e no inversions

// create primary func which takes data
//   base case if data length < 2 return data
//   split data in middle
//   recurse on left and right
//   return call of counting func on left and right

// create counting func
// create sorted arr
// set pointers for left and right to 0
// while pointers are not equal to respective lengths
//   if left is greater than right
//     add left length to counter
//     push right to sorted arr
//     increment right pointer
//   otherwise
//     add left to sorted arr
//     incremenet left pointer
// add anyything remaining to sorted arr and increment pointer
// return sorted arr

import fs from "fs";

const data = fs
  .readFileSync("./computingInversions/data.txt")
  .toString()
  .split("\n")
  .map((line) => parseInt(line));

let inversionCount = 0;

const sortCount = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.ceil(arr.length / 2);
  const left = sortCount(arr.splice(0, mid));
  const right = sortCount(arr.splice(-mid));

  return countInversions(left, right);
};

const countInversions = (arr1, arr2) => {
  let sorted = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      inversionCount += arr1.length - i;
      sorted.push(arr2[j]);
      j++;
    } else {
      sorted.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    sorted.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    sorted.push(arr2[j]);
    j++;
  }

  return sorted;
};

// sortCount(data);
// console.log(inversionCount);
