import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity } from "../store/cartSlice";

export default function Cart() {

    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const total = items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center px-4 py-10">
            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
                {/* Header */}
                <h1 className="text-3xl font-semibold text-gray-800 mb-8">
                    Your Cart
                </h1>

                {/* Cart Items */}
                <div className="space-y-6">
                    {items.length === 0 && (
                        <p className="text-gray-500 text-center">Your cart is empty.</p>
                    )}

                    {items.map((item) => (
                        <div key={item.id} className="flex items-center justify-between border-b border-gray-200 pb-4">
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image || "https://via.placeholder.com/60"}
                                    alt={item.title}
                                    className="w-16 h-16 rounded-lg object-cover" />
                                <div>
                                    <h2 className="text-lg font-medium text-gray-800">{item.title}</h2>
                                    <p className="text-sm text-gray-500">{item.category || "No category"}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-8">
                                <p className="text-gray-700 font-semibold">${item.price}</p>
                                <div className="flex items-center border border-gray-300 rounded-lg">
                                    <button className="px-2 py-1 text-gray-500 hover:text-gray-700"
                                        onClick={() => {
                                            if (item.quantity > 1) {
                                                dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1, }));
                                            }
                                        }}>
                                        -
                                    </button>
                                    <span className="px-3 text-gray-700">{item.quantity}</span>
                                    <button
                                        className="px-2 py-1 text-gray-500 hover:text-gray-700"
                                        onClick={() => dispatch(updateQuantity({
                                            id: item.id, quantity: item.quantity + 1
                                        }))}>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-8"></div>

                {/* Totals & Checkout */}
                <div className="flex justify-between items-center">
                    <div className="text-gray-700 text-xl font-semibold">
                        Total: ${total.toFixed(2)}
                    </div>
                    <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}
