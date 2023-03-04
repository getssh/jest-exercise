import {strLength, reverseString, BasicMath} from "./strLength";

test('Counting string length positive number', () => {
  expect(strLength('hello')).toBe(5);
})
test('Counting string length zero', () => {
  expect(() => strLength('')).toThrow(Error);
})
test('Counting string length not string', () => {
  expect(() => strLength(1)).toThrow(Error);
})
test('Counting string length more that 10 chars', () => {
  expect(() => strLength('Longtext test')).toThrow(Error);
})

//test for reverse string function

test("Reverse string with content", () => {
  expect(reverseString('hello')).toBe('olleh');
})

//test for BasicMath class methods
const math = new BasicMath();

describe('Basic Math Add method', () => {
  test('Add two positive numbers', () => {
    expect(math.add(1,2)).toBe(3);
  })
  test('Add positive number wiht 0', () => {
    expect(math.add(1,0)).toBe(1);
  })
  test('Add positive and negative', () => {
    expect(math.add(1,-2)).toBe(-1);
  })
})

describe('Basic Math sub method', () => {
  test('sub two positive numbers', () => {
    expect(math.sub(1,2)).toBe(-1);
  })
  test('sub positive number from 0', () => {
    expect(math.add(1,0)).toBe(1);
  })
  test('sub two negative nums', () => {
    expect(math.add(-1,-2)).toBe(-3);
  })
})

describe('Basic Math mul method', () => {
  test('mul two positive numbers', () => {
    expect(math.mul(1,2)).toBe(2);
  })
  test('mul positive number with 0', () => {
    expect(math.mul(1,0)).toBe(0);
  })
  test('mul positive and negative', () => {
    expect(math.mul(1,-2)).toBe(-2);
  })
  test('mul negaitve and negative', () => {
    expect(math.mul(-1,-2)).toBe(2);
  })
})

describe('Basic Math di method', () => {
  test('div two positive numbers', () => {
    expect(math.div(2,1)).toBe(2);
  })
  test('div positive number with 0', () => {
    expect(() => math.div(1,0)).toThrow(Error);
  })
  test('Add positive and negative', () => {
    expect(math.div(-2,1)).toBe(-2);
  })
})