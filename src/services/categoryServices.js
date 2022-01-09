import http from "./httpService";



const apiEndpoint = "http://localhost:5000/api/category/";

http.setToken(localStorage.getItem("token"));

export  function getCategories() {
  let result =  http.get(apiEndpoint)
  return result
}

export  function getCategory(id) {
  let result = http.get(apiEndpoint + id)
  return result
}

