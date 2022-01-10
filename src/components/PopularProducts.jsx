
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getProducts } from "../services/productServices"
import ContentInfo from "./ContentInfo"

function PopularProducts() {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        async function fetchData(){
                const {data} = await getProducts()
                setProducts(data)
        }
        fetchData()
    },[])

    const renderProducts = () => {
        const data = products.slice(0,8)
        return data.map(product => {
            return (
                <div className="col-sm-12 col-md-3" key={product._id} >
                <div className="card mx-auto" style={{width: "18rem"}}>
                    <img src={`http://localhost:5000/${product.frontImage}`} className="card-img-top" alt="..." />
                    <div class="card-body">
                        <div class="row justify-content-between">
                            <div class="col-8">
                                <span class="card-title name"><Link to={`/product/${product._id}`} >{product.name}</Link></span>
                            </div>
                            <div class="col-4 pricetag">
                                <h5 class="card-title pt-1">Rs&nbsp;{product.regularPrice}</h5>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>
             
            
            )
        })
    }
    return (
        <div class="popular-section container">
            <ContentInfo title="Popular products" info="All popular product find here" />
            <div class="row products">
            {products && renderProducts()}
           
                 
</div>
        </div>
    )
}

export default PopularProducts