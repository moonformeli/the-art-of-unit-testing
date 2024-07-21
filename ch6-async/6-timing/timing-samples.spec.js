const Samples = require('./timing-samples');

describe('monkey patching', () => {
  let originalTimeOut;
  beforeEach(() => (originalTimeOut = setTimeout));
  afterEach(() => (setTimeout = originalTimeOut));

  test('calculate1', () => {
    setTimeout = (callback, ms) => callback();
    Samples.calculate1(1, 2, (result) => {
      expect(result).toBe(3);
    });
  });
});
