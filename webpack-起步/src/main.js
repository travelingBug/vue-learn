//使用commonJS的模块化规范
const { add, mul } = require('./mathUtils.js')

console.log(add(100, 200))
console.log(mul(100, 200))


//使用ES6的导出模块规范
import { name, height, age } from "./info.js"

console.log(name)
console.log(age)
console.log(height)