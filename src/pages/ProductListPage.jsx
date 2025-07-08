import React, { useState, useEffect } from "react";
import { getAllProducts } from "../api/Products";
import LoadingSpinner from "../components/Loading";
import ProductCard from "../components/ProductCards";
import { Link } from "react-router-dom";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setErrors] = useState(null);

    const productsList = async () => {
        setLoading(true);
        try {
            const product = await getAllProducts();
            setProducts(product);
            setErrors(null);
        } catch (err) {
            setErrors(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        productsList();
    }, [])

    if (hasError) {
        return <p className="text-red-400 text-center mt-10">{hasError}</p>;
    }

    return (
        <div className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 transition-opacity duration-700 
            ${isLoading ? "opacity-0" : "opacity-100"}`}>
            {products.slice(0, 20).map(product => (
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
    );
}

