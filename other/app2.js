//模版字符串
let name = "Herry";

function changeToUp(word) {
  return word.toUpperCase();
}
let template = `
  <h1> ${changeToUp('Hello')},${name}!</h1>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
  `;

document.getElementById('template').innerHTML = template;