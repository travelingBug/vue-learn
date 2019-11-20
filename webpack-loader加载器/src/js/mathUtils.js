function add (n1, n2) {
  return n1 + n2
}
function mul (n1, n2) {
  return n1 * n2
}

/**
 *ES6导出方式
 */
// export {
//   add, mul
// }

module.exports = {
  add, mul
}