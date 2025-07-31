import React from "react";

export default function Footer() {
    return (
        <div>
            <p className="bg-gray-50 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
            </p>
        </div>
    );
}