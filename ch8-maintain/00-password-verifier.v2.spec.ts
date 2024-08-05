import { PasswordVerifier } from './00-password-verifier.v1';
import { ILogger } from './interfaces/logger';

describe('password verifier 1', () => {
  const makeFakeLogger = () => {
    return { info: jest.fn() };
  };

  const makePasswordVerifier = (
    rules: ((input) => boolean)[],
    fakeLogger: ILogger = makeFakeLogger()
  ) => {
    return new PasswordVerifier(rules, fakeLogger);
  };

  it('passes with zero rules', () => {
    const verifier = makePasswordVerifier([]);
    const result = verifier.verify('any input');
    expect(result).toBe(true);
  });
});
