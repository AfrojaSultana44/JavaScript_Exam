function QuestionsMarks(str) {
  let lastDigit = null;
  let secondLastDigit = null;
  let questionMarkCount = 0;

  const hasThreeQuestionMarks = () => questionMarkCount === 3;
  const addUpTo10 = (digit1, digit2) => digit1 + digit2 === 10;

  for (let char of str) {
    if (!isNaN(char)) {
      secondLastDigit = lastDigit;
      lastDigit = parseInt(char);
      if (addUpTo10(lastDigit, secondLastDigit) && hasThreeQuestionMarks()) {
        return true;
      }
      questionMarkCount = 0;
    } else if (char === '?') {
      questionMarkCount++;
    }
  }
  return false;
}
console.log(QuestionsMarks('arrb6???4xxbl5???eee5'));
