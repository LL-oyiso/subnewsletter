import React from 'react'


const Hero = () => {
  return ( 
    
    <div id ="hero" className =' w-full  h-[100vh]  ' >

      {/* <img src ="" alt =" " className='w-full h-full object-cover'/> */}
      <div className='max-w-[1140px] m-auto  '>
        <div className='absolute top-[45%] w-full md:[30%] max-w-[1100px] text-center h-full flex flex-col text-white p-4'>

          <h1 className=' text-9xl font-bold text-[#131212] font-[KronaOne]  '>RUN START</h1>
          <h2 className='font -bold text-4xl py-10 italic  text-black rotate-10'>Hello</h2>
          
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

