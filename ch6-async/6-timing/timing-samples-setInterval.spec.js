const Samples = require('./timing-samples');

describe('calculate with intervals', () => {
  beforeEach(() => jest.clearAllTimers());
  beforeEach(() => jest.useFakeTimers());

  test('calculate, incr input/output, calculates correctly', () => {
    let xInput = 1;
    let yInput = 2;
    const inputFn = () => ({ x: xInput++, y: yInput++ }); // 콜백 수를 검증하기 위해 변수를 증가

    const results = [];
    Samples.calculate2(inputFn, (result) => results.push(result));

    jest.advanceTimersToNextTimer(); // setInterval을 한 번 호출
    jest.advanceTimersToNextTimer(); // setInterval을 두 번 호출

    expect(results[0]).toBe(3);
    expect(results[1]).toBe(5);
  });
});
