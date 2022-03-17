const rationOftwo = require("../ratio/index");
const factorialofnum = require("../factorial/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = rationOftwo(num1, num2);
  const factorial = factorialofnum(num3);

  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
