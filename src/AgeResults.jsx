import React, { useState, useContext } from "react";
import { dayContext, yearContext } from "./App";
import { monthContext } from "./App";
import { animated, useSpring } from '@react-spring/web'


function AgeAnimate({ value }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: value,
        config: { mass: 1, tension: 25, friction: 10 },
    });

    return (
        <animated.span>
            {number.to((value) => {
                //if the value is not a number don't run animation and return the value only
                if (isNaN(value)) {
                    return value;
                }
                else {
                    return value.toFixed(0);
                }
            })}
        </animated.span>
    );
}

function AgeResults() {
    const [years, setYears] = useContext(yearContext);
    const [months, setMonths] = useContext(monthContext);
    const [days, setDays] = useContext(dayContext);

    return (
        <div className="flex flex-col w-full justify-center pb-6">
            <span className="text-primary-purple text-6xl md:text-7xl font-bold italic">
                <AgeAnimate value={years} />
                <span className="text-secondary-black text-center ml-2">
                    years
                </span>
            </span>
            <span className="text-primary-purple text-6xl md:text-7xl font-bold italic">
                <AgeAnimate value={months} />
                <span className="text-secondary-black ml-2">
                    months
                </span>
            </span>
            <span className="text-primary-purple text-6xl md:text-7xl font-bold italic">
                <AgeAnimate value={days} />
                <span className="text-secondary-black ml-2">
                    days
                </span>
            </span>
        </div>
    );
}

export default AgeResults