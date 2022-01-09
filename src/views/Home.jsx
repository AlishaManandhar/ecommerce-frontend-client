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
        <ViewBlogs />
        </>
    )
}
export default Home