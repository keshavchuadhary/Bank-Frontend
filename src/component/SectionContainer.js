import React from "react";

const SectionContainer = ({ children, extraStyles = "" }) => {
    const baseClasses = "w-full flex flex-col border border-gray-200 bg-white rounded-xl p-6 gap-6 shadow-md";
    
    return (
        <section 
            className={`${baseClasses} ${extraStyles}`.trim()}
        >
            {children}
        </section>
    );
}

export default SectionContainer;