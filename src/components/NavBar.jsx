function NavBar() {
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
                                    <h6><a href="/" >Register | Login</a></h6>
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
                                Logo</a>
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
                                        <a className="nav-link px-3" href="/">Blogs</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle px-3" href="/" id="navbarScrollingDropdown"
                                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Categories
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                            <li><a className="dropdown-item" href="/">Nutrition</a></li>
                                            <li><a className="dropdown-item" href="/">Clothes</a></li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li><a className="dropdown-item" href="/">Shoes</a></li>
                                        </ul>
                                    </li>

                                </ul>
                            </div>
                            <div className="home-cart d-none d-md-block">
                                <span><a href="/"><i className="bi bi-search"></i></a>&nbsp;</span>
                                <span><a href="/"><i className="bi bi-heart"></i> 02 &nbsp;</a></span>
                                <span><a href="/"><i className="bi bi-cart4"></i> 02</a></span>

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