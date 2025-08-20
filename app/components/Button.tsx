import React from 'react';

const Button = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
    return (
        <button
            onClick={onClick}
            className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 active:scale-95 transition-all duration-75 font-medium shadow-lg hover:shadow-xl"
        >
            {children}
        </button>
    );
};

export default Button;
