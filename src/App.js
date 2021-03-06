import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Auth from "./views/Auth";
import SingleProduct from "./views/SingleProduct";
import "./css/style.css"
import Home from "./views/Home";
import SingleBlog from "./views/SingleBlog";
import Cart from "./views/Cart";
import Wishlist from "./views/Wishlist";
import Checkout from "./views/Checkout";
import Search from "./views/SearchProduct";
import ViewBlogs from "./components/ViewBlogs";
import Orders from "./views/Orders";
import SingleOrder from "./views/SingleOrder";

function App() {

    
  return (
    <>
    <ToastContainer />
      <NavBar />
      <div className="container-fluid">
      <Routes>
          <Route path="/login" exact element={<Auth />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/order" exact element={<Orders />} />
          <Route path="/order/:id" exact element={<SingleOrder />} />
          <Route path="/blog" exact element={<ViewBlogs />} />
          <Route path="/search" exact element={<Search />} />
          <Route path="/checkout" exact element={<Checkout />} />
          <Route path="/wishlist" exact element={<Wishlist />} />
          <Route path="/product/:id" exact element={<SingleProduct />} />
          <Route path="/blogs/:id" exact element={<SingleBlog />} />
        </Routes>
      </div>
      <Brands />
      <Footer />
    </>
  );
}

export default App;
