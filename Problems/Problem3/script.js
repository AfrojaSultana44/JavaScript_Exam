function LongestWord(sen) {
  const words = sen.replace(/[^\w\s]/g, '').split(/\s+/);

  let maxLength = 0;
  let longestWord = '';

  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(LongestWord('Hello world123 567'));
