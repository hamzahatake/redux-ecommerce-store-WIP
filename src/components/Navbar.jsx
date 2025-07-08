// Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800 hover:text-indigo-600">
              ShopEase
            </Link>
          </div>

          {/* Center - Navigation links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600">
              Contact
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-indigo-600">
              Products
            </Link>
          </div>

          {/* Right side - Cart & Sign In */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-gray-700 hover:text-indigo-600">
              Cart
            </Link>
            <Link to="/login" className="px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
