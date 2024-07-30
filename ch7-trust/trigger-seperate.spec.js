const { trigger } = require('./trigger');

describe('trigger', () => {
  it('triggers a given callback', () => {
    const callback = jest.fn();
    trigger(1, 2, callback);
    expect(callback).toHaveBeenCalledWith("I'm triggered");
  });

  it('sums up given values', () => {
    const result = trigger(1, 2, jest.fn());
    expect(result).toBe(3);
  });
});
