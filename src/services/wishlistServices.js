import http from "./httpService";

const apiEndpoint = "http://localhost:5000/api/wishlist/";

http.setToken(localStorage.getItem("token"));


export  function createWishlist(request_data) {

    let result =  http.post(apiEndpoint,request_data)
    return result
  
  }
export  function getWishlist() {

  let result =  http.get(apiEndpoint)
  return result

}

export  function editWishlist(request_data,id) {
  let result = http.put(apiEndpoint + id, request_data)
  return result
}
export  function deleteWishlist(id) {
  let result = http.delete(apiEndpoint + id)
  return result
}


  
