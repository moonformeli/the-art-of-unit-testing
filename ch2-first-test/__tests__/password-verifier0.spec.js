const { verifyPassword } = require('../password-verifier0');

test('v0: badly named test', () => {
  // 테스트 준비-함수에 전달할 매개변수를 초기화한다.
  const fakeRule = (input) => ({ passed: false, reason: 'fake reason' });

  // 함수 실행의 인자로 전달한다.
  const errors = verifyPassword('any value', [fakeRule]);

  // 함수의 반환 값을 기대 값과 비교한다.
  expect(errors[0]).toMatch('fake reason');
});

test('v1: the first test', () => {
  const fakeRule = (input) => ({ passed: false, reason: 'fake reason' });

  const errors = verifyPassword('any value', [fakeRule]);
  expect(errors[0]).toMatch('fake reason');
});

test('v1.1 verifyPassword, given a failing rule, returns errors', () => {
  const fakeRule = (input) => ({ passed: false, reason: 'fake reason' });

  const errors = verifyPassword('any value', [fakeRule]);

  expect(errors[0]).toContain('fake reason');
});

describe('v1.2: verifyPassword', () => {
  test('given a failing rule, returns errors', () => {
    const fakeRule = (input) => ({ passed: false, reason: 'fake reason' });

    const errors = verifyPassword('any value', [fakeRule]);

    expect(errors[0]).toContain('fake reason');
  });
});

describe('v1.3: verifyPassword', () => {
  describe('with a failing rule', () => {
    test('returns errors', () => {
      const fakeRule = (input) => ({
        passed: false,
        reason: 'fake reason',
      });
      const errors = verifyPassword('any value', [fakeRule]);

      expect(errors[0]).toContain('fake reason');
    });
  });
});

describe('v1.4: verifyPassword', () => {
  describe('with a failing rule', () => {
    const fakeRule = (input) => ({
      passed: false,
      reason: 'fake reason',
    });
    test('returns errors', () => {
      const errors = verifyPassword('any value', [fakeRule]);

      expect(errors[0]).toContain('fake reason');
    });
  });
});

describe('v1.5: verifyPassword', () => {
  describe('with a failing rule', () => {
    it('returns errors', () => {
      const fakeRule = (input) => ({
        passed: false,
        reason: 'fake reason',
      });
      const errors = verifyPassword('any value', [fakeRule]);

      expect(errors[0]).toContain('fake reason');
    });
  });
});
