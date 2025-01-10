import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function page() {
  return (
    <>
<Header/>
    <div className='primary_bg_color min-h-screen text-white'>
        {/* heropage */}
        <div className='flex items-center justify-center h-screen pt-10 border-b border-white flex-col text-[10vw] leading-none text-orange-500 font-bold'>
<h1 className='font-semibold'>ABOUT</h1>
<h1 className='font-semibold'>OUR</h1>
<h1 className='font-semibold'>TEAM</h1>

        </div>
        {/* second Page */}
        <div className='p-10 md:p-20 flex flex-col gap-10 md:gap-20 para border-b border-white'>
            <h1 className='heading '>
            The Team – The Energy Behind ASS I AM
            </h1>
            <p >
            We’re not just a team – we’re a crew on a mission. At ASS I AM, we don’t just work; we live and breathe this vision. A small but mighty group of dreamers, tech geeks, and creators, we’re fueled by energy, passion, and a bit of rebellious spirit  
            </p>
            <p>
            What makes us tick? A killer mix of creativity, technical know-how, and an unstoppable drive to innovate. Whether it’s brainstorming wild ideas or writing lines of code that push boundaries, every step we take gets us closer to one goal:  
            </p>
            <div className='flex items-center justify-center '>
                <h1 className='heading flex items-center justify-center'>
                “Creating an immersive ecosystem that’s set to <br></br>  redefine the future of adult entertainment”
                </h1>
            </div>

        </div>
       {/* third section */}
       {/* i am leaving third section fornnow  */}

       {/* fourth section */}
       <div className='p-10 md:p-20'>
<h1 className='heading'>
We’re Growing – Be Part of It
</h1>
<p className='mt-10 para'>
What started as a small group is becoming a network of visionaries, technicians, creatives, and doers – a team that knows what it wants: 
</p>
<h1 className='heading mt-10 md:mt-20'>
The Journey Has Just Begun
</h1>
<p className='mt-10 para'>
We’re looking for people who think like us: bold, full of energy, and ready to make a big impact. Our first job postings will be live soon. If you’re ready to be part of something revolutionary, stay tuned  because at ASS I AM, there are no limits
</p>
<div className='flex items-center justify-center mt-20 md:mt-32'>
                <h1 className='heading flex items-center justify-center'>
                “Creating an immersive ecosystem that’s set to <br></br>  redefine the future of adult entertainment”
                </h1>
            </div>
            <div className='flex flex-col items-center justify-center  text-orange-500'>
            <h1 className='mt-20 md:mt-32 heading'>
            Join Us – Explore Current Opportunities
            </h1>
            <button className="mt-10 border-blue-500 border px-7 text-white py-1 rounded-lg">
                View jobs
            </button>
            </div>
           
       </div>
    </div>
    
    <Footer/>
    </>
  )
}

export default page