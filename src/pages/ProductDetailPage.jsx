import { useParams } from "react-router-dom";
import { addItem } from "../store/cartSlice";
import { useGetProductByIdQuery } from "../store/productsSlice";
import { useDispatch } from "react-redux";
import LoadingSpinner from "../components/Loading";

export default function SpecificProduct() {
    const { id } = useParams();
    const { data: product, isLoading, error } = useGetProductByIdQuery(id);
    const dispatch = useDispatch();

    if (isLoading) {
        return (
            <div className="flex inset-0">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return <p className="text-red-400 text-center mt-10">{error}</p>;
    }

    return (
        <div className="pt-24 pb-24 bg-gray-50 min-h-screen">
            {product && (
                <div className="max-w-3xl my-10 mx-auto px-4 min-h-[500px] flex flex-col justify-center">
                    <div className="flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-lg p-6">

                        {/* Product Image */}
                        <div className="flex-shrink-0 w-full md:w-1/2">
                            <img
                                src={product?.image}
                                alt={product?.title}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 flex flex-col justify-between">

                            <div>
                                {/* Category */}
                                <span className="text-sm text-gray-500 uppercase tracking-wide">
                                    {product?.category}
                                </span>

                                {/* Title */}
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
                                    {product?.title}
                                </h1>

                                {/* Price */}
                                <p className="text-xl text-green-600 font-semibold mt-4">
                                    ${product?.price}
                                </p>

                                {/* Description */}
                                <p className="text-gray-700 mt-4">
                                    {product?.description}
                                </p>
                            </div>

                            {/* Add to Cart Button */}
                            <button
                                onClick={() => dispatch(addItem(product))}
                                className="mt-6 w-full md:w-auto bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition-colors duration-300"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
}