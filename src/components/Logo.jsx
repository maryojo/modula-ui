import React from 'react';

const Logo = ({ className = '' }) => {
    return (
        <svg
            width="215"
            height="50"
            viewBox="0 0 215 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Icon Element - Abstract 'M' */}
            <circle cx="25" cy="25" r="20" fill="url(#grad1)" opacity="0.2" />
            <path
                d="M15 35V15L25 25L35 15V35"
                stroke="url(#grad2)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Text 'modula ui' */}
            <text
                x="55"
                y="32"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontWeight="800"
                fontSize="28"
                fill="#111827"
                letterSpacing="-1"
            >
                modula ui
            </text>

            {/* Gradients */}
            <defs>
                <radialGradient id="grad1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(25 25) rotate(90) scale(20)">
                    <stop stopColor="#4F46E5" />
                    <stop offset="1" stopColor="#A5B4FC" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="grad2" x1="15" y1="15" x2="35" y2="35" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4F46E5" />
                    <stop offset="1" stopColor="#EC4899" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Logo;
