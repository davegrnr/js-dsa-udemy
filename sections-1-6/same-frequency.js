function sameFrequency(num1, num2) {
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let digit of num1.toString()) {
    frequencyCounter1[digit]
      ? (frequencyCounter1[digit] += 1)
      : (frequencyCounter1[digit] = 1);
  }
  for (let digit of num2.toString()) {
    frequencyCounter2[digit]
      ? (frequencyCounter2[digit] += 1)
      : (frequencyCounter2[digit] = 1);
  }
  for (let digit in frequencyCounter1) {
    if (frequencyCounter1[digit] !== frequencyCounter2[digit]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(14, 34));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
