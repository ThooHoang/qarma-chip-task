import React from "react";


const Chip = ({label, onRemove}) => {
    return (
        <div className="
            inline-flex items-center
            bg-chip
            min-h-component-small
            rounded-round border
            border-width-chip border-color-chip
            gap-chip-small-content-to-inline-button
            "
        >
            <span className="text-chip text-ui-sm font-body font-light px-chip-small-x">{label}</span>
            <button type="button" onClick={onRemove} className="mr-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12" 
                    height="12" 
                    viewBox="0 0 256 256"
                    fill="#6E6E6E"
                >
                    <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                </svg>
            </button>
        </div>
    );
};

export default Chip;