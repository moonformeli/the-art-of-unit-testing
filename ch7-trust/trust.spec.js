const trust = require('./trust');

describe('makeGreeting', () => {
  it('returns correct greeting for name', () => {
    const name = 'abc';
    const result = trust.makeGreeting(name);
    expect(result).toBe('hello' + name);
  });
});
