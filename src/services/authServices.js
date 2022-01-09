import http from "./httpService";

const apiEndpoint = "http://localhost:5000/api/auth/";

export  function login(request_data) {

    let result =  http.post(apiEndpoint + "login",request_data)
    return result
  
  }

export  function register(request_data) {

    let result =  http.post(apiEndpoint + "register",request_data)
    return result
  
  }



