import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/CartPage";
import Products from "./pages/ProductListPage";
import SpecificProduct from "./pages/ProductDetailPage";
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
          <Route path='/contact' element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SpecificProduct />} />
        </Routes>
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
