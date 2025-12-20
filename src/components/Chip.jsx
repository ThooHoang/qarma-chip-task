import React from "react";

const Chip = ({ label, removable, status }) => {

    const colorVariants = {
        green: {
            dot: "bg-status-green",
            text: "text-status-green-subtle-2"
        },
        red: {
            dot: "bg-status-red",
            text: "text-status-red-subtle-2"
        },
        blue: {
            dot: "bg-status-blue",
            text: "text-status-blue-subtle-2"
        },
        yellow: {
            dot: "bg-status-yellow",
            text: "text-status-yellow-subtle-2"
        }
    };

    return (
        <div className="
            inline-flex items-center justify-center
            min-h-component-small 
            min-w-chip-small-min
            bg-chip 
            rounded-round 
            border border-width-chip border-color-chip 
            overflow-hidden
            group
        ">

            {status && (
                <div className="pl-2 flex items-center justify-center">
                    <div className={`w-5 h-status-dot-small rounded-full ${colorVariants[status].dot}`}></div>
                </div>
            )}
            
    
            <div className={`
                flex items-center py-chip-small-y 
                ${status ? "pl-1.5" : "pl-chip-small-x"} 
                ${removable ? "pr-1" : "pr-chip-small-x"} 
            `}>
                <span className={`ui-sm-normal ${status ? colorVariants[status].text : "text-chip"}`}>
                    {label}
                </span>
            </div>
          
            {removable && (
                <div className="w-chip-small-inline-button h-chip-small-inline-button flex justify-center items-center rounded-round group-hover:bg-chip-hover">
                    <button 
                        type="button" 
                        className="flex items-center justify-center w-full h-full hover:bg-chip-remove-button-hover rounded-round focus:border-color-focus border border-transparent border-width-focus text-chip-button-level-2 hover:text-chip-remove-button-hover"
                    >
                        <svg width="12" height="12" viewBox="0 0 256 256" fill="currentColor">
                            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
};

export default Chip;