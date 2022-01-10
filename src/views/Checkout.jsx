import CheckoutForm from "../components/CheckoutForm"
import Invoice from "../components/Invoice"
import PageInfo from "../components/PageInfo"
import address  from "../address"
import { useState } from "react"
function Checkout() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    province: 1,
    city: "",
    area: "",
    address: ""
  })
  const handleOnChange = ({ currentTarget: input }) => {
    const obj = { ...data }
    obj[input.name] = input.value
    setData(obj)
  }

  const [area, setArea] = useState(address[0].subLocation)

  const handleOnCityChange = ({ currentTarget: input }) => {
    const obj = { ...data }
    obj[input.name] = input.value
    obj.area = ""
    setData(obj)

    const index = address.findIndex(el => el.location === input.value)
  

    setArea(address[index].subLocation)
  }




  return (
    <>
      <PageInfo title="Checkout" active="Checkout" />
      <div className="container checkout-section">
        <div className="container">
          <div className="row">
            <CheckoutForm  data = {data} onChange={handleOnChange} onCityChange={handleOnCityChange} area={area}/>
            {/* <!--------------------------- billing ends here ---------------------------------> */}
            <Invoice  userData = {data}/>
            {/* <!--------------------------- billing ends here ---------------------------------> */}

          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout