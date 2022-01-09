import CheckoutForm from "../components/CheckoutForm"
import Invoice from "../components/Invoice"
import PageInfo from "../components/PageInfo"

function Checkout()
{
    
    
    return (
        <>
        <PageInfo title="Checkout" active="Checkout" /> 
        <div className="container checkout-section">
        <div className="container">
            <div className="row">
                <CheckoutForm />
                {/* <!--------------------------- billing ends here ---------------------------------> */}
                <Invoice />
                {/* <!--------------------------- billing ends here ---------------------------------> */}

            </div>
        </div>
    </div>
    </>
    )
}

export default Checkout