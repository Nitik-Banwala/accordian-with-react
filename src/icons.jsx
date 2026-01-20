import React from "react";

export const ArrowDown = ({
    width = 12,
    height = 8,
    color = "#808080",
    className = "",
    rotate = 0,
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={{ transform: `rotate(${rotate}deg)` }}
        >
            <path
                d="M10 0L5.707 4.293L1.414 0L0 1.414L5.707 7.121L11.414 1.414L10 0Z"
                fill={color}
            />
        </svg>
    );
};
