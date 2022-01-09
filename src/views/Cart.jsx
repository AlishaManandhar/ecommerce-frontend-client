import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import CartTotal from "../components/CartTotal"
import Coupon from "../components/Coupon"
import PageInfo from "../components/PageInfo";
import Quantity from "../components/Quantity";
import { deleteCart, editCart, getCart } from "../services/cartServices";

function Cart() {

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
    let cost = 0
    const handleEditCart = async(id, quantity, productId) => {
        const result = await editCart({
            quantity, productId
        }, id)
        const index = data.findIndex(el => el._id === id)
      
        const products = [...data]
        products[index].quantity = quantity
        setData(products)
        cost = 0
        
    
    }

    const handleDeleteCart = async(id) => {
        const result = await deleteCart(id)
        const prod = data.filter(el => el._id !== id)
        cost = 0
        setData(prod)
        
          
    }
   
    const renderStatus = (array, size, color, quantity) => {
        const index = array.findIndex(el => el.size === size)
        const colorIndex = array[index].variations.findIndex(el => el.color === color)
        if (array[index].variations[colorIndex].quantity >= quantity)
        {
            return <span class="badge rounded-pill bg-info">Available</span>
        }
        else{
            return <span class="badge rounded-pill bg-danger">Not Available</span>

        }
    }

    return (
       (
            <>
      <PageInfo title="Cart" active="Cart" /> 
            <div className="cart-table container">
                <div className="table-responsive-sm">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">IMAGE</th>
                                <th scope="col">PRODUCT</th>
                                <th scope="col">PRICE</th>
                                <th scope="col quantity">QUANTITY</th>
                                <th scope="col">COLOR</th>
                                <th scope="col">SIZE</th>
                                <th scope="col">TOTAL</th>
                                <th scope="col">Status</th>

                                <th scope="col">REMOVE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 && data.map(el => {
                                cost += (renderDiscountedPrice(el.productId.regularPrice, el.productId.discountPercentage) * el.quantity)
                                return (
                                    <>
                                    <tr>
                                    <th className="cart-image"><img src={`http://localhost:5000/${el.productId.frontImage}`} alt="" srcset="" /> </th>
                                    <td className="cartproduct-link"> <Link to={`/product/${el.productId._id}`} >{el.productId.name}</Link>  </td>
                                    <td className="pink-theme">Rs &nbsp;{renderDiscountedPrice(el.productId.regularPrice, el.productId.discountPercentage)}</td>
                                    <td>
                                       <Quantity quantity={el.quantity} onChange={handleEditCart} id={el._id}  productId={el.productId._id}/>
                                    </td>
                                    <td>{el.color}</td>
                                    <td>{el.size}</td>
                                    <td className="pink-theme">Rs &nbsp;{renderDiscountedPrice(el.productId.regularPrice, el.productId.discountPercentage) * el.quantity }</td>
                                    <td>{renderStatus(el.productId.dimensions, el.size, el.color, el.quantity)}</td>
                                    <td><button  type="button" className="btn btn-close" onClick={() => handleDeleteCart(el._id)}></button></td>
                                </tr>
                             
                                
                               

                                </>
                                )
                            })}
                           
                           
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="cart-details container">
                <div className="row mb-2">
                    <div className="col-sm-12 col-md-6">
                        <Link to="/" className="continue-shopping">Continue Shopping</Link>
                        <Coupon />
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <CartTotal cost={cost}/>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                            </div>
                            <div className="col-sm-12 col-md-6 col-checkout">
                                <a href="checkout.html" className="checkout">Proceed to Checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        
        </>
        )    
    )
}

export default Cart