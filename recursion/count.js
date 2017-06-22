function count([first, ...rest]) {
  if (first == null) return 0;
  return 1 + count(rest);
}

function count2(arr) {
  if (!arr.length) return 0;
  return 1 + count(arr.slice(1));
}

console.log(count([0])); // => 1
console.log(count2([0])); // => 1
console.log(count([0, 1, 2, 3])); // => 4
console.log(count2([0, 1, 2, 3])); // => 4