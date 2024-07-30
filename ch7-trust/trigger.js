const trigger = (x, y, callback) => {
  callback("I'm triggered");
  return x + y;
};

module.exports = {
  trigger,
};
