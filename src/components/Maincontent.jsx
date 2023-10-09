import React from 'react'
import X from '../X.png'
import Threads from '../Threads.png'
import Insta from '../insta.png'
import Facebook from '../facebook.png'
const Maincontent = () => {
  //
  return (
    <div id ="creators" className=' ' >
         <div  className ='  w-full h-[127vh]  rounded-1xl  bg-black' >
        <div className='  w-full    m-auto max-w-[1140px] text-white '>
         <h1 className=' p-14 text-6xl font-[KronaOne]'>We source the dopest creators on the contintent</h1>
         <div className='flex mt-5 justify-around' >
         <div className='card   w-[350px] bg-white text-black rounded-2xl border-2 h-[440px] border-slate-700' >
          <img src ="https://images.unsplash.com/photo-1630797160666-38e8c5ba44c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className='rounded-2xl'/>
          <p className='mt-5 p-5'>In the realm of digital connectivity, our community thrives on a newsletter subscription platform, forging connections that transcend geographical boundaries. 
         . they are active participants who contribute their unique insights and perspectives, 
      </p>
         </div>
         <div className=' mt-14  card w-[350px] bg-white text-black rounded-2xl border-2 h-[440px] border-slate-700'>
          <img src ="https://plus.unsplash.com/premium_photo-1684882665431-763315db45ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className='rounded-2xl'/>
          <p className='mt-5 p-5'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Vitae cumque, blanditiis maiores debitis facere illo distinctio sint ducimus esse expedita tempora, quibusdam voluptate, fugit sit sed iure 
            quaerat? Laborum, dignissimos.
          </p>
         </div>

         <div className=' my-28  card w-[350px] bg-white text-black rounded-2xl border-2 h-[440px] border-slate-700'>
          <img src ="https://images.unsplash.com/photo-1632910138458-5bf601f3835e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80" className='rounded-2xl' alt=" "/>
          <p className='mt-5 p-5'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Vitae cumque, blanditiis maiores debitis facere illo distinctio sint ducimus esse expedita tempora, quibusdam voluptate, fugit sit sed iure 
            quaerat? Laborum, dignissimos.
          </p>
         </div>
         </div>
         

        </div>
    </div>

    <div className='w-full  h-[35vh]'>
<h1 className='font-bold text-2xl text-center text-[KronaOne] mt-12'> Seamlessly share your work to your favourite platforms</h1>
<p className='mt-6 text-xl text-center text-[Montserrat]'> Intergrate your work at a click of a button with popular apps and access all tools in one space</p>
<div className='my-16 flex justify-around px-28'>
    <img src={X} alt ="logo" />
    <img src={Threads}   alt ="logo" />
    <img src={Facebook}  alt ="logo" />
    <img src={Insta}  alt ="logo" />
</div>

</div>


    <div id ="prices" className =' w-full   h-[110vh]   rounded-1xl  bg-gray-400' >
        <div className='  w-full    m-auto max-w-[1140px] text-black'>
         <h1 className=' p-14 text-6xl font-[KronaOne]'>Complete creative control</h1>
         <div className='flex-col justify-between' >
         <div className='card   mx-8  p-5 w-[330px] text-black rounded-2xl h-[350px]' >
          <h1 className='font-bold'>Our community cares</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquam neque, beatae a voluptate excepturi aut qui ut, tenetur 
             mollitia inventore quas assumenda blanditiis dicta? Necessitatibus 
            maiores fugiat molestias a.</p>
         </div>
         <div className=' p-5  mx-8 card w-[330px]  text-black rounded-2xl  h-[350px]'>
         <h1 className='font-bold'>Our community cares</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Vitae cumque, blanditiis maiores debitis facere illo distinctio sint ducimus esse expedita tempora, quibusdam voluptate, fugit sit sed iure 
            quaerat? Laborum, dignissimos.
          </p>
         </div>
         </div>
         

        </div>
    </div>

    </div>
      
  )
}

export default Maincontent
