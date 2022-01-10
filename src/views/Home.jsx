import HomeCarousel from "../components/HomeCarousel";
import PopularProducts from "../components/PopularProducts";
import ShippingFlow from "../components/ShippingFlow";
import ViewBlogs from "../components/ViewBlogs";

function Home()
{
    return (
        <>
        <HomeCarousel />
     <PopularProducts />
        <ShippingFlow />
        <div className="container">
            <ViewBlogs />
        </div>
        
        </>
    )
}
export default Home