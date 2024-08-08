const { verifyPassword2 } = require('./verifyPassword-v2');

describe('verifier2 - dummy object', () => {
  test('on weekends, throws exceptions', () => {
    const SUNDAY = 0,
      NO_RULES = [];
    expect(() => verifyPassword2('anything', NO_RULES, SUNDAY)).toThrowError(
      "It's the weekend!"
    );
  });
});
