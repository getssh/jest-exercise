export function strLength(str) {
  if (str.length >= 1 && str.length <= 10) {
    return str.length;
  } else {
    throw new Error("Length less that one");
  }
}

export function reverseString(str) {
  let reversedStr = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversedStr += str[i];
  }

  return reversedStr;
}

export class BasicMath {
  constructor(numOne, numTwo) {
    this.numOne = numOne;
    this.numTwo = numTwo;
  }

  add(num1, num2) {
    return num1 + num2;
  }
  sub(num1, num2) {
    return num1 - num2;
  }
  mul(num1, num2) {
    return num1 * num2;
  }
  div(num1, num2) {
    if (num2 === 0) {
      throw new Error('Division by zero');
    }
    return num1 / num2;
  }
}