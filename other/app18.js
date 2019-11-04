/**
 * async 和await
 */

async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello World'), 2000)
  })
  const error = false;
  if (!error) {
    const res = await promise;
    return res;
  } else {
    await Promise.reject(new Error("error:报错了"))
  }
}
// myFunc()
//   .then(data => console.log(data))
//   .catch(error => console.log(error));


//请求数据
async function getUsers() {
  const response = await fetch("http://jsonplaceholder.typicode.com/users")
  const data = await response.json();
  return data;
}

getUsers().then(data => console.log(data));