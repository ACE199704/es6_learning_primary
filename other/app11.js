const nameArray = ["Henry", "Bucky", "Emily"];

function nameIterator(name) {
  let index = 0;
  return {
    next: function () {
      return index < name.length ? {
        value: name[index++],
        done: false
      } : {
        value: undefined,
        done: true
      };
    }
  }
}

const name = nameIterator(nameArray);
console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log("=====================");

function* sayNames() {
  yield 'Heney';
  yield 'Bucky';
  yield 'Emily'
}

const name11 = sayNames();
console.log(name11.next());
console.log(name11.next());
console.log(name11.next());
console.log(name11.next());
console.log("---------------------------")
//id 自增
function* createIds() {
  let index = 1;
  while (true) {
    yield index++;
  }
}
const gen = createIds();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

for (i = 0; i < 10; i++) {
  console.log(gen.next());

}

//try again 
function* createID() {
  let index = 0;
  while (true) {
    yield index++;

  }
}
const gennn = createID();
console.log(gennn.next());
console.log(gennn.next());