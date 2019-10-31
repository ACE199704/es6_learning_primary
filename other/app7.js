//解构  解构的变量名称必须和对象的相同
var expense = {
  type: "es6",
  amount: 45
}
const {
  type,
  amount
} = expense;
console.log(type, amount);

var saveFiled = {
  extension: 'jpg',
  name: 'girl',
  size: 14040
}

function fileSammary({
  name,
  extension,
  size
}) {
  return `${name}.${extension}的总大小是${size}`;
}

console.log(fileSammary(saveFiled));