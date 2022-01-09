import http from "./httpService";



const apiEndpoint = "http://localhost:5000/api/sub-category/";

http.setToken(localStorage.getItem("token"));

export  function getSubCategories() {
  let result =  http.get(apiEndpoint)
  return result
}

export  function getCategory(id) {
    let result =  http.get(apiEndpoint + id)
    return result
  }
export  function getSubCategoryByParent(id) {
  let result = http.get(apiEndpoint + "parent/" +id)
  return result
}




