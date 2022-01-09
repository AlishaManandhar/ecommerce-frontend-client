function Coupon() {
    return (
        <div className="coupon-section">
            <p className="title mb-1">Coupon</p>
            <small>
                Enter your coupon code if you have one.
            </small>
            <form action="#" className="coupon-form">
                <input type="text" name="coupon" id="coupon" />
                <a href="#" className="coupon-btn">Proceed to Checkout</a>
            </form>
        </div>
    )
}
export default Coupon