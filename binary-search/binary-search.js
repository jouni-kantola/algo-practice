function binarySearch(arr, item) {
  let low = 0, high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];

    if (guess === item) return mid;

    if (guess > item) high = mid - 1;
    else low = mid + 1;
  }

  return undefined;
}

const values = [1, 3, 5, 7, 9];

// O(log n)
console.log(binarySearch(values, 5)); // => 2
console.log(binarySearch(values, 3)); // => 1
console.log(binarySearch(values, -1)); // => undefined
