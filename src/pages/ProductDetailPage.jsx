import { useState, useEffect } from "react";
import { getProductById } from "../api/Products";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

export default function SpecificProduct() {
    const dispatch = useDispatch();

    const [product, setProduct] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(null);

    const { id } = useParams();

    const selectedProduct = async (id) => {
        setLoading(true);
        try {
            const theProduct = await getProductById(id);
            setProduct(theProduct);
            setError(null);
        } catch (err) {
            setError(err.message);
            return [];
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        selectedProduct(id)
    }, [id]);


    if (isLoading) {
        return (
            <div className="fixed inset-0 flex justify-center items-center bg-transparent z-50">
                <div className="spinner"></div>
                <style>
                    {`
                @keyframes spinner {
                    to {transform: rotate(360deg);}
                }
                .spinner {
                    width: 48px;
                    height: 48px;
                    border: 6px solid #fff3;
                    border-top-color: #fff;
                    border-radius: 50%;
                    animation: spinner 0.8s linear infinite;
                }
                `}
                </style>
            </div>
        );
    }

    if (hasError) {
        return <p className="text-red-400 text-center mt-10">{hasError}</p>;
    }

    return (
        <div className="w-screen h-160 mt-10">
            {product && (
                <div className="bg-gray-50 rounded-2xl max-w-5xl ml-80 h-160 grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Product Image */}
                    <div className="w-full content-center overflow-hidden rounded-lg">
                        <img
                            src={product?.image}
                            alt={product?.title}
                            className="object-cover w-full h-fit rounded-lg shadow-md"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="border h-full flex flex-col justify-center">

                        {/* Category */}
                        <span className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                            {product?.category}
                        </span>

                        {/* Title */}
                        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
                            {product?.title}
                        </h1>

                        {/* Price */}
                        <p className="text-xl text-indigo-600 font-semibold mb-6">
                            ${product?.price}
                        </p>

                        {/* Description */}
                        <p className="text-gray-700 text-base leading-relaxed mb-8">
                            {product?.description}
                        </p>

                        {/* Add to Cart Button */}
                        <button className="w-full h-fit sm:w-auto px-6 py-5 bg-indigo-600 text-white font-medium rounded-md 
                        hover:bg-indigo-700 transition" onClick={() => dispatch(addItem(product))}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}