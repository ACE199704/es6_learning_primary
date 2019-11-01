const data = [{
    name: '米斯特吴',
    age: 30,
    gender: '男',
    lookingfor: '女',
    location: '北京',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: '吴先生',
    age: 32,
    gender: '男',
    lookingfor: '女',
    location: '上海',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  },
  {
    name: '李女士',
    age: 24,
    gender: '女',
    lookingfor: '男',
    location: '北京',
    image: 'https://randomuser.me/api/portraits/women/83.jpg'
  }
];

// //迭代器方法
// function profileIterator(data) {
//   let index = 0;
//   return {
//     next: function () {
//       return index < data.length ? {
//         value: data[index++],
//         done: false
//       } : {
//         value: undefined,
//         done: true
//       }
//     }
//   }
// }
function* profileIterator(data) {
  yield data[0];
  yield data[1];
  yield data[2];

}
const iterator = profileIterator(data);
// console.log(iterator.next())
const btn = document.getElementById('next');
nextProfile();

btn.addEventListener('click', nextProfile);

function nextProfile() {
  const memberValue = iterator.next().value;
  // console.log(memberValue);
  if (memberValue != undefined) {
    document.getElementById('profileDisplay').innerHTML = `
  <ul class = "list-group">
    <li class ="list-group-item">姓名：${memberValue.name}</li>
    <li class ="list-group-item">年龄：${memberValue.age}</li>
    <li class ="list-group-item">位置：${memberValue.location}</li>
    <li class ="list-group-item">寻找：${memberValue.lookingfor}</li>
  </ul>
  `;
    document.getElementById('imageDisplay').innerHTML = `
  <img src ="${memberValue.image}"/>
  `;
  } else {
    window.location.reload();
  }

}