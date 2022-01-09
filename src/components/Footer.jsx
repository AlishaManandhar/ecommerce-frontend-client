function Footer() {
    return (
        <><div className="container-fluid footer">
            <div className="container mx-auto">
                <div className="row">
                    <div className="col-sm-12 col-md-3 footer-col">
                        <h2 className="footer-title">Contact Us</h2>

                        <div className="address">
                            <span className="location">Handigaun, Kathmandu</span> <br />
                            <span className="country">Nepal</span>
                        </div>

                        <div className="contact">
                            <span>0123 456 789</span><br />
                            <span>0123 452 152</span> <br />
                        </div>

                        <div className="email">
                            <span>info@example.com</span><br />
                            <span>www.example.com</span>
                        </div>


                    </div>


                    <div className="col-sm-12 col-md-3 footer-col">
                        <h2 className="footer-title">Products</h2>

                        <div className="product-links">
                            <ul>
                                <li><a href="/">New Arrivals</a></li>
                                <li><a href="/">Best Seller</a></li>
                                <li><a href="/">Trendy Items</a></li>
                                <li><a href="/">Best Deals</a></li>
                                <li><a href="/">On Sale Products</a></li>
                                <li><a href="/">Featured Proucts</a></li>
                            </ul>
                        </div>


                    </div>

                    <div className="col-sm-12 col-md-3 footer-col">
                        <h2 className="footer-title">Information</h2>

                        <div className="information-links">
                            <ul>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Terms and Conditions</a></li>
                                <li><a href="/">Payment Method</a></li>
                                <li><a href="/">Product Warranty</a></li>
                                <li><a href="/">Return process</a></li>
                                <li><a href="/">Payment Security</a></li>
                            </ul>
                        </div>


                    </div>

                    <div className="col-sm-12 col-md-3 footer-col">
                        <h2 className="footer-title">Newsletter</h2>

                        <div className="information-links">
                            <p>Subscribe our newsletter and get all update of our product</p>
                        </div>

                        <div className="information-links">
                            <h5><b>Follow us</b></h5>
                            Facebook - Twitter - Google+
                        </div>



                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
                <span className="text-center d-block">Copyright &copy; All rights reserved</span>
        </div></>


    )
}

export default Footer