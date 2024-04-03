

function AgeInput() {
    return (

        <form>
            <div className="flex items-center justify-evenly md:justify-center md:gap-4">
                <div className=" flex flex-col items-start justify-center">
                    <label className=" text-xs mb-1 uppercase font-extrabold opacity-40"
                        htmlFor="day">
                        Day
                    </label>
                    <input className="w-16 md:w-20 bg-orange- p-2 border border-text-date-text rounded-md font-bold"
                        type="text"
                        value="" id="day"
                        placeholder="DD" />
                </div>

                <div className="flex flex-col items-start justify-center">
                    <label className=" text-xs mb-1 uppercase font-extrabold opacity-40"
                        htmlFor="month">
                        Month
                    </label>

                    <input className="w-16 md:w-20 p-2 border border-text-date-text rounded-md font-bold"
                        type="text"
                        value="" id="month"
                        placeholder="MM" />
                </div>

                <div className="flex flex-col items-start justify-center">
                    <label className=" text-xs mb-1 uppercase font-extrabold opacity-40"
                        htmlFor="year">
                        Year
                    </label>

                    <input className="w-16 md:w-20 p-2 border border-text-date-text rounded-md font-bold"
                        type="text"
                        value="" id="year"
                        placeholder="YYYY" />
                </div>
            </div>
        </form>

    );

}

export default AgeInput