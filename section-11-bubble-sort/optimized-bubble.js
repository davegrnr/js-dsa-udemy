function optimizedBubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(optimizedBubbleSort([1, 5, 3, 9, 10, 20, 15]));
console.log(optimizedBubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
