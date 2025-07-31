import React, { useEffect } from "react";
import { useGetAllProductsQuery } from "../store/productsSlice";
import ProductCard from "../components/ProductCards";
import { Link } from "react-router-dom";

export default function Products() {
    const { data: products, isLoading, error } = useGetAllProductsQuery();

    if (error) {
        return <p className="text-red-400 text-center mt-10">{hasError}</p>;
    }

    return (
        <div className="bg-gray-50 flex w-full max-w-7xl mx-auto py-16 mt-10">
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto my-auto transition-opacity duration-700
            ${isLoading ? "opacity-0" : "opacity-100"}`}>
                {products?.slice(0, 20).map(product => (
                    <Link to={`/products/${product.id}`} key={product.id}>
                        <ProductCard
                            image={product.image}
                            title={product.title}
                            category={product.category}
                            price={product.price}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

