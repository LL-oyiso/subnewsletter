import React from 'react'

export const Booter = () => {
  return (
    <div id ="subscribe">


    <div className='w-full bg-black h-[520px] text-white justify-between font-[Monterrat] '>
      <div>
     <a href ="#hero"> <h1 className='text-bold  font-[KronaOne] px-10 py-10 text-2xl'>RUN START </h1></a>
     <ul className='ml-10'>
     <a href ="#creators"><li>The Creators</li></a> 
     <a href ="#specs"> <li>Specs</li></a>
     <a href ="#subscribe"><li>Subscribe</li></a>
     </ul>
      </div>
      
      <div className='px-10 w-[700px] text-center m-auto  border-4 border-slate-300'>
      <h1 className="text-2xl font-[Montserrat]   text-center mt-10">SUBSCRIBE/SUBSCRIBE/SUBSCRIBE/SUBSCRIBE</h1>
      <h2 className='text-center mt-10'>Sign up for our newsletter</h2>
      <div className=''>
      <input className='mt-5 py-5 border-4 border-black text-center  w-[300px] h-[60px]'></input>
      <button className ="bg-white text-black px-6  ml-10 mt-10 text-xl"> SUBSCRIBE</button>
      </div>
     
      </div> 
    
    </div>
    </div>
    
  )
}


