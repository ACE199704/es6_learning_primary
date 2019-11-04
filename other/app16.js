document.getElementById("button1").addEventListener('click', getText);
document.getElementById("button2").addEventListener('click', getJson);
document.getElementById("button3").addEventListener('click', getApi);

function getText() {

  fetch("text.txt")
    .then(res => res.text())
    .then(data => {
      document.getElementById("textDisplay").innerHTML = data;
    }).catch(err => console.log(err));
}

function getJson() {

  fetch("Json16.json").then(res => res.json()).then(data => {
      let output = '';
      data.forEach(dataa => {
        output += `<li>${dataa.title}</li>`
      })
      document.getElementById("textDisplay").innerHTML = output;
    })
    .catch(err => console.log(err));
}

function getApi() {
  //https://api.github.com/users
  url = "https://api.github.com/users";
  fetch(url).then(res => res.json()).then(users => {
      let output = '';
      users.forEach(user => {
        output += `<li> ${user.login}</li>`
      })
      document.getElementById("textDisplay").innerHTML = output;
    })
    .catch(err => console.log(err));
}