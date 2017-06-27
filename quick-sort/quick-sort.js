const quicksort = arr => {
  if (arr.length < 2) return arr;

  const [pivot, ...rest] = arr;
  const less = rest.filter(x => x <= pivot);
  const greater = rest.filter(x => x > pivot);

  return [...quicksort(less), pivot, ...quicksort(greater)];
};

console.log(quicksort([15, 11, 10, 30, 20]));
