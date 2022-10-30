// (1) ALGORITHMS

// BIG-O GUIDE
// Calculation not dependent on input size-O(1)
// 1. Loop - O(n)
// 2. nested loops - O(n^2)
// Input size reduced by half - O(logn)

// // big-0 = 0(n) EXAMPLES

// // PROBLEM: Given a number 'n', find the first 'n' elements of the Fibonacci sequence
// function fibonacci(n) {
//   const fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }

// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(7));
////////////////////////////////////////////////////////////////////////////////////////////////////
// // PROBLEM: Given an integer 'n', find the factorial of that integer
// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result = result * i;
//   }
//   return result;
// }

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(5));
///////////////////////////////////////////////////////////////////////////////////////////////////////
// // PROBLEM: Given a natural number 'n', determine if the number is prime or not
// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPrime(1)); // false
// console.log(isPrime(5)); // true
// console.log(isPrime(4)); // false
///////////////////////////////////////////////////////////////////////////////////////////////////////
// PROBLEM: Given a positive integer 'n', determine if the number is a power of 2 or not
// function isPowerOfTwo(n) {
//   if (n < 1) {
//     return false;
//   }
//   return (n & (n - 1)) === 0;
// }
// //   if (n < 1) {
// //     return false;
// //   }
// //   while (n > 1) {
// //     if (n % 2 !== 0) {
// //       return false;
// //     }
// //     n = n / 2;
// //   }
// //   return true;
// // }

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(4));
// console.log(isPowerOfTwo(5));
///////////////////////////////////////////////////////////////////////////////////////////////////
//  RECURSIVE FIBONACCI
// PROBLEM: Given a number 'n', find the nth element of the Fibonacci sequence

// function recursiveFibonacci(n) {
//   if (n < 2) {
//     return n;
//   }
//   return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
// }

// console.log(recursiveFibonacci(0)); //0
// console.log(recursiveFibonacci(1)); //1
// console.log(recursiveFibonacci(6)); //6

// Recursive factorial of a Number
// PROBLEM: Given an interger 'n', find the factorial of that integer
// function recursiveFactorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * recursiveFactorial(n - 1);
// }

// console.log(recursiveFactorial(0));
// console.log(recursiveFactorial(1));
// console.log(recursiveFactorial(5));
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Linear Search
// Problem: Given an arrayof 'n' elements and a target element 't', find the index of 't' in yje array. Return -1 if the tartget element is not found
// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(linearSearch([-5, 2, 10, 4, 6], 10)); //2
// console.log(linearSearch([-5, 2, 10, 4, 6], 6)); //4
// console.log(linearSearch([-5, 2, 10, 4, 6], 20)); //-1
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Binary search
// Problem: Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found
// function binarySearch(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;

//   while (leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (target === arr[middleIndex]) {
//       return middleIndex;
//     }
//     if (target < arr[middleIndex]) {
//       rightIndex = middleIndex - 1;
//     } else {
//       leftIndex = middleIndex + 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch([-5, 2, 4, 6, 10], 10)); //4
// console.log(binarySearch([-5, 2, 4, 6, 10], 6)); //3
// console.log(binarySearch([-5, 2, 4, 6, 10], 20)); //-1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Recursive Binary Search
// Problem: Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found

// function recursiveBinarySearch(arr, target) {
//   return search(arr, target, 0, arr.length - 1);
// }
// function search(arr, target, leftIndex, rightIndex) {
//   if (leftIndex > rightIndex) {
//     return -1;
//   }

//   let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//   if (target === arr[middleIndex]) {
//     return middleIndex;
//   }

//   if (target < arr[middleIndex]) {
//     return search(arr, target, leftIndex, middleIndex - 1);
//   } else {
//     return search(arr, target, middleIndex + 1, rightIndex);
//   }
// }

// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//SORTING ALGORITHMS (TURNKEY QUESTIOON)
// Bubble Sort
//Problem: Given an array of integers, sort the array in ascending order
// function bubbleSort(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }
// const arr = [8, 20, -2, 4, -6];
// bubbleSort(arr);
// console.log(arr); //[-6, -2, 4, 8, 20];
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Bubble Sort (TURNKEY QUESTIOON)
//Problem: Given an array of integers, sort the array in ascending order
// function bubbleSort(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i - 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i - 1];
//         arr[i - 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }
// const arr = [8, 20, -2, 4, -6];
// bubbleSort(arr);
// console.log(arr); //[20, 8, 4, -2, -6];

//INSERTION SORT
// Problem: Given an array of integers, sort the array
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let numberToInsert = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > numberToInsert) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = numberToInsert;
//   }
// }

// const arr = [8, 20, -2, 4, -6];
// insertionSort(arr);
// console.log(arr); //[-6, -2, 4, 8, 20]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//QUICK SORT
// Problem: Given an array of integers, sort the array
// function quickSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let pivot = arr[arr.length - 1];
//   let left = [];
//   right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// const arr = [8, 20, -2, 4, -6];
// console.log(quickSort(arr)); //[-6,-2,4,8,20]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MERGE SORT
// Problem: Given an array of integers, sort the array
// function mergeSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   const mid = Math.floor(arr.length / 2);
//   const leftArr = arr.slice(0, mid);
//   const rightArr = arr.slice(mid);
//   return merge(mergeSort(leftArr), mergeSort(rightArr));
// }

// function merge(leftArr, rightArr) {
//   const sortedArr = [];
//   while (leftArr.length && rightArr.length) {
//     if (leftArr[0] <= rightArr[0]) {
//       sortedArr.push(leftArr.shift());
//     } else {
//       sortedArr.push(rightArr.shift());
//     }
//   }
//   return [...sortedArr, ...leftArr, ...rightArr];
// }

// const arr = [8, 20, -2, 4, -6];
// console.log(mergeSort(arr)); //[-6, -2, 4, 8, 20]
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Cartesian product
//Problem: Given two finite non-empty sets, find their Cartesian Product
// function cartesianProduct(arr1, arr2) {
//   const result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       result.push([arr1[i], arr2[j]]);
//     }
//   }
//   return result;
// }

// const arr1 = [1, 2];
// const arr2 = [3, 4, 5];
// console.log(cartesianProduct(arr1, arr2)); //[[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]]
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Climbing Staircase Solution
// function climbingStaircase(n) {
//   const noOfWays = [1, 2];
//   for (let i = 2; i <= n; i++) {
//     noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
//   }

//   return noOfWays[n - 1];
// }
// console.log(climbingStaircase(1));
// console.log(climbingStaircase(2));
// console.log(climbingStaircase(3));
// console.log(climbingStaircase(4));
// console.log(climbingStaircase(5));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Tower of Hanoi
// Th objective of the puzzle is to move the entire stack to the last rod, obeying the following rules:
// a) Only one disk may be moved at a time
// b) Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod. And lastly,
// c) No disk may be placed on top of a disk that is smaller

// function towerOfHanoi(n, fromRod, toRod, usingRod) {
//   if (n === 1) {
//     console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
//     return;
//   }
//   towerOfHanoi(n - 1, fromRod, usingRod, toRod);
//   console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
//   towerOfHanoi(n - 1, usingRod, toRod, fromRod);
// }
// towerOfHanoi(3, "A", "C", "B");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// (2) DATA STRUCTURES
//SET
// const set = new Set([1, 2, 3]);
// set.add(4);
// console.log(set.has(4));
// set.delete(3);
// console.log(set.size);
// //set.clear();

// for (const item of set) {
//   console.log(item);
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////
//MAP

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
// ]);
// map.set("c", 3); //adding value
// console.log(map.has("a")); //checking value
// map.delete("c");
// console.log(map.size);
// map.clear();

// for (const [key, value] of map) {
//   console.log(`${key}: ${value}`);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////
//STACK

// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(element) {
//     this.items.push(element);
//   }

//   pop() {
//     return this.items.pop();
//   }

//   peek() {
//     return this.items[this.items.length - 1];
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   size() {
//     return this.items.length;
//   }

//   print() {
//     console.log(this.items.toString());
//   }
// }

// const stack = new Stack();
// console.log(stack.isEmpty());

// stack.push(20);
// stack.push(10);
// stack.push(30);
// console.log(stack.size());
// stack.print();

// console.log(stack.pop());
// console.log(stack.peek());
/////////////////////////////////////////////////////////////////////////////////////////////////////
//  QUEUE Implementation
// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element) {
//     this.items.push(element);
//   }

//   dequeue() {
//     return this.items.shift();
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   peek() {
//     if (!this.isEmpty()) {
//       return this.items[0];
//     }
//     return null;
//   }

//   size() {
//     return this.items.length;
//   }

//   print() {
//     console.log(this.items.toString());
//   }
// }

// const queue = new Queue();
// console.log(queue.isEmpty());

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log(queue.size());
// queue.print();

// console.log(queue.dequeue());
// console.log(queue.peek());
////////////////////////////////////////////////////////////////////////////////////////////////////
//  QUEUE Implementation Optimized
// class Queue {
//   constructor() {
//     this.items = {};
//     this.rear = 0;
//     this.front = 0;
//   }

//   enqueue(element) {
//     this.items[this.rear] = element;
//     this.rear++;
//   }

//   dequeue() {
//     const item = this.items[this.front];
//     delete this.items[this.front];
//     this.front++;
//     return item;
//   }
//   isEmpty() {
//     return this.rear - this.front === 0;
//   }

//   peek() {
//     return this.items[this.front];
//   }

//   size() {
//     return this.rear - this.front;
//   }

//   print() {
//     console.log(this.items);
//   }
// }

// const queue = new Queue();
// console.log(queue.isEmpty());

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log(queue.size());
// queue.print();

// console.log(queue.dequeue());
// console.log(queue.peek());

//////////////////////////////////////////////////////////////////////////////////////////////////
//Circular Queue Implementation

// class CircularQueue {
//   constructor(capacity) {
//     this.items = new Array(capacity);
//     this.capacity = capacity;
//     this.currentLength = 0;
//     this.rear = -1;
//     this.front = -1;
//   }

//   isFull() {
//     return this.currentLength === this.capacity;
//   }

//   isEmpty() {
//     return this.currentLength === 0;
//   }

//   enqueue(element) {
//     if (!this.isFull()) {
//       this.rear = (this.rear + 1) % this.capacity;
//       this.items[this.rear] = element;
//       this.currentLength += 1;
//       if (this.front === -1) {
//         this.front = this.rear;
//       }
//     }
//   }
//   dequeue() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     const item = this.items[this.front];
//     this.items[this.front] = null;
//     this.front = (this.front + 1) % this.capacity;
//     this.currentLength -= 1;
//     if (this.isEmpty()) {
//       this.front = -1;
//       this.rear = -1;
//     }
//     return item;
//   }

//   peek() {
//     if (!this.isEmpty()) {
//       return this.items[this.front];
//     }
//     return null;
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("Queue is empty");
//     } else {
//       let i;
//       let str = "";
//       for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
//         str += this.items[i] + "";
//       }
//       str += this.items[i];
//       console.log(str);
//     }
//   }
// }

// const queue = new CircularQueue(5);
// console.log(queue.isEmpty());

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);

// console.log(queue.isFull());
// queue.print();

// console.log(queue.dequeue());
// console.log(queue.peek());
// queue.print();
// queue.enqueue(60);
// queue.print();
//////////////////////////////////////////////////////////////////////////////////////////////////
// Linked List Class

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class Linkedlist {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }

//   getSize() {
//     return this.size;
//   }

//   prepend(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }

//   append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       let prev = this.head;
//       while (prev.next) {
//         prev = prev.next;
//       }
//       prev.next = node;
//     }
//     this.size++;
//   }

//   insert(value, index) {
//     if (index < 0 || index > this.size) {
//       return;
//     }
//     if (index === 0) {
//       this.prepend(value);
//     } else {
//       const node = new Node(value);
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         prev = prev.next;
//       }
//       node.next = prev.next;
//       prev.next = node;
//       this.size++;
//     }
//   }

//   removeFrom(index) {
//     if (index < 0 || index >= this.size) {
//       return null;
//     }
//     let removedNode;
//     if (index === 0) {
//       removedNode = this.head;
//       this.head = this.head.next;
//     } else {
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         prev = prev.next;
//       }
//       removedNode = prev.next;
//       prev.next = removedNode.next;
//     }
//     this.size--;
//     return removedNode.value;
//   }

//   removeValue(value) {
//     if (this.isEmpty()) {
//       return null;
//     }
//     if (this.head.value === value) {
//       this.head = this.head.next;
//       this.size--;
//       return value;
//     } else {
//       let prev = this.head;
//       while (prev.next && prev.next.value !== value) {
//         prev = prev.next;
//       }
//       if (prev.next) {
//         const removedNode = prev.next;
//         prev.next = removedNode.next;
//         this.size--;
//         return value;
//       }
//       return null;
//     }
//   }

//   search(value) {
//     if (this.isEmpty()) {
//       return -1;
//     }
//     let i = 0;
//     let curr = this.head;
//     while (curr) {
//       if (curr.value === value) {
//         return i;
//       }
//       curr = curr.next;
//       i++;
//     }
//     return -1;
//   }

//   reverse() {
//     let prev = null;
//     let curr = this.head;
//     while (curr) {
//       let next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }
//     this.head = prev;
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("List is empty");
//     } else {
//       let curr = this.head;
//       let listValues = "";
//       while (curr) {
//         listValues += `${curr.value} `;
//         curr = curr.next;
//       }
//       console.log(listValues);
//     }
//   }
// }

// const list = new Linkedlist();
// console.log("List is empty?", list.isEmpty());
// console.log("List size", list.getSize());
// list.print();

// list.append(10);
// // list.prepend(10);
// list.print();

// list.append(20);
// // list.prepend(20);
// list.append(30);
// // list.prepend(30);
// list.print();

// list.insert(10, 0);
// list.print();

// list.insert(20, 0);
// list.print();

// list.insert(30, 1);
// list.print();

// list.insert(40, 2);
// list.print();
// console.log(list.getSize());
// console.log("List size", list.getSize());

// console.log(list.removeFrom(10));

// console.log(list.removeFrom(0));
// list.print();

// console.log(list.removeFrom(1));
// list.print();
// console.log(list.getSize());

// console.log(list.removeValue(40));
// list.print();

// console.log(list.removeValue(20));
// list.print();

// console.log(list.removeValue(60));
// list.print();
// console.log(list.getSize());

// console.log(list.search(30));

// const list = new Linkedlist();
// console.log("List is empty? ", list.isEmpty());
// console.log("List size", list.getSize());
// list.print();

// list.insert(10, 0);

// list.insert(20, 0);

// list.insert(30, 1);

// list.insert(40, 2);
// list.print();

// list.reverse();
// list.print();
//////////////////////////////////////////////////////////////////////////////////////////////////
// Linked List Stack

// const LinkedList = require("./linked-list");

// class LinkedListStack {
//   constructor() {
//     this.list = new LinkedList();
//   }

//   push(value) {
//     this.list.prepend(value);
//   }

//   pop() {
//     return this.list.removeFromFront();
//   }

//   peek() {
//     return this.list.head.value;
//   }

//   isEmpty() {
//     return this.list.isEmpty();
//   }

//   getSize() {
//     return this.list.getSize();
//   }

//   print() {
//     return this.list.print();
//   }
// }

// const stack = new LinkedListStack();
// console.log(stack.isEmpty());

// stack.push(20);
// stack.push(10);
// stack.push(30);
// console.log(stack.getSize());
// stack.print();

// console.log(stack.pop());
// console.log(stack.peek());

///////////////////////////////////////////////////////////////////////////////////////////////////
// Linked List Queue

// const LinkedList = require("./linked-list");

// class LinkedListQueue {
//   constructor() {
//     this.list = new LinkedList();
//   }

//   enqueue(value) {
//     this.list.append(value);
//   }

//   dequeue() {
//     return this.list.removeFromFront();
//   }

//   peek() {
//     return this.list.head.value;
//   }

//   isEmpty() {
//     return this.list.isEmpty();
//   }

//   getSize() {
//     return this.list.getSize();
//   }

//   print() {
//     return this.list.print();
//   }
// }

// const queue = new LinkedListQueue();
// console.log(queue.isEmpty());

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log(queue.getSize());
// queue.print();

// console.log(queue.dequeue());
// queue.print();

// console.log(queue.peek());

////////////////////////////////////////////////////////////////////////////////////////////////
//Hash Table Implementation

// class HashTable {
//   constructor(size) {
//     this.table = new Array(size);
//     this.size = size;
//   }

//   hash(key) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//       total += key.charCodeAt(i);
//     }
//     return total % this.size;
//   }

//   set(key, value) {
//     const index = this.hash(key);
//     // this.table[index] = value;
//     const bucket = this.table[index];
//     if (!bucket) {
//       this.table[index] = [[key, value]];
//     } else {
//       const sameKeyItem = bucket.find((item) => item[0] === key);
//       if (sameKeyItem) {
//         sameKeyItem[1] = value;
//       } else {
//         bucket.push([key, value]);
//       }
//     }
//   }

//   get(key) {
//     const index = this.hash(key);
//     // return this.table[index];
//     const bucket = this.table[index];
//     if (bucket) {
//       const sameKeyItem = bucket.find((item) => item[0] === key);
//       if (sameKeyItem) {
//         return sameKeyItem;
//         return sameKeyItem[1];
//       }
//     }
//     return undefined;
//   }

//   remove(key) {
//     const index = this.hash(key);
//     // this.table[index] = undefined;
//     const bucket = this.table[index];
//     if (bucket) {
//       const sameKeyItem = bucket.find((item) => item[0] === key);
//       if (sameKeyItem) {
//         bucket.splice(bucket.indexOf(sameKeyItem), 1);
//       }
//     }
//   }

//   display() {
//     for (let i = 0; i < this.table.length; i++) {
//       if (this.table[i]) {
//         console.log(i, this.table[i]);
//       }
//     }
//   }
// }
// const table = new HashTable(50);

// table.set("name", "Bruce");
// table.set("age", 25);
// table.display();

// console.log(table.get("name"));

// table.set("mane", "Kepha");
// table.set("name", "Diana");
// table.remove("name");
// table.display();

////////////////////////////////////////////////////////////////////////////////////////////
//BINARY SEARCH TREE Class

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   isEmpty() {
//     return this.root === null;
//   }

//   insert(value) {
//     const newNode = new Node(value);
//     if (this.isEmpty()) {
//       this.root = newNode;
//     } else {
//       this.insertNode(this.root, newNode);
//     }
//   }

//   insertNode(root, newNode) {
//     if (newNode.value < root.value) {
//       if (root.left === null) {
//         root.left = newNode;
//       } else {
//         this.insertNode(root.left, newNode);
//       }
//     } else {
//       if (root.right === null) {
//         root.right = newNode;
//       } else {
//         this.insertNode(root.right, newNode);
//       }
//     }
//   }

//   search(root, value) {
//     if (!root) {
//       return false;
//     } else {
//       if (root.value === value) {
//         return true;
//       } else if (value < root.value) {
//         return this.search(root.left, value);
//       } else {
//         return this.search(root.right, value);
//       }
//     }
//   }

//   preOrder(root) {
//     if (root) {
//       console.log(root.value);
//       this.preOrder(root.left);
//       this.preOrder(root.right);
//     }
//   }

//   inOrder(root) {
//     if (root) {
//       this.inOrder(root.left);
//       console.log(root.value);
//       this.inOrder(root.right);
//     }
//   }

//   postOrder(root) {
//     if (root) {
//       this.postOrder(root.left);
//       this.postOrder(root.right);
//       console.log(root.value);
//     }
//   }
//   levelOrder() {
//     //Use the optinized queue implementation
//     const queue = [];
//     queue.push(this.root);
//     while (queue.length) {
//       let curr = queue.shift();
//       console.log(curr.value);
//       if (curr.left) {
//         queue.push(curr.left);
//       }
//       if (curr.right) {
//         queue.push(curr.right);
//       }
//     }
//   }
//   min(root) {
//     if (!root.left) {
//       return root.value;
//     } else {
//       return this.min(root.left);
//     }
//   }

//   max(root) {
//     if (!root.right) {
//       return root.value;
//     } else {
//       return this.max(root.right);
//     }
//   }

//   delete(value) {
//     this.root = this.deleteNode(this.root, value);
//   }

//   deleteNode(root, value) {
//     if (root === null) {
//       return root;
//     }
//     if (value < root.value) {
//       root.left = this.deleteNode(root.left, value);
//     } else if (value > root.value) {
//       root.right = this.deleteNode(root.right, value);
//     } else {
//       if (!root.left && !root.right) {
//         return null;
//       }
//       if (!root.left) {
//         return root.right;
//       } else if (!root.right) {
//         return root.left;
//       }

//       root.value = this.min(root.right);
//       root.right - this.deleteNode(root.right, root.value);
//     }
//     return root;
//   }
// }

// const bst = new BinarySearchTree();
// console.log("Tree is empty? ", bst.isEmpty());

// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);

// console.log(bst.search(bst.root, 10));
// console.log(bst.search(bst.root, 5));
// console.log(bst.search(bst.root, 15));
// console.log(bst.search(bst.root, 5));

// // bst.preOrder(bst.root);
// // bst.inOrder(bst.root);
// // bst.postOrder(bst.root);
// // bst.levelOrder();

// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));

//bst.levelOrder();

// bst.delete(10);
// bst.levelOrder();
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Graph Add Vertex and Edge

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex1].has(vertex2)
    );
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display();
console.log(graph.hasEdge("A", "c"));

// graph.removeEdge("A", "B");
graph.removeVertex("B");
graph.display();
