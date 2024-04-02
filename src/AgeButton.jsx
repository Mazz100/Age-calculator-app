import arrow from './assets/assets/images/icon-arrow.svg'

function AgeButton() {
    return (
        <div className="w-full border-b relative my-10">
            <button
                className=" bg-primary-purple rounded-full p-3 w-10 absolute top-0 left-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 md:w-12 transition ease-out duration-200 hover:bg-secondary-black">
                <img src={arrow} alt="" />
            </button>
        </div>
    );
}

export default AgeButton