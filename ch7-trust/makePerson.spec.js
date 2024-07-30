const { makePerson } = require('./makePerson');

describe('makePerson', () => {
  it('creates person given passed in values', () => {
    const result = makePerson('name', 1);
    expect(result.name).toBe('name');
    expect(result.age).toBe(1);
  });
});
