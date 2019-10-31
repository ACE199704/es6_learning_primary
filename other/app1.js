//let 是局部变量

function testLet() {
  let a = 60;
  if (true) {
    let a = 10;
    console.log(a);
  }
  console.log(a);
}
testLet();

function testVar() {
  var a = 10;
  if (true) {
    var a = 122;
    console.log(a);
  }
  console.log(a);
}
testVar();

//const  常量

//如果是数组 不能改变数组的类型，可用添加数据

const color = [];
// color = "green";  //error
color.push("blue");
color.push("red");
console.log(color);
// color = ["blue", "red"]; //error