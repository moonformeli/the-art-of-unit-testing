import Substitute, { Arg } from '@fluffy-spoon/substitute';
import { IComplicatedLogger } from './interfaces/complicated-logger';
import { PasswordVerifier } from './PasswordVerifier';

describe('password verifier', () => {
  let mockLog;
  beforeEach(() => {
    mockLog = Substitute.for<IComplicatedLogger>();
  });

  test('verify, with logger & passing, calls logger with PASS', () => {
    const verifier = new PasswordVerifier([], mockLog);
    verifier.verify('anything');

    mockLog.received().info(
      Arg.is((x) => x.includes('PASSED')),
      'verify'
    );
  });
});
