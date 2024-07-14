import { Substitute } from '@fluffy-spoon/substitute';
import { PasswordVerifier3 } from './00-password-verifier';
import { MaintenanceWindow } from './maintenance-window';
import { IComplicatedLogger } from './interfaces/complicated-logger';

const makeVerifierWithNoRules = (log, maint) =>
  new PasswordVerifier3([], log, maint);

describe('working with substitute part 2', () => {
  test('verify, during maintenance, calls logger', () => {
    const stubMaintWindow = Substitute.for<MaintenanceWindow>();
    stubMaintWindow.isUnderMaintenance().returns(true);
    const mockLog = Substitute.for<IComplicatedLogger>();
    const verifier = makeVerifierWithNoRules(mockLog, stubMaintWindow);

    verifier.verify('anything');

    mockLog.received().info('Under Maintenance', 'verify');
  });

  test('verify, outside maintenance, calls logger', () => {
    const stubMaintWindow = Substitute.for<MaintenanceWindow>();
    stubMaintWindow.isUnderMaintenance().returns(false);
    const mockLog = Substitute.for<IComplicatedLogger>();
    const verifier = makeVerifierWithNoRules(mockLog, stubMaintWindow);

    verifier.verify('anything');

    mockLog.received().info('PASSED', 'verify');
  });
});
