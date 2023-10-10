import React from 'react'

export const Booter = () => {
  return (
    <div id ="subscribe">


    <div className='w-full bg-black h-[450px] text-white justify-between font-[Monterrat] flex'>
      <div>
     <a href ="#hero"> <h1 className='text-bold  font-[KronaOne] px-10 py-10 text-2xl'>RUN START </h1></a>
     <ul className='ml-10'>
     <a href ="#creators"><li>The Creators</li></a> 
     <a href ="#specs"> <li>Specs</li></a>
     <a href ="#subscribe"><li>Subscribe</li></a>
     </ul>
      </div>
      
      <div className='px-10 border-3 border-slate-200 text'>
      <h1 className="text-2xl font-[Montserrat]   text-center mt-10">SUBSCRIBE/SUBSCRIBE/SUBSCRIBE/SUBSCRIBE</h1>
      <h2 className='text-center mt-10'>Sign up for our newsletter</h2>
     <input className='mt-5 border-4 border-white  w-[300px] h-[50px]'></input>
      <button className ="bg-white text-black px-6  mt-10 text-xl"> SUBSCRIBE</button>
      </div> 
    
    </div>
    </div>
    
  )
}


