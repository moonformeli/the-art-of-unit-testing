const { verifyPassword } = require('./verifyPassword');

describe('password verifier', () => {
  test('on weekends, throws exceptions', () => {
    expect(() => verifyPassword('jhGGu78!', [], 0)).toThrowError(
      "It's the weekend!"
    );
  });
});
