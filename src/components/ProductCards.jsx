export default function ProductCard({ image, title, price }) {
    return (
        <div className="group w-full max-w-xs rounded-3xl bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] animate-fade-in-up">
            {/* Image */}
            <div className="relative h-52 w-full overflow-hidden rounded-2xl">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Optional Badge */}
                <span className="absolute top-2 left-2 rounded-full bg-black px-3 py-1 text-xs font-semibold text-white shadow-md">New</span>
            </div>

            {/* Info */}
            <div className="mt-4 text-black">
                <h2 className="truncate text-base font-medium">{title}</h2>
                <div className="mt-1 flex items-center gap-2">
                    <span className="text-lg font-semibold text-black">${price?.toFixed(2)}</span>
                    <span className="text-sm text-gray-400 line-through">$10.99</span>
                </div>
            </div>

            {/* Add to Cart */}
            <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-black py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-gray-800">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
                    className="h-5 w-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 
                          14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 
                          2.1-4.684 2.924-7.138a60.114 60.114 0 0 
                          0-16.536-1.84M7.5 14.25L5.106 
                          5.272M6 20.25a.75.75 0 1 1-1.5 
                          0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 
                          1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                </svg>
                Add to Cart
            </button>
        </div>
    );
}
