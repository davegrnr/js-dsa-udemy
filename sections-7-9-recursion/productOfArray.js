function productOfArray(arr, idx = arr.length - 1) {
  if (idx < 0) return 1;
  let x = arr[idx];
  return x * productOfArray(arr, idx - 1);
}

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));
