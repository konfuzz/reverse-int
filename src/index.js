module.exports = function reverse(n) {
  return [...n.toString()].reverse().join('').replace('-', '');
};
