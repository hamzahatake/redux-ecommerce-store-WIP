import React from "react";

export default function About() {
    return (
        <div className="pt-36 pb-20 min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center animate-fade-in-up">
            <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-10 px-6 sm:px-10 mx-4">
                {/* Header */}
                <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6 tracking-tight">
                    About <span className="text-blue-600">ShopEase</span>
                </h1>

                {/* Intro */}
                <p className="text-lg text-gray-700 text-center leading-relaxed mb-10">
                    Welcome to <strong>ShopEase</strong>, your one-stop destination for fashion, electronics, and home essentials. We deliver seamless shopping with top-quality products, fast shipping, and unbeatable prices.
                </p>

                {/* Mission */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">🚀 Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        We’re committed to making online shopping easy, enjoyable, and accessible. Our curated product selection ensures you find what you need — when you need it. Your satisfaction is our top priority.
                    </p>
                </div>

                {/* Why Us */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">💡 Why Shop With Us?</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 pl-2">
                        <li>Wide range of high-quality products</li>
                        <li>Fast & reliable shipping</li>
                        <li>Secure checkout options</li>
                        <li>24/7 customer support</li>
                        <li>Easy returns & exchanges</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
