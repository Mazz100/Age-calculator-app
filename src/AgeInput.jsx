

function AgeInput() {
    return (

        <form>
            <div className="flex items-center justify-center gap-6">
                <div className=" flex flex-col items-start justify-center">
                    <label className=" text-xs mb-1 uppercase font-bold opacity-40"
                        htmlFor="day">
                        Day
                    </label>
                    <input className="w-14 md:w-16 p-1 border border-text-date-text rounded placeholder:font-bold"
                        type="text"
                        value="" id="day"
                        placeholder="DD" />
                </div>

                <div className="flex flex-col items-start justify-center">
                    <label className=" text-xs mb-1 uppercase font-bold opacity-40"
                        htmlFor="month">
                        Month
                    </label>

                    <input className="w-14 md:w-16 p-1 border border-text-date-text rounded placeholder:font-bold"
                        type="text"
                        value="" id="month"
                        placeholder="MM" />
                </div>

                <div className="flex flex-col items-start justify-center">
                    <label className=" text-xs mb-1 uppercase font-bold opacity-40"
                        htmlFor="year">
                        Year
                    </label>

                    <input className="w-14 md:w-16 p-1 border border-text-date-text rounded placeholder:font-bold"
                        type="text"
                        value="" id="year"
                        placeholder="YYYY" />
                </div>
            </div>
        </form>

    );

}

export default AgeInput