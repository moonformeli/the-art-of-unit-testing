const sum = (numbers) => {
  if (numbers.length > 0) {
    return parseInt(numbers);
  }
  return 0;
};

describe('sum with regular tests', () => {
  test('sum number 1', () => {
    const result = sum('1');
    expect(result).toBe(1);
  });
  test('sum number 2', () => {
    const result = sum('2');
    expect(result).toBe(2);
  });
});

describe('sum with parameterized tests', () => {
  test.each([
    ['1', 1],
    ['2', 2],
  ])('add %s, returns that number', (input, expected) => {
    const result = sum(input);
    expect(result).toBe(expected);
  });
});
