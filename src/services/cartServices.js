import http from "./httpService";

const apiEndpoint = "http://localhost:5000/api/cart/";

http.setToken(localStorage.getItem("token"));


export  function createCart(request_data) {

    let result =  http.post(apiEndpoint,request_data)
    return result
  
  }
export  function getCart() {

  let result =  http.get(apiEndpoint)
  return result

}

export  function editCart(request_data,id) {
  let result = http.put(apiEndpoint + id, request_data)
  return result
}
export  function deleteCart(id) {
  let result = http.put(apiEndpoint + "delete/" + id)
  return result
}


  
