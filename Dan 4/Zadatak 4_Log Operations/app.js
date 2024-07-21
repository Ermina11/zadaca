const userInput1 = document.getElementById("input-number1");
const userInput2 = document.getElementById("input-number2");
const btnLog = document.getElementById("log-operations");

btnLog.addEventListener("click", log);

function log() {
  let number1 = parseInt(userInput1.value);
  let number2 = parseInt(userInput2.value);
  let result = number1 + number2;
  console.log(number1 + "+" + number2 + "=" + result);
  result = number1 - number2;
  console.log(number1 + "-" + number2 + "=" + result);
  result = number1 * number2;
  console.log(number1 + "*" + number2 + "=" + result);

  if (number2 == 0) {
    console.log("Can not be divided with 0");
  } else {
    result = number1 / number2;
    console.log(number1 + "/" + number2 + "=" + result);
  }
}
