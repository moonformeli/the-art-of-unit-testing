import { PasswordVerifier2 as PasswordVerifier } from './01-password-verifier';
import { RealLogger } from './real-logger';

describe('password verifier with interfaces', () => {
  test('verify, with logger, calls logger', () => {
    const testableLog: RealLogger = new RealLogger();
    let logged = '';
    testableLog.info = (text) => (logged = text);

    const verifier = new PasswordVerifier([], testableLog);
    verifier.verify('any input');

    expect(logged).toMatch(/PASSED/);
  });
});

class TestableLogger extends RealLogger {
  logged = '';
  info(text) {
    this.logged = text;
  }
  // error() 함수와 debug() 함수는 덮어쓰이지 않았다.
}

describe('partial mock with inheritance', () => {
  test('verify with logger, calls logger', () => {
    const mockLog: TestableLogger = new TestableLogger();

    const verifier = new PasswordVerifier([], mockLog);
    verifier.verify('any input');

    expect(mockLog.logged).toMatch(/PASSED/);
  });
});
