// function makeAjaxRequest(url, method = "GRT") {
//   return method;
// }
// console.log(makeAjaxRequest("baidu.com"));
// console.log(makeAjaxRequest("baidu.com", "POST"));

// function User(id) {
//   this.id = id;
// };

// function randomId() {
//   return Math.random() * 1000;
// };

// function createUser(user = new User(randomId())) {
//   user.admin = true;
//   return user;
// };

// console.log(createUser());

function User(id) { //创建了类
  this.id = id;
};

function randomId() {
  return Math.random() * 100;
};

function createUser(user = new User(randomId())) {
  user.admin = true;
  return user;
};
console.log(createUser());