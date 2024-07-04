const originalDependencies = {
  log: require('./complicated-logger'),
};

let dependencies = { ...originalDependencies };

const resetDependencies = () => {
  dependencies = { ...originalDependencies };
};

const injectDependencies = (fakes) => {
  Object.assign(dependencies, fakes);
};

const verifyPassword = (input, rules) => {
  const failed = rules
    .map((rule) => rule(input))
    .filter((result) => result === false);

  if (failed.length === 0) {
    dependencies.log.info('PASSED');
    return true;
  }
  dependencies.log.info('FAIL');
  return false;
};

module.exports = {
  verifyPassword,
  injectDependencies,
  resetDependencies,
};
