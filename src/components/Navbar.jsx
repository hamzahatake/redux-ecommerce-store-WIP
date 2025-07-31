import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../store/productsSlice";

export default function Navbar() {
  const { data: productsData } = useGetAllProductsQuery();
  const [search, setSearch] = useState("");
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) {
      console.log("Search is empty.");
      return;
    }

    const results = productsData?.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    console.log("Search results:", results);
    setSearch("");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="flex justify-between items-center h-20 px-4 sm:px-6"
        >
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold text-gray-900 tracking-tight"
          >
            <span className="text-blue-600">ShopEase</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 font-light">
            <Link to="/" className="hover:text-blue-500 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-500 transition">
              About
            </Link>
            <Link to="/products" className="hover:text-blue-500 transition">
              Products
            </Link>
          </div>

          {/* Mobile Menu Icon (Optional future) */}
          <div className="block md:hidden">
            {/* Add mobile menu logic here later */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          {/* Search & Cart */}
          <div className="flex items-center gap-4">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-28 md:w-64 px-4 py-2 border border-gray-300 focus:outline-none focus:ring ring-blue-300 transition duration-300 rounded-full"
              />
              <button
                type="submit"
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              >
                Search
              </button>
            </form>

            <Link
              to="/cart"
              className="relative flex items-center p-2 rounded-full hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow-lg animate-bounce">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
