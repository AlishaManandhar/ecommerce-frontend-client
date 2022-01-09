import { useEffect, useState } from "react";
import { getCart } from "../services/cartServices";

function Invoice()
{
    const [data, setData] = useState([])
    async function fetchData() {
        const { data } = await getCart()
        setData(data)
    }
    
   
    useEffect(() => {
        fetchData();
        return "Completed"
    },[]);

    const renderDiscountedPrice = (price, discount) => {
        return Math.floor(price - ((discount * price) / 100))
    }
    let status = true
    const renderStatus = (array, size, color, quantity) => {
        const index = array.findIndex(el => el.size === size)
        const colorIndex = array[index].variations.findIndex(el => el.color === color)
        if (array[index].variations[colorIndex].quantity >= quantity)
        {
    
            return ""
        }
        else{
            status = false
            return <span class="badge rounded-pill bg-danger">Not Available</span>
        }
    }
    let cost = 0
    return (
        <div className="col-sm-12 col-md-4 invoice">
                    <h4>Cart Total </h4>
                    <div className="table-responsive  cart-total-table">
                            <table className="table table-hover">
                                <thead>
                                    <th scope="col">Product</th>
                                    <th scope="col">Total</th>
                                </thead>
                                <tbody>
                                    {data.map(el => {
                                        
                                        let temp =  renderDiscountedPrice(el.productId.regularPrice, el.productId.discountPercentage)
                                        cost += (temp * el.quantity)
                                        return (
                                            <tr>
                                                 <td>{el.productId.name} &nbsp; {el.quantity} * {temp} {renderStatus(el.productId.dimensions, el.size, el.color, el.quantity)}</td>
                                                 <td>{el.quantity * temp}</td>
                                            </tr>

                                        )
                                    })}
                                    
                                       
                                    <tr className="bordered">
                                        <td>Sub Total</td>
                                        <td>{cost}</td>
                                    </tr>
                                    <tr className="bordered">
                                        <td>Shipping Cost</td>
                                        <td>{cost >= 1500 ? 0 : 150}</td>
                                    </tr>
                                    <tr className="bordered">
                                        <th scope="row">Grand Total</th>
                                        <th scope="row">{cost >= 1500 ? cost : cost +150}</th>
                                    </tr>

                                </tbody>
                            </table>
                    </div>
                        
                    <div className="mt-3 pt-3">
                        <button type="button" className="checkout" disabled={status ? false : true} onClick={() => alert("Ok")}>Place Order</button>
                    </div>

                </div>
    )
}

export default Invoice