let result;
let rightAnswer = 0;
let wrongAnswer = 0;

function generateRandomNumbers() {
  let firstNumber = Math.floor(Math.random() * 100) + 1;
  let secondNumber =
    firstNumber >= 100
      ? 0
      : Math.floor(Math.random() * (100 - firstNumber)) + 1;

  if (firstNumber > secondNumber) {
    result = firstNumber - secondNumber;
  } else {
    result = firstNumber + secondNumber;
  }

  document.getElementById("firstNumber").textContent = firstNumber;
  document.getElementById("secondNumber").textContent = secondNumber;
  document.getElementById("operator").textContent =
    firstNumber > secondNumber ? "-" : "+";
}

generateRandomNumbers();
document.getElementById("checkButton").addEventListener("click", function () {
  let userInput = document.getElementById("userAnswer").value;

  let message;
  if (result == userInput) {
    message = "Результат вірний!Молодець";
    document.getElementById("result").innerHTML = message;
    document.getElementById("result").style.color = "#4CAF50";
    rightAnswer += 1;
  } else {
    message = "Результат невірний!Будь уважніше.";
    document.getElementById("result").innerHTML = message;
    document.getElementById("result").style.color = "red";
    wrongAnswer += 1;
  }

  generateRandomNumbers();

  document.getElementById("userAnswer").value = "";

  document.getElementById(
    "rightAnswer"
  ).textContent = `Правильно: ${rightAnswer}`;
  document.getElementById(
    "wrongAnswer"
  ).textContent = `Неправильно: ${wrongAnswer}`;
});
