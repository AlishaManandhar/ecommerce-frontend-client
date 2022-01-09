function ShippingFlow()
{
    return (
        <div className="container-fluid shipping-flow">
        <div className="container mx-auto">
        <div className="row mx-3 px-3">
          <div className="col-sm-12 col-md-4 text-center">
            <h1><i className="bi bi-truck"></i></h1>
            <h3>Free Shipping</h3>
            <p>Start from Rs 1500</p>
           
          </div>
          <div className="col-sm-12 col-md-4 text-center">
            <h1><i className="bi bi-wallet"></i></h1>
            <h3>
              Money Back Guarantee
              </h3>
            <p>Back within 7 days</p>
            
          </div>
          <div className="col-sm-12 col-md-4 text-center">
            <h1><i className="bi bi-shield-check"></i></h1>
            <h3>
              Cash On Delivery
              </h3>
            <p>Payment Security</p>
          </div>
        </div>
        </div>
      </div>
    )
}
export default ShippingFlow