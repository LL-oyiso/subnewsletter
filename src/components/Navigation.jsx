import React , {useState} from 'react'

import {FaBars}  from 'react-icons/fa'

// import {AcmeLogo} from "./AcmeLogo.jsx";

function Navigation()  {
 
 
   

    const [nav, setNav] = useState(false)
    const handleNav = () =>
    {
        setNav(!nav)
    }
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute  text-black  bg-gray-400 '>
         <h1 className='p-4 font-bold text-2xl'>Port</h1>
      <ul className='hidden sm:flex px-4'>
       
        <li className='text-xl '>
          <a href ="/">Home</a>
        </li>
        <li className='text-xl '>
        <a href ="#about">About us</a>
        </li>
        <li className='text-xl '>
        <a href ="/">Updates</a>
        </li>
      </ul>
      {/* Hamburger icon anything above small it will be hidden */}
      <div onClick ={handleNav} className='sm:hidden z-10'>
        <FaBars size ={20} className ='mr-4 cursor-pointer'/>
      </div>

      {/* Mobile menu */}
      <div onClick ={handleNav} className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col': 'absolute top-0 h-screen left-[-100%] ease-in duration-300'}>
        <ul className='h-full w-full text-center pt-12'>
        <li className='text-2xl py-8'>
          <a href ="/">Home</a>
        </li>
        <li className='text-2xl py-8'>
        <a href ="#about">About us</a>
        </li>
        <li className='text-2xl py-8'>
        <a href ="#update">Updates</a>
        </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
