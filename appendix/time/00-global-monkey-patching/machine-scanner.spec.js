const { findRecentlyRebooted } = require('./machine-scanner');

describe('v1 findRecentlyRebooted', () => {
  test('given 1 of 2 machines under threshold, it is found', () => {
    const originalNow = Date.now;
    const fromDate = new Date(2000, 0, 3);
    Date.now = () => fromDate.getTime();

    const rebootTwoDaysEarly = new Date(2000, 0, 1);
    const machines = [
      { lastBootTime: rebootTwoDaysEarly, name: 'ignored' },
      { lastBootTime: fromDate, name: 'found' },
    ];

    const result = findRecentlyRebooted(machines, 1, fromDate);

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');

    Date.now = originalNow;
  });
});
