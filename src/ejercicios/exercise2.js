export function sum(num1, num2) {
  const sumHelper = function (num) {
    return num1 + num;
  };
  return (num2 ?? true) === true ? sumHelper : num1 + num2;
}
