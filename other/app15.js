let url = "http://jsonplaceholder.typicode.com/posts";
fetch(url)
  .then(response => {
    return response.json();
    // console.log(response);
  })
  .then(data => console.log(data))
  .catch(error => {
    console.log("error:" + error);
  })