function secondLargest(arr) {
    let max = -Infinity, second = -Infinity;
    for (let num of arr) {
        if (num > max) {
            second = max;
            max = num;
        } else if (num > second && num < max) {
            second = num;
        }
    }
    return second;
}

console.log(secondLargest([3, 5, 1, 2, 4])); // 4
