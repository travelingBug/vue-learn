var name = "小明"
var flag = false

//方式1 导出变量
export { flag }

//方式2 在声明的时候就导出变量
export var mq = '消息队列'

export function multi (num1, num2) { //导出函数
  return num1 * num2
}

//方式3  默认导出
export default function (num) {
  return num * 10
}


function sum (num1, num2) {
  return num1 + num2
}
