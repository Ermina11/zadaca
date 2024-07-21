let newResult = 0;

btnAdd1.addEventListener("click", function () {
  add(1);
});

btnAdd5.addEventListener("click", function () {
  add(5);
});
btnAdd10.addEventListener("click", function () {
  add(10);
});

btnSub1.addEventListener("click", function () {
  sub(1);
});

btnSub5.addEventListener("click", function () {
  sub(5);
});
btnSub10.addEventListener("click", function () {
  sub(10);
});

function add(value) {
  newResult = newResult + value;
  resultOutput.textContent = newResult;
  console.log(resultOutput);
}

function sub(value) {
  newResult = newResult - value;
  resultOutput.textContent = newResult;
  console.log(resultOutput);
}
