module.exports = function toReadable (number) {
  let n = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    // 0: "zero",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "forteen",
    15: "fifteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  };

  let arN = number.toString().split("");
  let biba = 1;
  arN = arN.reverse();
  // for (num of sNumber) {
  //   console.log(n[Number(num)]);
  // }
  let res = [];
  let newArr = [];
  for (let num of arN) {
    num *= biba;
    newArr.unshift(num);
    biba *= 10;
  }

  for (let numba of newArr) {
    if (numba == 1000) {
      res.push("one thousand");
    } else if (numba > 1000) {
      numba = Math.trunc(numba / 1000);
      res.push(n[numba] + " thousand");
    } else if (numba == 100) {
      res.push("one hundred");
    } else if (numba > 100 && numba < 1000) {
      numba = Math.trunc(numba / 100);
      res.push(n[numba] + " hundred");
    } else {
      res.push(n[numba]);
    }
  }
  return res.join(" ");
}
