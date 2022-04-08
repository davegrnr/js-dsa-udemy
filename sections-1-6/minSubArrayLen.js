function minSubArrayLen(arr, sum) {
  let minLength = Infinity;
  let total = 0;
  let i = 0;
  let j = 0;

  while (i < arr.length) {
    if (total < sum && j < arr.length) {
      total += arr[j];
      j++;
    } else if (total >= sum) {
      minLength = Math.min(minLength, j - i);
      total -= arr[i];
      i++;
    } else {
      break;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
