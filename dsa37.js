// Second largest 
const secondLargest = arr => [...new Set(arr)].sort((a, b) => b - a)[1];
console.log(secondLargest([3, 1, 4, 4, 2])); // 3

