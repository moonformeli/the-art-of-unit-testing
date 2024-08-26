// 한 번만 일어나고 전역적으로 발생한다.
// 최상단에 위치시킨다.
jest.mock('../../my-data-module', () => ({
  getAllMachines: () => {
    const rebootTwoDaysEarly = new Date(2000, 0, 1);
    const fromDate = new Date(2000, 0, 3);
    return [
      { lastBootTime: rebootTwoDaysEarly, name: 'ignored' },
      { lastBootTime: fromDate, name: 'found' },
    ];
  },
}));

const { findRecentlyRebooted } = require('../../machine-scanner');

describe('findRecentlyRebooted', () => {
  beforeEach(() => jest.resetModules());

  test('given 1 of 2 machines under the threshold, it is found', () => {
    const result = findRecentlyRebooted(1, new Date(2000, 0, 3));

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');
  });
  test('given 1 of 2 machines under the threshold, it is found', () => {
    const result = findRecentlyRebooted(1, new Date(2000, 0, 3));

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');
  });
});
