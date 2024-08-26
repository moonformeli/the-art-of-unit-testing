const check = (name, implementation) => {
  try {
    implementation();
    console.log(`${name} passed`);
  } catch (e) {
    console.log(`${name} FAILED`, e);
  }
};

module.exports = {
  check,
};
