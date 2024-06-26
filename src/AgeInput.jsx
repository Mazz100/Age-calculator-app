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
        if (day > 31 || day < 1 || month < 1 || month > 12 || year > currentYear) {
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

        let monthDiff;
        let dayDiff = currentDate.date() - birthDate.date();

        //Month calculation
        //Add month cycle if birth month is ahead of current month
        if (currentDate.month() < birthDate.month()) {
            monthDiff = (currentDate.month() - birthDate.month() + 12) - 1 //Subtracting the difference in birthdate month;

        } else {
            monthDiff = currentDate.month() - birthDate.month();

        }

        //Day calculation
        if (dayDiff < 0) {

            dayDiff += 31;
        }

        //Check if current date is less or equal to birth and day difference is zero or birth date is less then we add 1 month
        const addMonthDiff = birthDate.date() < currentDate.date() || currentDate.date() <= birthDate.date() && dayDiff == 0;

        if (addMonthDiff) {
            //Only adding 1 month if month difference is not 0 and current month is less than birth month
            if (monthDiff !== 0 && currentDate.month() < birthDate.month()) {
                monthDiff += 1;

            }

        }
        else {
            // subtracting month difference only if current month is less or equal to birth month
            if (currentDate.month() <= birthDate.month()) {
                monthDiff = (currentDate.month() - birthDate.month() + 12) - 1

            }
            else {
                monthDiff -= 1;
            }

        }


        //Context states to render the results
        setYears(years);
        setMonths(monthDiff);
        setDays(dayDiff);

    }

    return (

        <form>
            <div className="flex items-center justify-center gap-6 md:gap-4 md:justify-start">
                <div className=" flex flex-col items-start justify-center">
                    <h1 className="opacity-0 absolute">-</h1>
                    <label className=" text-xxs mb-1 uppercase font-extrabold opacity-65"
                        style={errorStyle}
                        htmlFor="day">
                        Day
                    </label>
                    <input className="w-16 md:w-24 md:h-10 p-2 md:p-1 md:px-2 border border-text-date-text rounded-md md:text-2xl font-bold hover:border-primary-purple transition-colors focus:outline-none focus:border focus:border-primary-purple"
                        style={errorStyle}
                        type="text"
                        value={day} onChange={handleDayChange}
                        id="day"
                        placeholder="DD" />

                    {emptyFieldError && <small className="text-error text-xxs mt-1 italic">This field is required</small>}
                    {invalidRangeError && <small className="text-error text-xxs mt-1 italic">Must be a valid day</small>}
                    {invalidDate && <small className="text-error text-xxs mt-1 italic">Must be a valid date</small>}
                </div>

                <div className="flex flex-col items-start justify-center">
                    <label className=" text-xxs mb-1 uppercase font-extrabold opacity-65"
                        htmlFor="month"
                        style={errorStyle}>
                        Month
                    </label>

                    <input
                        className="w-16 md:w-24 md:h-10 p-2 md:p-1 md:px-2 border border-text-date-text rounded-md md:text-2xl font-bold hover:border-primary-purple transition-colors focus:outline-none focus:border focus:border-primary-purple"
                        style={errorStyle}
                        type="text"
                        value={month} onChange={handleMonthChange}
                        id="month"
                        placeholder="MM" />

                    {emptyFieldError && <small className="text-error text-xxs mt-1 italic">This field is required</small>}
                    {invalidRangeError && <small className="text-error text-xxs mt-1 italic">Must be a valid month</small>}
                </div>

                <div className="flex flex-col items-start justify-center">
                    <label className=" text-xxs mb-1 uppercase font-extrabold opacity-65"
                        htmlFor="year"
                        style={errorStyle}>
                        Year
                    </label>

                    <input className="w-16 md:w-24 md:h-10 p-2 md:p-1 md:px-2 border border-text-date-text rounded-md md:text-2xl font-bold hover:border-primary-purple transition-colors focus:outline-none focus:border focus:border-primary-purple"
                        style={errorStyle}
                        type="text"
                        value={year} onChange={handleYearChange}
                        id="year"
                        placeholder="YYYY" />

                    {emptyFieldError && <small className="text-error text-xxs mt-1 italic">This field is required</small>}
                    {invalidRangeError && <small className="text-error text-xxs mt-1 italic">Must be in the past</small>}
                </div>
            </div>

            <AgeButton validate={handleValidation} />
        </form>

    );

}

export default AgeInput