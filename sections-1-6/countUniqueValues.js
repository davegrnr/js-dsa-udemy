function countUniqueValues(arr) {
  if (!arr.length) return 0;
  let count = 1;
  let mid = Math.floor(arr.length / 2);
  let left = 0;
  let right = arr.length - 1;
  while (left <= mid && right >= mid) {
    if (arr[right] === arr[left]) {
      return count;
    }
    if (arr[right] === arr[right - 1]) {
      right--;
    } else {
      count += 1;
      right--;
    }
    if (arr[left] === arr[left + 1]) {
      left++;
    } else {
      count += 1;
      left++;
    }
  }
  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
