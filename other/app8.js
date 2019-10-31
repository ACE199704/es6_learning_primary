//数组解构
const names = ['Herry', 'Bucky', 'Emily'];
//解构
const [name1, name2, name3] = names;
console.log(name1, name2, name3);

//这里是{}对象  length返回的是数组的长度
const {
  length
} = names;
console.log(length);

//结合展开运算符
const [name11, ...name1s] = names;
console.log(name11, name1s);

//对象数组

const people = [{
    name: 'Herry',
    age: 20
  },
  {
    name: 'Bucky',
    age: 20
  },
  {
    name: 'Emily',
    age: 20
  }
];

// const [age] = people;//返回的是数组
const [{
  age
}] = people;

console.log(age);

//使用场景：将数组转换成对象
const points = [
  [12, 3],
  [123, 4],
  [1234, 5]
];
//es6
let newPoint = points.map(pairs => {
  const [x, y] = pairs;
  return {
    x,
    y
  };
})
console.log(newPoint);

let newPoint1 = points.map(([x, y]) => {
  return {
    x: x,
    y: y
  };
});
console.log(newPoint1);