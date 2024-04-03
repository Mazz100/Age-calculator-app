import './App.css'
import AgeInput from './AgeInput'
import AgeButton from './AgeButton'
import AgeResults from './AgeResults'


function App() {

  return (
    <>
      <div className='min-h-screen flex flex-col items-center justify-center '>
        <main className='flex flex-col items-center justify-center flex-1'>
          <div className='bg-white p-5 md:pr-12 rounded-xl rounded-br-5xl '>
            <AgeInput />
            <AgeButton />
            <AgeResults />
          </div>
        </main>

        <footer className='text-sm w-full text-center bg-gray-200'>
          <p className='p-2 rounded-t-md'>
            Challenge by <a className='text-blue-500 font-bold hover:underline' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a className='text-blue-500 font-bold hover:underline' href="#">Mazen Hassan</a>.
          </p>
        </footer>
      </div>

    </>
  )
}

export default App
