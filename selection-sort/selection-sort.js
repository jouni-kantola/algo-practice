function findSmallest(arr) {
  let smallest = arr[0], smallestIndex = 0;
  const length = arr.length;

  for (let i = 1; i < length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function selectionSort(arr) {
  const sortedArr = [];

  while (arr.length) {
    const smallestIndex = findSmallest(arr);
    const smallest = arr[smallestIndex];

    sortedArr.push(smallest);
    arr.splice(smallestIndex, 1);
  }

  return sortedArr;
}

function selectionSort2(arr) {
  const length = arr.length;
  let smallestIndex, temp;

  for (let i = 0; i < length; i++) {
    smallestIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[smallestIndex];
    arr[smallestIndex] = temp;
  }
  return arr;
}

// O(n^2)
console.log(selectionSort2([5, 3, 6, 2, 10]));
