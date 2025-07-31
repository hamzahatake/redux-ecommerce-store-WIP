import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import About from "./pages/About";
import Cart from "./pages/CartPage";
import Products from "./pages/ProductListPage";
import SpecificProduct from "./pages/ProductDetailPage";
import CheckOutPage from "./pages/CheckoutPage";
import OrderSummary from "./components/OrderSummary";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
          </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/ordersummary" element={<OrderSummary />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SpecificProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
