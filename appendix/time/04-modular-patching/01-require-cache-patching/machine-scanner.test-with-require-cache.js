const assert = require('assert');
const { check } = require('./custom-test-framework');

const dataModulePath = require.resolve('../my-data-module');

const fakeDataFromModule = (fakeData) => {
  delete require.cache[dataModulePath];
  require.cache[dataModulePath] = {
    id: dataModulePath,
    filename: dataModulePath,
    loaded: true,
    exports: {
      getAllMachines: () => fakeData,
    },
  };
  require(dataModulePath);
};

const requireAndCall_findRecentlyRebooted = (maxDays, fromDate) => {
  const { findRecentlyRebooted } = require('../machine-scanner');
  return findRecentlyRebooted(maxDays, fromDate);
};

// 이 테스트는 제스트에서는 돌아가지 않는다.
// 제스트는 내부적으로 require.cache를 무시하기 때문이다.
// 자스민과 같은 다른 프레임워크에서는 정상적응로 동작한다.
// 실행하려면 다음 명령을 실행하면 된다.
// node appendix/04-modular-patching/01-require-cache-patching/machine-scanner.test-with-require-cache.js
check('given 1 of 2 machines under the threshold, it is found', () => {
  const rebootTwoDaysEarly = new Date(2000, 0, 1);
  const fromDate = new Date(2000, 0, 3);
  fakeDataFromModule([
    { lastBootTime: rebootTwoDaysEarly, name: 'ignored' },
    { lastBootTime: fromDate, name: 'found' },
  ]);

  const result = requireAndCall_findRecentlyRebooted(1, fromDate);
  assert(result.length === 1);
  assert(result[0].name.includes('found'));
});
