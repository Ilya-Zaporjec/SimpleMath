let result;
let totalCount;
let rightAnswer = 0;
let wrongAnswer = 0;
let level = 0;
let firstNumber;
let secondNumber;
// ***********************************Логіка функцій******************************************************************************************
function generateRandomNumbers() {
  firstNumber = Math.floor(Math.random() * 100) + 1;
  secondNumber =
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
function generateSecondRandomNumbers() {
  firstNumber = Math.floor(Math.random() * 10) + 1;
  secondNumber = Math.floor(Math.random() * 10) + 1;

  totalCount = firstNumber * secondNumber;

  document.getElementById("firstCount").textContent = firstNumber;
  document.getElementById("secondCount").textContent = secondNumber;
}
function checksResultMath() {
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
    if (wrongAnswer % 30 == 0) {
      level -= 1;
      document.getElementById("level").textContent = `Рівень: ${level}`;
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
}
function checksResultMultiplikation() {
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
}

function startsGame() {
  const element = document.getElementById("modal");
  element.classList.add("visually-hidden");
  generateSecondRandomNumbers();
  generateRandomNumbers();
}
function help() {
  let message = `Відповідь до завдання №1 :${result} до завдання №2 :${totalCount}`;
  document.getElementById("result").innerHTML = message;
  document.getElementById("result").style.color = "purple";
  setTimeout(function () {
    generateRandomNumbers();
    generateSecondRandomNumbers();
    document.getElementById("result").innerHTML = "";
  }, 2000);
}

// ****************************************Виклик функцій*************************************************************************

// *********************************Блок реєстрації події************************************************************************
document
  .getElementById("checkButton")
  .addEventListener("click", checksResultMath);
document
  .getElementById("checkBtn")
  .addEventListener("click", checksResultMultiplikation);
document.getElementById("help-btn").addEventListener("click", help);
document.getElementById("start-btn").addEventListener("click", startsGame);

// *******************************************Збереження данних***********************************************************************
if (localStorage.getItem("level")) {
  level = parseInt(localStorage.getItem("level"));
  document.getElementById("level").textContent = `Level: ${level}`;
}
