//数组方法
/**
 * forEach的使用
 *
 *
 *
 */

// var colors = ['red', 'green', 'yellow'];
// //ES5遍历方法
// for (var i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }
// //ES6遍历方法

// colors.forEach(function (color) {
//   console.log(color);
// });
// var numbers = [1, 2, 3, 4, 5];
// var sum = 0;
// // numbers.forEach((number) => {
// //   sum += number;
// // })
// numbers.forEach(adder);

// function adder(num) {
//   sum += num;
// }
// console.log(sum);

/**
 * map的使用
 *
 *
 *
 */

// //场景一：需要把A数组以双倍的值拷贝到B数组里去；
// var number = [1, 2, 3, 4, 5];
// var double_number = [];

// //es5
// for (var i = 0; i < number.length; i++) {
//   // double_number[i] = number[i] * 2;
//   double_number.push(number[i] * 2);
// }

// //es6
// var doubled = number.map(function (num) {
//   return num * 2;
// })

// console.log(doubled);

// //场景2 ：对象数组A ，将A数中对象的某个属性数值存储到B数组中

// var cars = [{
//     model: 'Buick',
//     price: 'cheap'
//   },
//   {
//     model: 'BWM',
//     price: 'expensive'
//   }
// ];
// var prices = cars.map(function (car) {
//   return car.price;
// })
// console.log(prices);

/**
 *
 *
 *
 * filter方法
 */

// //场景一：假定有数组A，获取数组中指定类型的对象放到b数组中
// var products = [{
//     name: 'banana',
//     type: 'fruit'
//   },
//   {
//     name: 'apple',
//     type: 'fruit'
//   },
//   {
//     name: 'cucumber',
//     type: 'vegetable'
//   },
//   {
//     name: 'celery',
//     type: 'vegetable'
//   }
// ];
// //es5
// var filterProducts = [];
// for (var i = 0; i < products.length; i++) {
//   if (products[i].type == 'fruit') {
//     filterProducts.push(products[i]);
//   }
// }
// console.log(filterProducts);

// //es6
// var filter2 = products.filter(function (products) {
//   return products.type === 'vegetable';
// });
// console.log(filter2)

// //场景2:假定有一个数组对象A，过滤不满足以下条件的数组
// //条件： 蔬菜 数量大于0 价格小于10

// var products = [{
//     name: 'banana1',
//     type: 'fruit',
//     quantity: 1,
//     price: 9
//   },
//   {
//     name: 'banana2',
//     type: 'vegetable',
//     quantity: 0,
//     price: 2
//   },
//   {
//     name: 'banana3',
//     type: 'fruit',
//     quantity: 10,
//     price: 10
//   },
//   {
//     name: 'banana4',
//     type: 'vegetable',
//     quantity: 1,
//     price: 9
//   },
// ];

// var filter1 = products.filter((product) => {
//   return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
// });
// console.log(filter1);
// //场景三：根据数组A中的id值，过滤掉b数组不符合的数据

// var post = {
//   id: 4,
//   title: 'Js'
// };
// var comments = [{
//     postId: 4,
//     content: 'Angular4'
//   },
//   {
//     postId: 2,
//     content: 'vue.js'
//   },
//   {
//     postId: 3,
//     content: 'node.js'
//   },
//   {
//     postId: 4,
//     content: 'react.js'
//   }
// ];

// function commentsForPost(post, comments) {
//   return comments.filter(
//     (comment) => {
//       return comment.postId === post.id;
//     }
//   )
// };

// console.log(commentsForPost(post, comments));

/**
 *
 * find的使用
 * 只找到第一个就结束
 */

//场景1 ： 假定有一个对象数组A 找到符合条件的对象
// var users = [
//   { name: "Jill" },
//   { name: "Alex", id: 2 },
//   { name: "Bill" },
//   { name: "Alex" }
// ];
// var user;
// //es5
// // for (var i = 0; i < users.length; i++) {
// //   if (users[i].name == "Alex") {
// //     user = users[i];
// //     console.log(i);
// //     break;
// //   }
// // }
// //es6
// user = users.find(user => {
//   return user.name === "Alex";
// });
// console.log(user);

// //场景2:假定有一个对象数组A 根据指定对象的条件找到数组中符合条件的对象
// var posts = [
//   { id: 1, title: "Node.js" },
//   { id: 2, title: "React.js" },
//   { id: 3, title: "Vue.js" }
// ];
// var comment = { postID: 1, content: "HelloWorld" };

// function postForcomment(posts, comment) {
//   return posts.find(post => {
//     return post.id === comment.postID;
//   });
// }

// console.log(postForcomment(posts, comment));

/**
 * 数组方法 every和some
 *
 */

// //场景1:计算对象数组中每个电脑的操作系统是否可用，大于16位操作系统为可用 ，否则不可以用
// var computers = [
//   { name: "Apple", ram: 16 },
//   { name: "IBM", ram: 4 },
//   { name: "Acer", ram: 32 }
// ];
// var everyComputersCanRun = true;
// var someComputersCanRun = false;
// //es5
// for (var i = 0; i < computers.length; i++) {
//   if (computers[i].ram < 16) {
//     everyComputersCanRun = false;
//     // break;
//   } else {
//     someComputersCanRun = true;
//   }
// }

// console.log(everyComputersCanRun);
// console.log(someComputersCanRun);

// var every = computers.every(computer => {
//   return computer.ram > 16;
// });
// var some = computers.some(computer => {
//   return computer.ram > 16;
// });

// console.log(every);
// console.log(some);

// //场景2:假定有一个注册页面，判断所有input 内容的长度是否都大于0
// //es5
function Filed(value) {
  this.value = value;
}
Filed.prototype.validate = function() {
  return this.value.length > 0;
};
var userName = new Filed("henrry Wu");
var phoneNumber = new Filed("1888882828");
var password = new Filed("sbh");

console.log(userName.validate());
console.log(phoneNumber.validate());
console.log(userName);
console.log(phoneNumber);

//es6
var fields = [userName, phoneNumber, password];
var a = fields.every(field => {
  return field.validate();
});
console.log(a);

/**
 *
 * reduce
 *
 * array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
 * total	必需。初始值, 或者计算结束后的返回值。
 * currentValue	必需。当前元素
 * initialValue	可选。传递给函数的初始值
 * https://www.runoob.com/jsref/jsref-reduce.html
 * reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
 * reduce() 可以作为一个高阶函数，用于函数的 compose。
 */

// //1.计算数组中所有数的总和

// var numbers = [1, 2, 3, 4, 5];
// // var sum = 0;
// var sumValue = numbers.reduce((sum, number) => {
//   return sum + number;
// }, 0);
// console.log(sumValue);
// //2.将数组中对象的某个属性抽离到另一个数组中
// var primaryColor = [{ color: "red" }, { color: "green" }, { color: "blue" }];
// primaryColor.reduce((previous, primaryColor) => {
//   previous.push(primaryColor.color);
//   return previous;
// }, []);

// console.log(primaryColor);

// //判读字符串中括号是否对称？
// function balanceParens(string) {
//   return !string.split("").reduce(function(previous, char) {
//     if (previous < 0) {
//       return previous;
//     }
//     if (char == "(") {
//       return ++previous;
//     }
//     if (char == ")") {
//       return --previous;
//     }
//     return previous;
//   }, 0);
// }

// console.log(balanceParens("()()()()()"));
