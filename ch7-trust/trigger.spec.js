const { trigger } = require('./trigger');

describe('trigger', () => {
  it('works', () => {
    const callback = jest.fn();
    const result = trigger(1, 2, callback);
    expect(result).toBe(3);
    expect(callback).toHaveBeenCalledWith("I'm triggered");
  });
});
