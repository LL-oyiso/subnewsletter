import React from 'react'
import Navigation from './Navigation'

const Hero = () => {
  return ( 
    
    <div className ='  h-[90vh] border-2 border-slate-600 rounded-1xl' >

      {/* <img src ="" alt =" " className='w-full h-full object-cover'/> */}
      <div className='max-w-[1140px] m-auto  '>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
          <h1 className='font-bold text-4xl text-black font-[Montserrat]'>Find your special trip</h1>
          <h2 className='text-4xl py-4 italic  text-black'>With weekaway</h2>
          <p className =" text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur quod laudantium aut ab reiciendis autem nemo at eum eos. Modi qui voluptas magnam beata
            e non eaque, magni explicabo sit ad?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero

