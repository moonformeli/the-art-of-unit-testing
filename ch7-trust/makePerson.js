const makePerson = (x, y) => {
  return {
    name: x,
    age: y,
    type: 'person',
  };
};

module.exports = {
  makePerson,
};
