import React, { useState, useEffect } from 'react'

import { paginate } from "../utils/paginate"
import Pagination from '../components/Paginate'
import { getOrderById } from '../services/orderServices'
import moment from 'moment'
import { Link, useNavigate, useParams } from 'react-router-dom'
import PageInfo from '../components/PageInfo'

function SingleOrder() {

    const [products, setProducts] = useState(null)
    const id = useParams().id
    const navigate = useNavigate()
    async function fetchData() {
        const { data } = await getOrderById(id)
        setProducts(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    const [page, setPage] = useState({
        pageSize: 2,
        currentPage: 1
    })

    const handlePageChange = (pageNo) => {
        const data = { ...page }
        data.currentPage = pageNo
        setPage(data)
    };

    // const handleCancelOrder = async() => {
    //     if (products[0].orderId.orderStatus === "Processing")
    //     {
    //         const result = await deliverOrder(id)
    //     }
    //     else if (products[0].orderId.orderStatus === "Pending")
    //     {
    //         const result = await processOrder(id)
    //     }

    //     navigate("/order")
    // }
    const header = ["ProductImage", "Product Name", "Price", "Color", "Size", "Quantity", "OrderId"]


    const getPagedData = () => {
        const { pageSize, currentPage } = page
        const allProducts = products

        return paginate(allProducts, currentPage, pageSize);
    };

    // const renderButton = () => {
    //     if(products[0].orderId.orderStatus !== "Shipped")
    //     {

    //         return (<button className="processOrder me-3" onClick={handleProcessClick}>
    //          {products[0].orderId.orderStatus === "Pending" ? "Process Order" : "Ship the order"}
    //         </button> 
    //         )
    //     }
    //     else
    //         return ""

    // }
    return (
        products &&
        <>
            <PageInfo title="Orders" active={`order/${id}`} />
            <div className="container">
                <div className="row">

                    <div className="table-responsive">
                        <table className='table align-middle order-product-table'>
                            <thead>
                                {header.map(el => <th scope="col">{el}</th>)}
                            </thead>
                            <tbody>
                                {getPagedData().map(el => {
                                    return (
                                        <tr>
                                            <td><img src={`http://localhost:5000/${el.productId.frontImage}`} width="200px" height="auto" /></td>
                                            <td scope="row">{el.productName}</td>
                                            <td>{el.price}</td>
                                            <td>{el.color}</td>
                                            <td>{el.size}</td>
                                            <td>{el.quantity}</td>
                                            <td>{el.orderId._id}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>

                        </table>
                    </div>
                    <Pagination
                        pageSize={page.pageSize}
                        currentPage={page.currentPage}
                        itemsCount={products.length}
                        onPageChange={handlePageChange}
                    />
                    {/* <div className="text-end">
                {products && renderButton()}
                
                             
            </div> */}

                </div>
            </div>
        </>)
}

export default SingleOrder