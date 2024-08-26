// 가짜 모듈에서 데이터 주입 헬퍼를 필요로 한다.
// const {  } = require('../../my-data-module');
const fakeDataFromModule = (fakeData) => {
  jest.doMock('../../my-data-module', () => ({
    getAllMachines: () => fakeData,
  }));
};

jest.mock('../../my-data-module', () => ({
  // 스텁 헬퍼 함수를 주입한다.
  fakeDataFromModule: (data) => {
    this.data = data;
  },

  getAllMachines: () => {
    return this.data;
  },
}));

describe('findRecentlyRebooted', () => {
  beforeEach(jest.resetModules);

  test('given no machines, returns empty results', () => {
    const someDate = new Date(2000, 0, 1);
    fakeDataFromModule([]);

    const { findRecentlyRebooted } = require('../../machine-scanner');
    const result = findRecentlyRebooted(0, someDate);

    expect(result.length).toBe(0);
  });

  test('given one machine over the threshold, it is ignored', () => {
    const fromDate = new Date(2000, 0, 3);
    const rebootTwoDaysEarly = new Date(2000, 0, 1);
    const machines = [{ lastBootTime: rebootTwoDaysEarly, name: 'machine1' }];
    fakeDataFromModule(machines);

    const { findRecentlyRebooted } = require('../../machine-scanner');
    const result = findRecentlyRebooted(1, fromDate);

    expect(result.length).toBe(0);
  });

  test('given one of two machines under the threshold, it is found', () => {
    const fromDate = new Date(2000, 0, 3);
    const rebootTwoDaysEarly = new Date(2000, 0, 1);
    fakeDataFromModule([
      { lastBootTime: rebootTwoDaysEarly, name: 'ignored' },
      { lastBootTime: fromDate, name: 'found' },
    ]);
    const { findRecentlyRebooted } = require('../../machine-scanner');
    const result = findRecentlyRebooted(1, fromDate);

    expect(result.length).toBe(1);
    expect(result[0].name).toContain('found');
  });

  test('given 1 machine less than threshold, returns its name and boot time', () => {
    const fromDate = new Date(2000, 0, 1);
    const machines = [{ lastBootTime: fromDate, name: 'any-name' }];
    fakeDataFromModule(machines);

    const { findRecentlyRebooted } = require('../../machine-scanner');
    const result = findRecentlyRebooted(1, fromDate);

    expect(result.length).toBe(1);
  });
});
