function reverseArray(a) {
    let reversedArray = [];
    for (let i = a.length - 1; i >= 0; i--) {
        reversedArray.push(a[i]);
    }
    return reversedArray;
}

// Example usage
let originalArray = [1, 2, 3, 4, 5];
let reversedArray = reverseArray(originalArray);
console.log(reversedArray);
