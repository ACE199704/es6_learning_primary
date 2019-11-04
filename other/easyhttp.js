/**
 * 封装fetch
 * 更快、更简单的请求数据
 * @version 1.0.0
 * @author Ace
 * @license MIT
 * 
 */
class Easyhttp {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }
  //传输数据
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json()).then(resolve(data))
        .catch(err => reject(err));
    })
  }
  //更新数据 
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
          method: "PUT",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(data => data.json()).then(resolve(data))
        .catch(err => reject(err))
    })
  }
  //删除数据
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
        headers: {
          'Content-type': 'application/json'
        }
      }).then(res => res.json()).then(resolve("数据删除成功")).catch(err => reject(err))
    })
  }
}