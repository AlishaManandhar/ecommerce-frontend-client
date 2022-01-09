
import Login from "../components/Login"
import PageInfo from "../components/PageInfo"
import Register from "../components/Register"

function Auth()
{

    
    return (
        <>
        <PageInfo title="User Auth" active= "Auth" />
        <div className="container mt-3">
        <div className="row">
          <Login />
          <Register/>
          </div>
    
        </div>
        </>
    )
}

export default Auth