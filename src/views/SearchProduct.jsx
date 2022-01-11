
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import PageInfo from "../components/PageInfo"
import Ratings from "../components/Ratings"



function Search(props) {
    
    
    const location = useLocation()
    
    const [products, setProducts] = useState(null)

    useEffect(() => {
        setProducts(location.state.data)
        return "Hi"
    }, [location.state.data])
    
   
    const renderProducts = () => {

        return products.map(product => {
            return (
                <div className="col-sm-12 col-md-3" key={product._id}>
                    <div className="card mx-auto" style={{ width: "18rem" }}>
                        <img src={`http://localhost:5000/${product.frontImage}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className="row justify-content-between">
                                <div className="col-8">
                                    <span className="card-title name"><Link to={`/product/${product._id}`} >{product.name}</Link></span>
                                </div>
                                <div className="col-4 pricetag">
                                    <h5 className="card-title pt-1">Rs&nbsp;{product.regularPrice}</h5>
                                </div>
                                <Ratings count={3} />
                            </div>

                        </div>
                    </div>
                </div>


            )
        })
    }
    return (
        <>
            <PageInfo title="Search product" active="Search" />

            <div className="container">
                {/* <div className="row">
                    <div className="col-sm-12 col-md-8 ps-3 ms-3">
                        <div className="dropdown filter-product">
                            <button className="btn bg-main dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="bi bi-funnel-fill"></i>&nbsp;Filter
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">On Sale</a></li>
                                <li><a className="dropdown-item" href="#">For Girls</a></li>
                                <li><a className="dropdown-item" href="#">For Boys</a></li>
                                <li><a className="dropdown-item" href="#">Unisex</a></li>
                                <li><a className="dropdown-item" href="#">On Discount</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3  ms-3 ps-3 text-end">
                        <div className="dropdown filter-product">
                            <button className="btn bg-main dropdown-toggle" type="button" id="sort" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By:
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="sort">
                            <li><a className="dropdown-item" href="#">All Matches</a></li>
                                <li><a className="dropdown-item" href="#">Price low to high</a></li>
                                <li><a className="dropdown-item" href="#">Price low to high</a></li>
                                <li><a className="dropdown-item" href="#">Discount low to high</a></li>
                                <li><a className="dropdown-item" href="#">Discount low to high</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div> */}
                <div className="row products mt-3">
                    {products && renderProducts()}
                </div>
            </div>

        </>

    )
}

export default Search