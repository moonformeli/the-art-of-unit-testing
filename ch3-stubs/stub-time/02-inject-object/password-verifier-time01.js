const SUNDAY = 0;
const MONDAY = 1;
const SATURDAY = 6;

class PasswordVerifier {
  constructor(rules, dayOfWeekFn) {
    this.rules = rules;
    this.dayOfWeek = dayOfWeekFn;
  }
  verify(input) {
    if ([SATURDAY, SUNDAY].includes(this.dayOfWeek())) {
      throw new Error("It's the weekend!");
    }
    const errors = [];
    //more code goes here..
    return errors;
  }
}

module.exports = { SUNDAY, MONDAY, PasswordVerifier };
