import m from "./multiply";

function add(a, b) {
  return a + b;
}

export const divide = function divide(a, b) {
  return a / b;
};

export const multiply = m;

export default add;
