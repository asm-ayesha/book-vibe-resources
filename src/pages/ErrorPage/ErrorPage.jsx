import React from "react";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">

            {/* Error Code */}
            <h1 className="text-7xl font-extrabold text-indigo-500 mb-4">
                404
            </h1>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                Oops! Page not found
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-center max-w-md mb-6">
                The page you are looking for might have been removed, had its name changed,
                or is temporarily unavailable.
            </p>

            {/* Button */}
            <button
                onClick={() => window.history.back()}
                className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition duration-300"
            >
                Go Back
            </button>

        </div>
    );
};

export default ErrorPage;