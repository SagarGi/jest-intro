function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function modulo(a, b) {
  return a % b;
}

function applySomeOfAbove() {
  const sum = this.add(5, 2)
  return sum + multiply(2,2)
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  applySomeOfAbove
}
