import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import PageInfo from "../components/PageInfo";
import Quantity from "../components/Quantity";
import { createCart } from "../services/cartServices";
import { deleteWishlist, editWishlist, getWishlist } from "../services/wishlistServices";

function Cart() {

    const [data, setData] = useState([])
    async function fetchData() {
        const { data } = await getWishlist()
        setData(data)
      
    }
    
    useEffect(() => {
        fetchData();
        return "Completed"
    },[]);
    const renderDiscountedPrice = (price, discount) => {
        return Math.floor(price - ((discount * price) / 100))
    }
    
    const handleEditCart = async(id, quantity, productId) => {
        const result = await editWishlist({
            quantity, productId
        }, id)
        const index = data.findIndex(el => el._id === id)
      
        const products = [...data]
        products[index].quantity = quantity
        setData(products)
     
        
    
    }

    const handleDeleteCart = async(id) => {
        const result = await deleteWishlist(id)
        const prod = data.filter(el => el._id !== id)
       
        console.log(prod)
        setData(prod)
        
          
    }
   

    return (
       (
            <>
      <PageInfo title="Wishlist" active="Cart" /> 
            <div className="cart-table wishlist-table container">
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
                                <th scope="col">ACTION</th>
                                <th scope="col">REMOVE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 && data.map(el => {
                                return (
                                    <tr>
                                    <th className="cart-image"><img src={`http://localhost:5000/${el.productId.frontImage}`} alt="" srcset="" /></th>
                                    <td className="cartproduct-link"> <Link to={`/product/${el.productId._id}`} >{el.productId.name}</Link> </td>
                                    <td className="pink-theme">Rs &nbsp;{renderDiscountedPrice(el.productId.regularPrice, el.productId.discountPercentage)}</td>
                                    <td>
                                       <Quantity quantity={el.quantity} onChange={handleEditCart} id={el._id}  productId={el.productId._id}/>
                                    </td>
                                    <td>{el.color}</td>
                                    <td>{el.size}</td>
                                    <td ><button className="add-to-cart">Add to Cart</button></td>
                                    <td><button  type="button" className="btn btn-close" onClick={() => handleDeleteCart(el._id)}></button></td>
    
                                </tr>
                                )
                            })}
                           
                           
                        </tbody>
                    </table>
                </div>

            </div>
           
           
        </>
        )    
    )
}

export default Cart