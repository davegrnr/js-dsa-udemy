function myMerge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let output = [];

  while (i < arr1.length) {
    if (arr1[i] < arr2[j]) {
      output.push(arr1[i]);
      i++;
    } else {
      output.push(arr2[j]);
      j++;
    }
  }
  while (j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      output.push(arr1[i]);
      i++;
    } else {
      output.push(arr2[j]);
      j++;
    }
  }
  return output;
}

// console.log(myMerge([1, 10, 50], [2, 14, 99, 100]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(arr1, arr2) {
  let sortedArr = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j] || j === arr2.length) {
      sortedArr.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j] || i === arr1.length) {
      sortedArr.push(arr2[j]);
      j++;
    }
  }
  return sortedArr;
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));
console.log(mergeSort([1, 5, 3, 8, 4, 22, 17, 50, 43, 91, 88]));
