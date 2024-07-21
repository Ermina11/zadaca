const passInput = document.getElementById("input-password");
const passInputNew = document.getElementById("new-password");
const form = document.getElementById("form");

form.addEventListener("submit", showPassword);

function showPassword(event) {
  // prevents form submission and reload of page
  event.preventDefault();
  passInputNew.textContent = passInput.value;
}
