module.exports = function reverse (n) {
  let str = Math.abs(n).toString();
  let revStr = str.split('').reverse().join('');
  return +revStr;
}
