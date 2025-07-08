import React from "react";
import Products from "./ProductListPage";
import Cover from "/images/Cover.jpg"

export default function Home() {
    return (
        <div className="bg-white">
            <section className="relative top-72 py-12 px-4 sm:py-16 sm:px-8 flex flex-col items-center justify-center min-h-[320px] w-full overflow-hidden text-center">
                <style>
                    {`@keyframes float {0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); }}`}
                </style>
                <div className="flex flex-col items-center justify-center w-full h-full ">
                    <h1 className="relative z-10 text-3xl sm:text-5xl leading-tight sm:leading-[56px] font-bold text-white font-inter mb-3 sm:mb-4 w-full animate-[float_3s_ease-in-out_infinite]">
                        Welcome to ShopEase
                    </h1>
                    <p className="relative z-10 text-base sm:text-lg text-textSecondary mb-6 sm:mb-8 w-full animate-[float_4s_ease-in-out_infinite]">
                        Stream and discover the best anime, curated for you.
                    </p>
                </div>
            </section>

            {/* HeroCover background for top section */}
            <div
                className="border absolute top-0 left-0 w-full "
                style={{ zIndex: 0, height: "500px", pointerEvents: "none" }}
            >
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <img
                        src={Cover}
                        alt="Hero Cover"
                        className="w-full absolute top-10 rounded-b-4xl object-cover"
                        style={{ objectPosition: "center", height: "200%", clipPath: "inset(0 0 250px 0)" }}
                    />
                </div>
            </div>
            <div className="relative bg-white top-120">
                <Products />
            </div>
        </div>
    );
}