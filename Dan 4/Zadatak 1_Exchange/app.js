const userInput = document.getElementById("input-text");
const heading = document.getElementById("header");
const btnExchange = document.getElementById("exchangeBtn");

btnExchange.addEventListener("click", exchange);

function exchange() {
  let text = userInput.value;
  heading.innerText = text;
}
