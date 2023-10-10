import React from 'react'
import Bg from '../Bg.png'

const Hero = () => {
  return ( 
    
    <div id ="hero" className =' w-full  h-[110vh]  ' >
      <div>
      <img src={Bg} alt =" "/>
      <div className='bg-black w-[300px] h-[200px]'>
       
      </div>
      </div>
    
      {/* <img src ="" alt =" " className='w-full h-full object-cover'/> */}
      <div className=' w-full max-w-[1140px] m-auto  '>
     
        <div className='absolute top-[40%] w-full md:[30%] max-w-[1100px] text-center h-full flex flex-col text-white p-4'>
        <h1 className=' text-9xl font-bold text-[#131212] font-[KronaOne]  '>RUN START</h1>
          <h2 className='font -bold text-4xl py-10 italic  text-black rotate-10'>Hello</h2>
        </div>
        {/* <div className='top-[40%]'>

<h1 className='  text-9xl font-bold text-[#f5dd59] font-[KronaOne] '>RUN START</h1>
</div> */}
      </div>
    </div>
  )
}

export default Hero

