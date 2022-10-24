// 1). Create a function that finds the maximum range of a triangle's
// third edge, where the side lengths are all integers.
// Examples
// nextEdge(8, 10) ➞ 17
// nextEdge(5, 7) ➞ 11
// nextEdge(9, 2) ➞ 10
// Notes
// ● (side1 + side2) - 1 = maximum range of third edge.
// ● The side lengths of the triangle are positive integers.
// ● Don't forget to return the result.

function prog1(a, b) {
  return a + b - 1;
}

// console.log(prog1(8, 10))

// 2). The right shift operation is similar to floor division by powers of
// two. Write a function that mimics (without the use of >>) the right
// shift operator and returns the result from the two given integers. Try
// to solve this challenge by recursion.

//only for positive inputs
function rightShift(a, b) {
  let bin = strToBin(a).toString();
  let r1;

  if (a > 0 && b < bin.length) {
    r1 = bin
      .split("")
      .slice(0, bin.length - b)
      .join("");
  } else {
    r1 = 0;
  }

  let result = binToStr(r1);
  return result;
}

const strToBin = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return Number.parseInt(`${strToBin(Math.floor(n / 2))}` + `${n % 2}`);
};

function binToStr(n) {
  if (n === "end") {
    return 0;
  }
  let a = n.toString();
  let b;
  if (a.length === 1) {
    b = "end";
  } else {
    b = a.split("").slice(1).join("");
  }
  let d = a.split("").map(Number);

  return d[0] * 2 ** (d.length - 1) + binToStr(b);
}

// console.log(rightShift(12, 2));
// console.log(12 >> 2);

// 3). Create a function that takes numbers b and m as arguments and
// returns the second derivative of the function f(x)=x^b +x* (e^(b*m))
// with respect to x evaluated at x=m, where b and m are constants.

function prog3(b, m) {
  return b * (b - 1) * m ** (b - 2) + m * 2.72 ** (b * m);
}

// console.log(prog3(2, 3))

// 4). This Triangular Number Sequence is generated from a pattern of
// dots that form a triangle. The first 5 numbers of the sequence, or
// dots, are:
// 1, 3, 6, 10, 15
// This means that the first triangle has just one dot, the second one
// has three dots, the third one has 6 dots and so on.
// Write a function that returns the cumulative sum of the number of
// all the previous (including current) dots when given its
// corresponding triangle number of the sequence.

// Figure: Triangular Number Sequence

// Examples
// triangle(1) ➞ 1
// triangle(6) ➞ 56 (1+3+6+10+15+21)

function prog4(n) {
  let sum = 0;
  let num = 0;
  for (let i = 1; i < n + 1; i++) {
    num += i;
    sum += num;
  }
  return sum;
}

// console.log(prog4(6))

// 5). Given a total due and an array representing the amount of
// change in your pocket, determine whether or not you are able to pay
// for the item. Change will always be represented in the following
// order: quarters, dimes, nickels, pennies.
// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true,
// since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives
// you 6.25 + 2 + .25 + 0 = 8.50.
// Examples
// changeEnough([2, 100, 0, 0], 14.11) ➞ false

// changeEnough([0, 0, 20, 5], 0.75) ➞ true
// changeEnough([30, 40, 20, 5], 12.55) ➞ true
// Notes
// ● quarter: 25 cents / $0.25
// ● dime: 10 cents / $0.10
// ● nickel: 5 cents / $0.05
// ● penny: 1 cent / $0.01

function changeEnough(arr, amount) {
  const sum = arr[0] * 0.25 + arr[1] * 0.1 + arr[2] * 0.05 + arr[3] * 0.01;
  return sum >= amount;
}

// console.log(changeEnough([30, 40, 20, 5], 12.55))
