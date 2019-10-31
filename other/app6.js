// function addNumbers(numbers) {
//   return numbers.reduce((sum, num) => {
//     return sum + num;
//   }, 0);
// }
// const numbers = [1, 2, 3, 4, 5];
// console.log(addNumbers(numbers));

// function addNumbers(a, b, c, d, e) {
//   var numbers = [a, b, c, d, e];
//   return numbers.reduce((sum, num) => {
//     return sum + num;
//   }, 0);
// }

// console.log(addNumbers(1, 2, 3, 4, 5));

function addNumbers(...numbers) {
  return numbers.reduce((sum, num) => {
    return sum + num;
  }, 0)
}
console.log(addNumbers(1, 2, 3, 4, 5, 6, 7));

//连接数组 concat 

var defaultColors = ["red", "green"];
var favoriteColors = ["orange", "yellow"];
// var defaultColors = defaultColors.concat(favoriteColors);
// console.log(defaultColors);

//用展开运算符
console.log([...defaultColors, ...favoriteColors]);

//练习
function validatesShoppingList(...item) {
  if (item.indexOf('milk') < 0) {
    return ['milk', ...item];
  }
  return item;
}
console.log(validatesShoppingList('oriange', 'apple'));

//练习2
function checkList(...items) {
  if (items.indexOf('milk') < 0) {
    return ['milk', items];
  }
  return items;
}
console.log(checkList('oringe', 'milk', 'apple'))