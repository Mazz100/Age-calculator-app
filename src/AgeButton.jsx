import arrow from './assets/assets/images/icon-arrow.svg'

function AgeButton({validate}) {
    return (
        <div className="w-full md:w-[24rem] border-b relative my-8">
            <button
                className=" bg-primary-purple rounded-full p-2 w-10 absolute top-0 left-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 md:w-12 md:left-full md:-translate-x-3/4 transition-colors ease-out duration-500 hover:bg-secondary-black"
                type='submit'
                onClick={validate}>
                <img src={arrow} alt="" />
            </button>
        </div>
    );
}

export default AgeButton