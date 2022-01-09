import http from "./httpService";

const apiEndpoint = "http://localhost:5000/api/blog/";

http.setToken(localStorage.getItem("token"));

export  function getBlogs() {

  let result =  http.get(apiEndpoint)
  return result

}

export  function getBlog(id) {
  let result = http.get(apiEndpoint + id)
  return result
}


  
