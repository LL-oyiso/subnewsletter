import React from 'react'
import X from '../X.png'
import Threads from '../Threads.png'
import Insta from '../insta.png'
import Facebook from '../facebook.png'
const Maincontent = () => {
  //
  return (
    <div id ="creators" className=' ' >
         <div  className ='  w-full h-[1120px]  rounded-1xl  bg-black' >
        <div className='  w-full    m-auto max-w-[1120px] text-white '>
         <h1 className=' px-14 py-14 font-bold text-6xl font-[KronaOne]'>We source the dopest creators on the contintent</h1>
         <p className='px-14 py-2 text-xl max-w-[800px] font-[Montserrat]'>Providing you with a comprehensive lists of tech creators to watch out for and best practices swarn by industry software devs</p>
         <div className='flex mt-5 justify-around' >
         <div className='card mt-5  w-[300px] bg-white text-black rounded-2xl border-2 h-[460px] border-slate-700' >
          <img src ="https://images.unsplash.com/photo-1504890001746-a9a68eda46e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1387&q=80" className='rounded-2xl' alt=""/>
          <h2 className='  font-[Montserrat] px-4 py-2  text-left font-bold'>Run Start</h2>
          <p className=' font-[Montserrat] p-5'>Welcome to Run Start, your passport to the coolest and most cutting-edge developments in the world of technology. We are your trusty guides on this thrilling journey through the digital universe
      </p>
         </div>
         <div className=' mt-14  card w-[300px] bg-white text-black rounded-2xl border-2 h-[460px] border-slate-700'>
          <img src ="https://images.unsplash.com/photo-1630797160666-38e8c5ba44c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className='rounded-2xl' alt=""/>
          <h2 className='font-[Montserrat] px-4 py-2  text-left font-bold'>Trendsetters</h2>
          <p className='  font-[Montserrat] p-5'>
          We're not just followers of trends; we set them. Our team of tech enthusiasts and experts scours the digital landscape for the latest and greatest, ensuring you're always in the know.
          </p>
         </div>

         <div className=' my-28  card w-[300px] bg-white text-black rounded-2xl border-2 h-[460px] border-slate-700'>
          <img src ="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className='rounded-2xl' alt=" "/>
          <h2 className=' font-[Montserrat] px-4 py-2  text-left font-bold'>Join us</h2>
          <p className='p-5 font-[Montserrat]'>
          Run Start is your go-to source for all things tech. Join us on this exhilarating journey as we explore the boundless possibilities of the digital age.
          </p>
          <button className='  text-white   mx-2 px-4 mt-24  '>GET STARTED</button>
         </div>
         </div>
         

        </div>
    </div>

  


    <div id ="specs" className =' w-full   h-[1000px]   rounded-1xl  bg-gray-400' >
        <div className='  w-full    m-auto max-w-[1140px] text-black'>
         <h1 className=' py-14 mx-12 text-6xl font-bold font-[KronaOne]'>Complete creative control</h1>
         <div className='flex'>
         <div className='flex-col justify-around' >
         <div className='card   mx-8  p-5 w-[420px] text-black    rounded-2xl h-[300px]' >
          <h1 className=' font-[Montserrat] font-bold text-2xl  '>Streamlined Subscription & Personalized Content</h1>
          <p className='  font-[Montserrat] text-xl mt-2'>Seamless Subscription Process: Our website offers a hassle-free and intuitive subscription process, making it effortless for visitors to join our newsletter community.</p>

          
         </div>


         <div className=' p-5  mt-10  mx-8 card w-[420px]  text-black rounded-2xl  h-[300px]'>
         <h1 className='font-[Montserrat] font-bold text-2xl'>Weekly Roundup: Stay Informed Effortlessly</h1>
          <p className='font-[Montserrat] text-xl mt-5'>
           Enjoy the convenience of a weekly digest option that delivers handpicked highlights, summarizing the most compelling articles and newsletters directly to subscribers' inboxes.</p>

         
          
         </div>
         </div>
         <div className=' flex mt-28 w-[610px] h-[400px] border-4 rounded-2xl border-slate-200'>
        
       

         </div>
         </div>
       

         

        </div>
    </div>

    </div>
      
  )
}

export default Maincontent
