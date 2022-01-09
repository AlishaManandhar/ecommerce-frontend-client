import http from "./httpService";



const apiEndpoint = "http://localhost:5000/api/product/";




export  function getProducts() {
  let result =  http.get(apiEndpoint)
  return result
}

export  function getProduct(id) {
  let result = http.get(apiEndpoint + id)
  return result
}

