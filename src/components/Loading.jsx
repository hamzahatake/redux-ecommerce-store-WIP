import React from "react";

export default function LoadingSpinner() {
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
