// function findLongestSubstring(str) {
//   if (!str.length) return null;
//   if (str.length === 1) return 1;
//   let frequencyCounter = {};
//   let count = 1;
//   let longest = Infinity;
//   let start = 0;
//   let end = 1;

//   frequencyCounter[str[start]] = (frequencyCounter[str[start]] || 0) + 1;
//   for (let key in frequencyCounter) {
//     if (frequencyCounter[key] > 1) {
//       start++;
//       frequencyCounter = [str[start]] = (frequencyCounter[str[start]] || 0) + 1;
//       count = 1;
//       end = start + 1;
//     } else {
//       count++;
//     }
//   }
//   while (start < str.length) {
//     let tempCount = count;
//     frequencyCounter[str[end]] = (frequencyCounter[str[end]] || 0) + 1;
//     tempCount++;
//     end++;
//     longest = Math.max(tempCount, count);
//     if (end > str.length) {
//       break;
//     }
//   }
//   return longest;
// }

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring("rithmschool"));
