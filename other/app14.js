//构造函数promise 异步函数
//三种状态： unresolved 等待任务完成 resolved 任务完成且没有问题  rejected 任务完成但是出现问题；
//resolved -> then   ;  rejected  -> catch
let promise = new Promise((resolve, rejected) => {
  resolve();
  // rejected();
});


// console.log(promise);
promise.then(() => {
    console.log("成功");
  })
  .then(() => {
    console.log("可以无限次数调用")
  })
  .catch(() => {
    console.log("出现了问题");
  })

//回调函数


const posts = [{
    title: "Post one",
    body: "this is post one"
  },
  {
    title: "Post two",
    body: "this is post two"
  }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>
      ${
        post.title
        }
      </li>`
    });
    document.body.innerHTML = output;
  }, 1000);
}

// callback 函数 
/*
function createPost(post, callback) {
  setTimeout((posy) => {
    posts.push(post);
    callback();
  }, 2000)
  // console.log(posts);
}
createPost({
  title: "Post Three",
  body: "this is post three"
}, getPosts);
*/

//promise 函数实现
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = true;
      if (error) {
        resolve();
      } else {
        reject("sth wrong");
      }
    }, 2000)
  })
}
createPost({
    title: "Post Three",
    body: "this is post three"
  }).then(getPosts)
  .catch(err => console.log(err));

//promise.all  多个异步函数可以同时调用；