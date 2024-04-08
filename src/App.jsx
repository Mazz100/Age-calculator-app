import './App.css'
import AgeInput from './AgeInput'
import AgeResults from './AgeResults'
import React, { useState, createContext } from 'react'
export const yearContext = createContext();
export const monthContext = createContext();
export const dayContext = createContext();

function App() {
  const [years, setYears] = useState('--');
  const [months, setMonths] = useState('--');
  const [days, setDays] = useState('--');

  return (
    <>
        <main className='flex flex-col justify-center flex-1 w-full max-w-[23rem] md:max-w-[34rem]'>
          <div className='bg-white p-5 md:p-8 rounded-xl rounded-br-5xl shadow-lg'>
            <yearContext.Provider value={[years, setYears]}>
              <monthContext.Provider value={[months, setMonths]}>
                <dayContext.Provider value={[days, setDays]}>
                  <AgeInput />
                  <AgeResults />
                </dayContext.Provider>
              </monthContext.Provider>
            </yearContext.Provider>
          </div>
        </main >

        <footer className='text-sm text-balance w-full text-center bg-gray-100'>
          <p className='p-2 rounded-t-md'>
            Challenge by <a className='text-blue-700 font-bold hover:underline hover:animate-pulse' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a className='text-blue-700 font-bold hover:underline hover:animate-pulse' href="#">Mazen Hassan</a>.
          </p>
        </footer>

    </>
  )
}

export default App
