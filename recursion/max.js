function max(arr) {
  if (arr.length === 1) return arr[0];
  const [head, ...tail] = arr;
  const subMax = max(tail);
  return head > subMax ? head : subMax;
}

console.log(max([1])); // => 1
console.log(max([1, 2, 10, 3, 4])); // => 10
