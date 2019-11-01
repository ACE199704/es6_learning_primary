// //class es5

// function Car(options) {
//   this.title = options.title;
// }
// Car.prototype.drive = function () {
//   return "Vroom";
// }

// const car = new Car({
//   title: "BWM"
// });
// console.log(car);
// console.log(car.drive())
//es5 继承有点麻烦

//es6 class 和继承

class Car {
  constructor(options) { //constructor({title}){
    this.title = options.title; //this.title =title;
  }
  drive() {
    return "Vroom";
  }
}

const car = new Car({
  title: "BWM"
});

// console.log(car);

class Toyota extends Car {
  constructor(options) {
    super(options);
    this.color = options.color;
  }
}
const toyota = new Toyota({
  color: "red",
  title: "Focus"
});
console.log(toyota);