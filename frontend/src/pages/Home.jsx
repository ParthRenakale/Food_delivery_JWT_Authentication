import React from 'react'
import Carousel from '../components/Carousel'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate();
  function reg(){
    navigate("/signup")
  }
  return (

    <div className='bg-orange-700 min-h-screen'>
      <Carousel/>
      <div className="flex flex-col items-center justify-center">
      <p className="text-3xl font-serif text-gray-100 mb-4">
        Welcome to Food Ordering Website!
      </p>
      <button className="bg-teal-500 hover:bg-teal-600 text-white text-2xl font-bold py-4 px-8 rounded-lg shadow-md transition duration-300" onClick={reg}>
        Get Started 🚀
      </button>
    </div>
    </div>
  )
}

export default Home
