const { SUNDAY, MONDAY } = require('./password-verifier-time01');

const { PasswordVerifier } = require('./password-verifier-time01');

describe('refactored with constructor', () => {
  const makeVerifier = (rules, dayFn) => {
    return new PasswordVerifier(rules, dayFn);
  };

  test('class constructor: on weekends, throws exceptions', () => {
    const alwaysSunday = () => SUNDAY;
    const verifier = makeVerifier([], alwaysSunday);
    expect(() => verifier.verify('anything')).toThrow("It's the weekend!");
  });

  test('class constructor: on weekdays, with no rules, passes', () => {
    const alwaysMonday = () => MONDAY;
    const verifier = makeVerifier([], alwaysMonday);
    const result = verifier.verify('anything');
    expect(result.length).toBe(0);
  });
});
