function areThereDuplicates() {
  if (!arguments) return null;
  let frequencyCounter = {};
  for (let el in arguments) {
    frequencyCounter[arguments[el]] =
      (frequencyCounter[arguments[el]] || 0) + 1;
    console.log(frequencyCounter);
  }
  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) return true;
  }
  return false;
}
console.log(areThereDuplicates("a", "b", "c", "a"));
console.log(areThereDuplicates(1, 2, 3));
