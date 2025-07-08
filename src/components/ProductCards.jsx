import React from "react";

export default function ProductCard({ image, title, category, price }) {
    return (
        <div className="relative group rounded-xl overflow-hidden bg-white/10 backdrop-blur border border-white/10 
        shadow-xl hover:shadow-cyan-500/30
        transform transition-transform duration-300 hover:scale-105 flex flex-col justify-end min-h-[16rem] ">
            {/* Background Image */}
            <img
                src={image}
                alt={`Product: ${title}`}
                className="relative inset-0 w-fit h-fit object-cover transition-transform duration-300 group-hover:scale-110 z-0"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

            {/* Content */}
            <div className="relative z-20 p-4 flex flex-col justify-end h-full">
                {/* Product Title */}
                <h2 className=" text-white text-2xl md:text-2xl font-extrabold mb-2 drop-shadow">
                    {title}
                </h2>

                {/* Tags: category and price */}
                <div className="flex flex-wrap gap-2 mb-2">
                    {category && (
                        <span className="bg-black/40 text-white/90 text-xs rounded px-2 py-0.5">
                            {category}
                        </span>
                    )}
                    <span className="bg-indigo-600 text-white text-xs rounded px-2 py-0.5">
                        {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        }).format(price)}
                    </span>
                </div>
            </div>
        </div>
    );
}
