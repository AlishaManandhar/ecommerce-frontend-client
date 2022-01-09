import {useState} from "react"
import { toast } from "react-toastify"
import { register } from "../services/authServices"


function Register()
{
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        password: "",
        rePassword : "",
        email: "",
        contact: ""
    })

    const handleOnChange = ({ currentTarget: input }) => {
        const data = { ...user }
        data[input.name] = input.value
        setUser(data)
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        let request_data = { ...user }
        if (request_data.password !== request_data.rePassword)
        {
            return toast.error("Passwords do not match")
        }

        if (request_data.firstname.length <= 2)
        {
            return toast.error("Firstname should be at least 3 characters")
        }

        if (request_data.lastname.length <= 2)
        {
            return toast.error("Lastname should be at least 3 characters")
        }

        if (request_data.email.length <= 2)
        {
            return toast.error("Please enter valid email")
        }
        if (request_data.contact.length <= 2)
        {
            return toast.error("Please enter valid contact")
        }

        request_data.role =  "61d066bba959ba8782667a8a"
        try {
            console.log(request_data)
            delete request_data.rePassword
            await register(request_data)
            setUser({
                firstname: "",
                lastname: "",
                password: "",
                rePassword : "",
                email: "",
                contact: ""
            })
            
        }
        catch (err) {

            const error = err.response.data;
            toast.error(error.error)

        }
    };






    return (
          <div className="col-sm-12 col-md-6">
            <h4 className="mt-sm-3">Register</h4>
            <form  className="login" onSubmit={handleOnSubmit}>
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <input type="text" name="firstname" placeholder="Firstname" value = {user.firstname} onChange={handleOnChange} />
                </div>
                <div className="col-sm-12 col-md-6">
                  <input type="text" name="lastname"  placeholder="Lastname"  value = {user.lastname} onChange={handleOnChange}/>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <input type="text" name="email"  placeholder="Email"  value = {user.email} onChange={handleOnChange} />
                </div>
                <div className="col-sm-12 col-md-6">
                  <input type="text" name="contact" placeholder="Contact"  value = {user.contact} onChange={handleOnChange} />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-12 col-md-6">
                  <input type="password" name="password"  placeholder="Password"  value = {user.password} onChange={handleOnChange} />
                </div>
                <div className="col-sm-12 col-md-6">
                  <input type="password" name="rePassword" placeholder="ReEnter Password"  value = {user.rePassword} onChange={handleOnChange} />
                </div>
              </div>
    
             <input type="submit" value="Register" />
             </form>
              </div>
    
    )
}

export default Register