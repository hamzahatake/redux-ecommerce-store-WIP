import React from "react";
import Products from "./ProductListPage";
import Cover from "/images/Cover.jpg";

export default function Home() {
    return (
        <div className="w-full min-h-screen bg-gray-50">
            {/* HERO SECTION */}
            <section className="relative w-full mt-20 h-[80vh] min-h-[500px] overflow-hidden flex items-center justify-center">
                {/* Background Image */}
                <img
                    src={Cover}
                    alt="Cover"
                    className="absolute inset-0 w-full h-full object-cover rounded-b-3xl brightness-90"
                />

                {/* Overlay + Hero Text */}
                <div className="relative z-10 text-white text-center px-6">
                    <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
                        Welcome to <span className="text-blue-400">ShopEase</span>
                    </h1>
                    <p className="mt-4 text-lg sm:text-xl font-medium drop-shadow">
                        Discover fashion, gadgets, and essentials—all in one place.
                    </p>
                    <a
                        href="#products"
                        className="mt-8 inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300 shadow-md"
                    >
                        Shop Now
                    </a>
                </div>

                {/* Optional Floating Animation */}
                <style>
                    {`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
            .float { animation: float 4s ease-in-out infinite; }
          `}
                </style>
            </section>

            {/* PRODUCTS SECTION */}
            <section id="products" className="mt-[-50px] px-4 sm:px-8">
                <Products />
            </section>
        </div>
    );
}
