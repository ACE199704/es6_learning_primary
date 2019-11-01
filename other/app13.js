//set 新的数据类型 -> 集合，可以存储任意数据类型，且是唯一的（不重复的）

const set1 = new Set();
set1.add("A String");
set1.add(100);
set1.add(true);
set1.add(100);
set1.add({
  name: "Herry"
});
// console.log(set1);

const set2 = new Set([1, true, "string"]);
// console.log(set2);
//计算set1中的数据个数
console.log(set1.size);
//检查 set中 是否拥有对应的值
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({
  name: "Herry"
}))
//  对象的话 存储的是一个对应的地址 所以对象之间的等比较 返回值都是false
//删除set中的内容
set1.delete(100);
console.log(set1);
//for ...of 遍历set
for (let item of set1) {
  console.log(item);
};
//forEach 遍历
set1.forEach((value) => {
  console.log(value);
});
//将set转换为array
const setArray = Array.from(set1);
console.log(setArray);