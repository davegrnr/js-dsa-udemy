function recursiveRange(num) {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6));
console.log(recursiveRange(10));
