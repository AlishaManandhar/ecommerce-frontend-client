import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getsearchedProduct } from "../services/productServices"
import { getSubCategories } from "../services/subCategoryServices"

function NavBar() {
    const [searchText, setSearchText] = useState("")
    const [products, setProducts] = useState("")
    const [categories, setCategories] = useState([])

    async function fetchData() {
        const { data: prod } = await getSubCategories()
        const data = []
        const category = []
        let index;
        for (let i = 0; i < prod.length; i++) {
            if (category.includes(prod[i].parentCategoryId.categoryName)) {
                index = category.findIndex(el => el === prod[i].parentCategoryId.categoryName)
                data[index].subCategory.push(prod[i])
            }
            else {
                category.push(prod[i].parentCategoryId.categoryName)
                data.push({
                    category: prod[i].parentCategoryId.categoryName,
                    subCategory: [prod[i]]
                })
            }
        }
        setCategories(data)

    }

    useEffect(() => {
        fetchData();
        return "Completed"
    }, []);
    const handleOnChange = ({ currentTarget: input }) => {
        setSearchText(input.value)
    }
    const navigate = useNavigate()
    const handleSearchClick = async () => {
        const { data } = await getsearchedProduct(searchText)
        setProducts(data)
        return navigate("/search", { state: { data: products } })
    }


    return (
        <>
            <div className="container-fluid bg-main">
                <div className="container py-1">
                    <div className="row topBar">
                        <div className="col">
                            <h6>Welcome to Baby Store &nbsp;&nbsp;&nbsp;&nbsp; Hotline: 0123 456 789</h6>
                        </div>
                        <div className="col">
                            {/* <!-- <h6>ENG | Rs USD</h6> --> */}
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <h6><a href="/" >My account</a></h6>
                                </div>
                                <div className="col">
                                    <h6><a href="/login" >Register | Login</a></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-3">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            <a className="navbar-brand" href="/">
                                Online Baby Store</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse justify-content-center" id="navbarScroll">
                                <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll" style={{ bsScrollHeight: "100px" }}>
                                    <li className="nav-item">
                                        <a className="nav-link  px-3" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link px-3" href="/blog">Blogs</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle px-3" href="#" id="navbarScrollingDropdown"
                                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Categories
                                        </a>

                                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                            {categories.map(el => {
                                                return (
                                                    <>
                                                   
                                                    
                                                    <li>
                                                    <div class="dropdown">
                                                        <button type="button" class="btn dropdown-toggle" data-bs-toggle={el.category} id={el.category} aria-expanded="false">{el.category}  </button>
                                                    </div>
                                                    <ul class="dropdown-menu" aria-labelledby={el.category}>
                                                    {el.subCategory.map(data => <li><a class="dropdown-item" href="/cart">{data.subCategoryName}</a></li>)}
                                                </ul>
                                                </li>
                                                </>
                                                )
                                            })}

                                        </ul>
                                    </li>

                                    

                                </ul>
                            </div>
                            <form className="row">
                                <div className="col-9">
                                    <input type="text" class="form-control" placeholder="Search here..." onChange={handleOnChange} value={searchText} />
                                </div>
                                <div className="col-3">

                                    <i className="bi bi-search d-inline-block mt-2" style={{ cursor: "pointer" }} onClick={handleSearchClick}></i>
                                </div>
                            </form>
                            <div className="home-cart d-none d-md-block">
                                {/* <span><a href="/"><i className="bi bi-search"></i></a>&nbsp;</span> */}
                                <span><Link to="/wishlist"><i className="bi bi-heart"></i> 02 &nbsp;</Link></span>
                                <span><Link to="/cart"><i className="bi bi-cart4"></i> 02</Link></span>

                            </div>
                        </div>

                        <div className="container d-block  d-sm-block d-md-none pt-3">
                            <div className="row home-cart-sm text-center">
                                <div className="col-4">
                                    <a href="/"><i className="bi bi-search"></i></a>
                                </div>

                                <div className="col-4">
                                    <a href="/"><i className="bi bi-heart"></i> 02</a>
                                </div>

                                <div className="col-4">
                                    <a href="/"><i className="bi bi-cart4"></i> 02</a>

                                </div>
                            </div>

                        </div>


                    </nav>
                </div>
                {/* <!--------------------------- navbar ends here ---------------------------------> */}

            </div>

        </>
    )
}

export default NavBar