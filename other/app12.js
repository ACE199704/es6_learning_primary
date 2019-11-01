// //数据结构 ：map
// //键和值可以是任意类型的

// const map1 = new Map();

// //设置key值
// const key1 = "some String",
//   key2 = {},
//   key3 = function() {};

// //为key设置value值
// map1.set(key1, "Value of key1");
// map1.set(key2, "Value of key2");
// map1.set(key3, "Value of key3");
// //根据key获取对应的value值
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// //获取对应value的数量
// console.log(map1.size);
// //for ...of 遍历map1中的key 和value
// for (let [key, value] of map1) {
//   console.log(`${key}=${value}`);
// }

// //only key
// for (let key of map1.keys()) {
//   console.log(key);
// }

// //only value

// for (let value of map1.values()) {
//   console.log(value);
// }

// //forEach 遍历map1
// map1.forEach((value, key) => {
//   console.log(`${key} =${value}`);
// });

// //将map1转化为正常的数组
// const keyValueArray = Array.from(map1);
// console.log(keyValueArray);

// //将map1中的key转换为数组
// const keyArray = Array.from(map1.keys());
// console.log(keyArray);

// //将map1中的value转换为数组
// const valueArray = Array.from(map1.values());
// console.log(valueArray);

//write again
const map2 = new Map();
//设置key
const key1 = "some String",
  key2 = {},
  key3 = function() {};
//为key值设置value值
map2.set(key1, "value of key1");
map2.set(key2, "value of key2");
map2.set(key3, "value of key3");
//根据key获取对应的value值
console.log(map2.get(key1));
console.log(map2.get(key2));
console.log(map2.get(key3));

//only key
for (let key of map2.keys()) {
  console.log(key);
}

//only value
for (let value of map2.values()) {
  console.log(value);
}

//forEach 遍历map1
map2.forEach((value, key) => {
  console.log(`${key} =${value}`);
});

//将map2转化为正常的数组
const mapToArray = Array.from(map2);
console.log(mapToArray);

//将map2的key值转换为数组
const mapKeyArray = Array.from(map2.keys());
console.log(mapKeyArray);
//将map2的value值转换为数组
const mapValueArray = Array.from(map2.values());
console.log(mapValueArray);
