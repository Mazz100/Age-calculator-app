import React, { useState, useContext } from "react";
import { dayContext, yearContext } from "./App";
import { monthContext } from "./App";

function AgeResults() {
    const [years, setYears] = useContext(yearContext);
    const [months, setMonths] = useContext(monthContext);
    const [days, setDays] = useContext(dayContext);

    return (
        <div className="flex flex-col w-full justify-center pb-6">
            <span className="text-primary-purple text-6xl md:text-7xl font-bold italic">
                {years}
                <span className="text-secondary-black text-center ml-2">
                    years
                </span></span>
            <span className="text-primary-purple text-6xl md:text-7xl font-bold italic">
                {months}
                <span className="text-secondary-black ml-2">
                    months
                </span></span>
            <span className="text-primary-purple text-6xl md:text-7xl font-bold italic">
                {days}
                <span className="text-secondary-black ml-2">
                    days
                </span></span>
        </div>
    );
}

export default AgeResults