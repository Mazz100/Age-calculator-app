import AgeButton from "./AgeButton";
import React, { useState, useContext } from "react";
import dayjs, { Dayjs } from "dayjs";
import customParseFormate from 'dayjs/plugin/customParseFormat'
import { yearContext } from "./App";
import { monthContext } from "./App";
import { dayContext } from "./App";

function AgeInput() {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [invalidDate, setInvalidDate] = useState(false);
    const [emptyFieldError, setEmptyFieldError] = useState(false);
    const [invalidRangeError, setInvalidRangeError] = useState(false);
    const [currentYear, setCurrentYear] = useState(dayjs().year());

    // contexts states
    const [years, setYears] = useContext(yearContext);
    const [months, setMonths] = useContext(monthContext);
    const [days, setDays] = useContext(dayContext);

    const errorStyle = invalidDate || invalidRangeError || emptyFieldError ? { borderColor: '#FF5757', color: '#FF5757' } : null;


    {/**Handle each input field with state */ }
    function handleDayChange(event) {
        setDay(event.target.value);


    }

    function handleMonthChange(event) {
        setMonth(event.target.value);

    }

    function handleYearChange(event) {
        setYear(event.target.value);

    }

    function handleValidation(e) {
        e.preventDefault();


        //Check for empty fields
        if (!day || !month || !year) {
            setEmptyFieldError(true);
            setInvalidRangeError(false);
            setInvalidDate(false);
            return; //Stop validation from running
        }

        //Check for date ranges
        if (day > 31 || day < 1 || month < 1 || month > 12 || year < 1900 || year > currentYear) {
            setInvalidRangeError(true);
            setEmptyFieldError(false);
            setInvalidDate(false);
            return;
        }

        //plugin to customize parsing for input strings
        dayjs.extend(customParseFormate);

        //Passing input states for date string
        const dateStr = `${day}-${month}-${year}`;
        const isValidDate = dayjs(dateStr, 'DD-MM-YYYY', true).isValid() // false

        if (isValidDate) {

            setInvalidDate(false);
            setEmptyFieldError(false);
            setInvalidRangeError(false);

            //Call calculated age function
            calculateAge();
        }
        else {
            setInvalidDate(true);
            setEmptyFieldError(false);
            setInvalidRangeError(false);
        }

    }

    function calculateAge() {
        const currentDate = dayjs();
        const birthDate = dayjs(`${day}-${month}-${year}`, 'DD-MM-YYYY');

        const years = currentDate.diff(birthDate, 'year');

        const monthDiff = currentDate.month() < month ? currentDate.month() - month + 12 : currentDate.month() - month;

        const dayDiff = currentDate.date() < day ? currentDate.date() - day + 31 : currentDate.date() - day;

        //Context states to render the results
        setYears(years);
        setMonths(monthDiff);
        setDays(dayDiff);

    }

    return (

        <form>
            <div className="flex items-center justify-center gap-6 md:gap-4 md:justify-start">
                <div className=" flex flex-col items-start justify-center">
                    <label className=" text-xxs mb-1 uppercase font-extrabold opacity-65"
                        style={errorStyle}
                        htmlFor="day">
                        Day
                    </label>
                    <input className="w-16 md:w-20 p-2 md:p-1 md:px-2 border border-text-date-text rounded-md font-bold"
                        style={errorStyle}
                        type="text"
                        value={day} onChange={handleDayChange}
                        id="day"
                        placeholder="DD" />

                    {emptyFieldError && <small className="text-error text-mini mt-1 italic">This field is required</small>}
                    {invalidRangeError && <small className="text-error text-mini mt-1 italic">Must be a valid day</small>}
                    {invalidDate && <small className="text-error text-mini mt-1 italic">Must be a valid date</small>}
                </div>

                <div className="flex flex-col items-start justify-center">
                    <label className=" text-xxs mb-1 uppercase font-extrabold opacity-65"
                        htmlFor="month"
                        style={errorStyle}>
                        Month
                    </label>

                    <input className="w-16 md:w-20 p-2 md:p-1 md:px-2 border border-text-date-text rounded-md font-bold"
                        style={errorStyle}
                        type="text"
                        value={month} onChange={handleMonthChange}
                        id="month"
                        placeholder="MM" />

                    {emptyFieldError && <small className="text-error text-mini mt-1 italic">This field is required</small>}
                    {invalidRangeError && <small className="text-error text-mini mt-1 italic">Must be a valid month</small>}
                </div>

                <div className="flex flex-col items-start justify-center">
                    <label className=" text-xxs mb-1 uppercase font-extrabold opacity-65"
                        htmlFor="year"
                        style={errorStyle}>
                        Year
                    </label>

                    <input className="w-16 md:w-20 p-2 md:p-1 md:px-2 border border-text-date-text rounded-md font-bold"
                        style={errorStyle}
                        type="text"
                        value={year} onChange={handleYearChange}
                        id="year"
                        placeholder="YYYY" />

                    {emptyFieldError && <small className="text-error text-mini mt-1 italic">This field is required</small>}
                    {invalidRangeError && <small className="text-error text-mini mt-1 italic">Must be in the past</small>}
                </div>
            </div>

            <AgeButton validate={handleValidation} />
        </form>

    );

}

export default AgeInput