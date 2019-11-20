//使用commonJS的模块化规范
const { add, mul } = require('./js/mathUtils.js')

console.log(add(100, 200))
console.log(mul(100, 200))


//使用ES6的导出模块规范
import { name, height, age } from "./js/info.js"

console.log(name)
console.log(age)
console.log(height)

//依赖css文件
require('./css/normal.css')

//引入less文件npm
require('./css/special.less')

document.writeln("<span>你好啊 陈伟帅</span>")