import React from 'react'
import Navigation from './Navigation'

const Hero = () => {
  return ( 
    
    <div className =' w-full  h-[90vh]  rounded-1xl' >

      {/* <img src ="" alt =" " className='w-full h-full object-cover'/> */}
      <div className='max-w-[1140px] m-auto  '>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
          <h1 className=' text-4xl font-bold text-black font-[KronaOne]'>Welcome to a world where we build cool shit</h1>
          <h2 className='text-4xl py-4 italic  text-black'>With weekaway</h2>
          {/* <p className =" text-black"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequuntur quod laudantium aut ab reiciendis autem nemo at eum eos. Modi qui voluptas magnam beata
            e non eaque, magni explicabo sit ad?
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default Hero

