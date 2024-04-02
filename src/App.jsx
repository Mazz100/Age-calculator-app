import './App.css'
import AgeInput from './AgeInput'
import AgeButton from './AgeButton'
import AgeResults from './AgeResults'


function App() {

  return (
    <>
      <div className=' min-h-screen flex flex-col items-center justify-center '>
        <main className='min-w-80 bg-white p-4 rounded-xl rounded-br-3xl'>
          <AgeInput />
          <AgeButton />
          <AgeResults />
        </main>

        <footer>

        </footer>
      </div>

    </>
  )
}

export default App
