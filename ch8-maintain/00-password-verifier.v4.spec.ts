import Substitute from '@fluffy-spoon/substitute';
import { PasswordVerifier4 } from './00-password-verifier.v4';
import { IComplicatedLogger } from './interfaces/complicated-logger';

describe('verifier 4', () => {
  describe('overspecify protected function call', () => {
    test('checkFailedRules is called', () => {
      const pv4 = new PasswordVerifier4(
        [],
        Substitute.for<IComplicatedLogger>()
      );

      const failedMock = jest.fn(() => []);
      pv4['findFailedRules'] = failedMock;

      pv4.verify('abc');

      expect(failedMock).toHaveBeenCalled();
    });
  });
});
