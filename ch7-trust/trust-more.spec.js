const trust = require('./trust-more');

describe('makeGreeting', () => {
  it('returns correct greeting for name', () => {
    const result = trust.makeGreeting('abc');
    // 하드코딩된 값을 사용
    expect(result).toBe('hello abc');
  });
});
