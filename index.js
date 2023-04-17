let result;
let totalCount;
let rightAnswer = 0;
let wrongAnswer = 0;
let level = 0;

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

function generateSecondRandomNumbers() {
  let firstNumber = Math.floor(Math.random() * 10) + 1;
  let secondNumber = Math.floor(Math.random() * 10) + 1;

  totalCount = firstNumber * secondNumber;

  document.getElementById("firstCount").textContent = firstNumber;
  document.getElementById("secondCount").textContent = secondNumber;
}
generateSecondRandomNumbers();

if (localStorage.getItem("level")) {
  level = parseInt(localStorage.getItem("level"));
  document.getElementById("level").textContent = `Level: ${level}`;
}

document.getElementById("checkButton").addEventListener("click", function () {
  let userInput = document.getElementById("userAnswer").value;

  let message;
  if (result == userInput) {
    message = "Результат вірний!Так тримати!";
    document.getElementById("result").innerHTML = message;
    document.getElementById("result").style.color = "blue";
    rightAnswer += 1;
    if (rightAnswer % 10 == 0) {
      level += 1;
      document.getElementById("level").textContent = `Level: ${level}`;
    }
  } else {
    message = "Результат невірний!Будь уважніше.";
    document.getElementById("result").innerHTML = message;
    document.getElementById("result").style.color = "red";
    wrongAnswer += 1;
    if (wrongAnswer % 20 == 0) {
      level -= 1;
      document.getElementById("level").textContent = `Level: ${level}`;
    }
  }

  generateRandomNumbers();
  generateSecondRandomNumbers();

  document.getElementById("userAnswer").value = "";

  document.getElementById(
    "rightAnswer"
  ).textContent = `Правильно: ${rightAnswer}`;
  document.getElementById(
    "wrongAnswer"
  ).textContent = `Неправильно: ${wrongAnswer}`;

  // Inside the event listener function
  localStorage.setItem("level", level.toString());
});
document.getElementById("checkBtn").addEventListener("click", function () {
  let userInput = document.getElementById("userResult").value;

  let message;
  if (totalCount == userInput) {
    message = "Результат вірний!Так тримати!";
    document.getElementById("result").innerHTML = message;
    document.getElementById("result").style.color = "blue";
    rightAnswer += 1;
    if (rightAnswer % 10 == 0) {
      level += 1;
      document.getElementById("level").textContent = `Level: ${level}`;
    }
  } else {
    message = "Результат невірний!Будь уважніше.";
    document.getElementById("result").innerHTML = message;
    document.getElementById("result").style.color = "red";
    wrongAnswer += 1;
    if (wrongAnswer % 20 == 0) {
      level -= 1;
      document.getElementById("level").textContent = `Level: ${level}`;
    }
  }

  generateSecondRandomNumbers();
  generateRandomNumbers();

  document.getElementById("userResult").value = "";

  document.getElementById(
    "rightAnswer"
  ).textContent = `Правильно: ${rightAnswer}`;
  document.getElementById(
    "wrongAnswer"
  ).textContent = `Неправильно: ${wrongAnswer}`;

  // Inside the event listener function
  localStorage.setItem("level", level.toString());
});
