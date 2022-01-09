import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageInfo from "../components/PageInfo";
import Ratings from "../components/Ratings";
import { getProduct } from "../services/productServices";
import React from 'react';

import 'owl.carousel/dist/assets/owl.carousel.css'
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Form } from "react-bootstrap";
import DataSpecs from "../components/DataSpecs";
import RenderProductImage from "../components/RenderProductImage";
import { toast } from "react-toastify";
import { createCart } from "../services/cartServices";
import { createWishlist } from "../services/wishlistServices";



function SingleProduct() {
    const [data, setData] = useState(null)

    const [image, setImage] = useState(null)
    const [cartData, setCartData] = useState({
        size: [],
        colors: []
    })

    const [quantity, setQuantity] = useState(1)

    const [cartDetail, setCartDetail] = useState({
        size: "",
        color: ""
    })
    const id = useParams().id
    useEffect(() => {

        async function fetchData() {
            const { data: product } = await getProduct(id)
            setData(product)
            setImage(product.frontImage)
            const size = []
            const colors = []

            for (let i = 0; i < product.dimensions.length; i++) {
                size.push(product.dimensions[i].size)
                for (let j = 0; j < product.dimensions[i].variations.length; j++) {
                    if (!colors.includes(product.dimensions[i].variations[j].color))
                        colors.push(product.dimensions[i].variations[j].color)
                }
            }
            if (size.length === 1)
            {
                setCartDetail({
                    size: size[0],
                    color: ""
                })
            }
            setCartData({
                size, colors
            })
        }
        fetchData();
        return "Completed"
    }, []);

    const navigate = useNavigate()

    const handleOnChange = ({ currentTarget: input }) => {
        const detail = { ...cartDetail }
        const sizeData = { ...cartData }
        detail.size = input.value
        detail.color = ""
        setCartDetail(detail)

        const index = cartData.size.indexOf(input.value)
        sizeData.colors = data.dimensions[index].variations.map(el => el.color)
        setCartData(sizeData)
        
    }

    const handleOnCartClick = async() => {
        if (cartDetail.size !== "" &&  cartDetail.color !== "" && quantity >= 1)
        {
            const index = cartData.size.findIndex(el => cartDetail.size === el)
            const colorIndex = data.dimensions[index].variations.findIndex(el => cartDetail.color === el.color )
            
            if (data.dimensions[index].variations[colorIndex].quantity < quantity )
            {
                toast.info("Insufficient Quantity. You can add item to wishlist.")
            }
            else{
                const result = await createCart({
                    quantity,
                    size: cartDetail.size,
                    color: cartDetail.color,
                    productId: id
                })
                
            }
        }
        else if(cartDetail.color === "")
        {
            toast.error("Please select the color")
        }
        else if(cartDetail.size === "")
        {
            toast.error("Please select the size")
        }
        else
        {
            toast.error("Please select at least 1 quantity ")
        }
        
    }

    const handleOnBuyNow = async() => {
        if (cartDetail.size !== "" &&  cartDetail.color !== "" && quantity >= 1)
        {
            const index = cartData.size.findIndex(el => cartDetail.size === el)
            const colorIndex = data.dimensions[index].variations.findIndex(el => cartDetail.color === el.color )
            
            if (data.dimensions[index].variations[colorIndex].quantity < quantity )
            {
                toast.info("Insufficient Quantity. You can add item to wishlist.")
            }
            else{
                const result = await createCart({
                    quantity,
                    size: cartDetail.size,
                    color: cartDetail.color,
                    productId: id
                })
                navigate("/cart")

                
            }
        }
        else if(cartDetail.color === "")
        {
            toast.error("Please select the color")
        }
        else if(cartDetail.size === "")
        {
            toast.error("Please select the size")
        }
        else
        {
            toast.error("Please select at least 1 quantity ")
        }
        
    }

    const handleOnWishListClick = async() => {
        if (cartDetail.size !== "" &&  cartDetail.color !== "" && quantity >= 1)
        {
             const result = await createWishlist({
                    quantity,
                    size: cartDetail.size,
                    color: cartDetail.color,
                    productId: id
                })
                
            
        }
        else if(cartDetail.color === "")
        {
            toast.error("Please select the color")
        }
        else if(cartDetail.size === "")
        {
            toast.error("Please select the size")
        }
        else
        {
            toast.error("Please select at least 1 quantity ")
        }
        
    }


    const handleImageChange = (imageName) => {
        setImage(imageName)
    }

    const handleColorChange = (color) => {
        const detail = { ...cartDetail }
        detail.color = color
        setCartDetail(detail)
    }


    const handleQuantityChange = (type) => {
        if (type === "-") {
            setQuantity(quantity - 1)
        }
        else {
            setQuantity(quantity + 1)
        }
    }

    const renderDiscountedPrice = (price, discount) => {
        return Math.floor(price - ((discount * price) / 100))
    }
    return (
        <>

            {data && <PageInfo title="Product Page" active={data.name} />}
            {data &&
                <div className="container single-product">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <RenderProductImage image={image} images={data.images} handleImageChange={handleImageChange} />


                            <div className="reviews">
                                <h4>Reviews</h4>
                                <div className="alert alert-info" role="alert">
                                    Be the first one to Review
                                </div>
                            </div>


                            {/* <!--------------------------- reviews ends here ---------------------------------> */}

                        </div>

                        <div className="col-sm-12 col-md-6 product-info">
                            <div className="row justify-content-end">
                                <div className="col-8">
                                    <h4 className="product-name">{data.name}</h4>
                                </div>

                                <div className="col-4">
                                    <h4 className="product-price">Rs {renderDiscountedPrice(data.regularPrice, data.discountPercentage)} &nbsp;<span className="discount-price">Rs {data.regularPrice} </span></h4>
                                </div>
                            </div>
                            <Ratings count={3.2} />
                            <div className="product-description mt-3">
                                <p> {data.description}</p>
                            </div>
                            <div className="availability">
                                <p>Availability: {data.status === "Available" ? "In Stock" : "Out of Stock"}</p>
                            </div>
                            <div className="row dimensions">
                                <div className="col-sm-12 col-md-6">
                                    <p className="quantity me-2">Quantity:</p>
                                    <div className="quantity-btn">
                                        <button className="decrement-btn" disabled={quantity <= 1}onClick={() => handleQuantityChange("-")}>-</button>
                                        <span>{quantity}</span>
                                        <button className="increment-btn" onClick={() => handleQuantityChange("+")}>+</button>
                                    </div>
                                </div>
                                {/* <!--------------------------- quantity ends here --------------------------------->   */}

                                <div className="col-sm-12 col-md-6">
                                    {cartData["size"].length === 1 && <span className="quantity me-2">Size : &nbsp; {cartData["size"][0]} </span>}
                                    {cartData["size"].length >= 2 && (
                                        <Form.Select name="size" onChange={handleOnChange}>
                                            <option disabled>Please Select the size</option>
                                            {cartData["size"].map(el => <option value={el} key={el} >{el}</option>)}
                                        </Form.Select>
                                    )}
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="row">
                                        <div className="col-2 mt-2">
                                            <p className="quantity">Color:</p>
                                        </div>
                                        <div className="col-6">
                                            <div className="color-btn mt-2">
                                                {cartData.colors.map(el => <button className='colors' key={el} id={el} onClick={() => handleColorChange(el)}> {el === cartDetail.color ? <i className="bi bi-check"></i> : <i>&nbsp;</i>}</button>)}

                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--------------------------- quantity ends here --------------------------------->   */}
                                </div>
                            </div>
                            <div className="cart-row my-3">

                                <button className="cart me-2 mb-1" onClick={handleOnCartClick}> <i className="bi bi-cart"></i>&nbsp;&nbsp;Add to cart</button>
                                <button className="buy-now me-2"  onClick={handleOnBuyNow}>Buy Now</button>
                                <button className="wishlist me-2" onClick={handleOnWishListClick}> <i className="bi bi-heart"></i></button>
                                <button className="share" onClick={() => { navigator.clipboard.writeText("localhost:3000/product/" + id); alert("Link Copied") }}> <i className="bi bi-share"></i></button>
                            </div>
                            <DataSpecs warranty={data.warranty} material={data.material} gender={data.gender} category={data.categoryId.subCategoryName} />

                        </div>
                        {/* <!--------------------------- product-info ends here ---------------------------------> */}
                    </div>

                </div>

            }
        </>

    )
}

export default SingleProduct