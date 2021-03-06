import React, { useState, useEffect } from 'react'

import { paginate } from "../utils/paginate"
// import Pagination from '../components/Paginate'
import { getMyOrder } from '../services/orderServices'

import { Link } from 'react-router-dom'
import PageInfo from '../components/PageInfo'

function Order() {

    const [orders, setOrders] = useState(null)
    const [status, setStatus] = useState("Pending")
    async function fetchData() {
        const { data } = await getMyOrder()
        setOrders(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    const [page, setPage] = useState({
        pageSize: 6,
        currentPage: 1
    })

    const handlePageChange = (pageNo) => {
        const data = { ...page }
        data.currentPage = pageNo
        setPage(data)
    };

    const handleOrderStatus = (id) => {
        setStatus(id)
    }

    const getPagedData = () => {
        const { pageSize, currentPage } = page
        const allOrders = orders.filter(el => el.orderStatus === status)
        
        return paginate(allOrders, currentPage, pageSize);
    };

    const renderOrderStatus = () => {
        if (status === "Pending") {
            return "bg-info"
        }
        else if (status === "Processing") {
            return "bg-primary"
        }
        else if (status === "Shipped") {
            return "bg-success"
        }
    }
    return (
        <>
            <PageInfo title="Orders" active="Order" />
            <div className="container">
                <div className="dropdown filter-product ms-3">
                    <button className="btn bg-main dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-funnel-fill"></i>&nbsp;Filter
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" onClick={() => handleOrderStatus("Pending")}>Pending</a></li>
                        <li><a className="dropdown-item" onClick={() => handleOrderStatus("Processing")}>Processing</a></li>
                        <li><a className="dropdown-item" onClick={() => handleOrderStatus("Shipped")}>Shipped</a></li>
                    </ul>
                </div>

                <div className="order-table container">
                    <div className="alert alert-info text-center mt-3" role="alert">
                        <b>{status} Orders</b>
                    </div>
                    <div className="table-responsive-sm">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">OrderNo</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Shipping Price</th>
                                    <th scope="col ">Status</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders && getPagedData().map(el => {
                                    return (
                                        <>
                                            <tr>

                                                <td className="order-link"> <Link to={`/order/${el._id}`} >{el._id}</Link>  </td>
                                                <td className="pink-theme">Rs &nbsp;{el.total}</td>
                                                <td>
                                                    {el.shippingPrice}
                                                </td>
                                                <td><span className={`badge rounded-pill ${renderOrderStatus()}`} > {el.orderStatus} </span> </td>
                                                <td width="350px">{`Province: ${el.province},${el.city},${el.area},${el.address}`}</td>
                                            </tr>




                                        </>
                                    )
                                })}


                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>



    )
}

export default Order