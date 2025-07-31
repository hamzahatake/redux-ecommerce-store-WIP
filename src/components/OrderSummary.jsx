import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../store/cartSlice";

export default function OrderSummary() {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const shipping = 5;
    const total = subtotal + shipping;

    return (
        <div className="pt-36 pb-12 min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-md mx-auto my-auto p-6 bg-white rounded-2xl shadow-lg space-y-6">
                <h2 className="text-2xl font-bold text-gray-800">Order Summary</h2>

                {/* List of Items */}
                {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-700 font-medium">{item.title}</p>
                            <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-gray-800 font-semibold">
                            ${item.price * item.quantity}
                        </p>
                    </div>
                ))}

                {/* Divider */}
                <div className="border-t border-gray-200 pt-4"></div>

                {/* Subtotal */}
                <div className="flex justify-between items-center">
                    <p className="text-gray-700 font-medium">Subtotal</p>
                    <p className="text-gray-800 font-semibold">${subtotal.toFixed(2)}</p>
                </div>

                {/* Shipping */}
                <div className="flex justify-between items-center">
                    <p className="text-gray-700 font-medium">Shipping</p>
                    <p className="text-gray-800 font-semibold">${shipping.toFixed(2)}</p>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <p className="text-lg font-bold text-gray-800">Total</p>
                    <p className="text-lg font-bold text-gray-800">${total.toFixed(2)}</p>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                    <Link
                        to="/products"
                        className="w-full text-center mx-25 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
}
