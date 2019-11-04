/**
 * 封装fetch 用async 和await 
 * 更快、更简单的请求数据
 * @version 2.0.0
 * @author Ace
 * @license MIT
 * 
 */
class Easyhttp {
  async get(url) {
    const res = await fetch(url);
    const resData = await res.json();
    return resData;
  }
  //传输数据
  async post(url, data) {

    const res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await res.json();
    return resData;

  }
  //更新数据 
  async put(url, data) {
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await res.json();
    return resData;
  }
  //删除数据
  async delete(url) {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      }
    })
    const resData = await "数据删除成功";
    return resData;
  }
}