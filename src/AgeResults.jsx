import React, { useState } from "react";

function AgeResults() {
    return (
        <div className="flex flex-col justify-center pb-6">
            <span className="text-primary-purple text-6xl font-bold italic">
                --
                <span className="text-secondary-black text-center ml-2">
                    years
                </span></span>
            <span className="text-primary-purple text-6xl font-bold italic">
                --
                <span className="text-secondary-black ml-2">
                    months
                </span></span>
            <span className="text-primary-purple text-6xl font-bold italic">
                --
                <span className="text-secondary-black ml-2">
                    days
                </span></span>
        </div>
    );
}

export default AgeResults