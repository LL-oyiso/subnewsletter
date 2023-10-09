import React from 'react'


const Hero = () => {
  return ( 
    
    <div id ="hero" className =' w-full  h-[100vh]  ' >

      {/* <img src ="" alt =" " className='w-full h-full object-cover'/> */}
      <div className='max-w-[1140px] m-auto  '>
        <div className='absolute top-[20%] w-full md:-[50%] max-w-[900px] h-full flex flex-col text-white p-4'>
        <h2 className='font -bold text-4xl py-10 italic  text-black rotate-10'>Hello</h2>

          <h1 className=' text-8xl font-bold text-[#83807b] font-[KronaOne]  '>Welcome to a world where we build cool shit</h1>
          
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

