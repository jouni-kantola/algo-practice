const binarySearch = (arr, value) => {
  if (!arr.length) return undefined;

  const search = (low = 0, high = arr.length - 1) => {
    if (low > high) return undefined;

    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid];
    if (guess === value) {
      return mid;
    } else if (guess > value) {
      return search(low, mid - 1);
    } else {
      return search(mid + 1, high);
    }
  };

  return search();
};

console.assert(binarySearch([]) === undefined);
console.assert(binarySearch([], -1) === undefined);
console.assert(binarySearch([10], 10) === 0);
console.assert(binarySearch([10, 20], 20) === 1);
console.assert(binarySearch([0, 2, 4, 6, 10, 20, 30, 40], 2) === 1);
console.assert(binarySearch([0, 2, 4, 6, 10, 20, 30, 40], 20) === 5);
