const { isName } = require('./isName');

describe('isName', () => {
  const namesToTest = ['firstOnly', 'first second', ''];

  it('correctly finds out if it is a name', () => {
    namesToTest.forEach((name) => {
      const result = isName(name);
      if (name.includes(' ')) {
        expect(result).toBe(true);
      } else {
        expect(result).toBe(false);
      }
    });
  });
});
