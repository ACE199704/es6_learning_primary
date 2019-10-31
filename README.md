# es6_learning_primary
第一次学习es6

第一个数组方法：
需要注意的是reduce 方法
以及用到的
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
