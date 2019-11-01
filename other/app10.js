//斐波那契数列
//正常
function fib(max) {
  var a = 0,
    b = 1,
    arr = [0, 1];
  while (arr.length < max) {
    [a, b] = [b, a + b];
    arr.push(b);
  }
  return arr;
}
console.log(fib(10));
console.log("======================================");

// //generator
// function* fib(max) {
//   var a = 0,
//     b = 1,
//     n = 0;
//   while (n < max) {
//     yield a; //返回a
//     [a, b] = [b, a + b];
//     n++;
//   }
//   return;
// }

// var f = fib(5);
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// console.log("====================================")
// for (var x of fib(10)) {
//   console.log(x);
// }

function* fib1(max) {
  var a = 0,
    b = 1,
    n = 0;
  while (n < max) {
    yield a;
    [a, b] = [b, a + b];
    n++;
  }
  return;
}

for (var x of fib1(10)) {
  console.log(x);
}

var f = fib1(2);
console.log(f.next());
console.log(f.next());
console.log(f.next());