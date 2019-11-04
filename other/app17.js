const http = new Easyhttp;

// http.get("http://jsonplaceholder.typicode.com/posts")
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => console.log(err));

//传输数据
const data = {
  name: "Herry",
  uesrname: "Ace",
  emila: "66261@qq.com"
}

// http.post("http://jsonplaceholder.typicode.com/posts", data)
//   .then(data => console.log(data)).catch(err => console.log(err))

// // //更新数据
// http.put("http://jsonplaceholder.typicode.com/users/2", data)
//   .then(data => console.log(data)).catch(err => console.log(err));

// //删除数据
http.delete("http://jsonplaceholder.typicode.com/users/2").then(data => console.log(data))
  .catch(err => console.log(err));