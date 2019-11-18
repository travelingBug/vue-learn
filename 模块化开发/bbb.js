import * as aaa from "./aaa.js";//导入方式3
var name = '小花'

//这个地方的aaa必须添加文件后缀名
// import { flag } from './aaa.js'

if (!aaa.flag) {
  console.log("bbb文件中的能够找到flag了")
}


// import { mq } from "./aaa.js"//导入方式1

console.log(aaa.mq)

// import { multi } from "./aaa.js";
let res = aaa.multi(1, 2)
console.log(res)


import zoom10 from "./aaa.js";//导入方式2




console.log(zoom10(90))