import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login } from "../services/authServices"


function Login()
{
  const [user, setUser] = useState({
     password: "",
    email: ""
    })
  const handleOnChange = ({ currentTarget: input }) => {
      const data = { ...user }
      data[input.name] = input.value
      setUser(data)
  }
  const navigate = useNavigate()

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    let request_data = { ...user }
   
    if (request_data.email.length <= 2)
    {
        return toast.error("Please enter valid email")
    }
    
    try {
        console.log(request_data)
        delete request_data.rePassword
        const result = await login(request_data)
        const token = result.token
       
          localStorage.setItem('token', token)
         
          navigate("/")
           
    }
    catch (err) {

        const error = err.response.data;
        toast.error(error.error)

    }
};



  
    return (
          <div className="col-sm-12 col-md-6 mb-3">
            <h4>Login</h4>
            <div className="row">
              <div className="col-sm-12 col-md-10">
                <form  className="login" onSubmit={handleOnSubmit}>
                  <input type="text" name="email" id="email" placeholder="Email" value = {user.email} onChange={handleOnChange}  />
                  <input type="password" name="password" id="password" placeholder="Password"  value = {user.password} onChange={handleOnChange} />
                  <input type="submit" value="Login" />
                </form>
              </div>
              <div className="col-sm-12 col-md-1 seperator">
              </div>
            </div>
          </div>
    )
}

export default Login