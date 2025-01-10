import React from 'react'

function page() {
  return (
    <div className='p-10 md:p-20 primary_bg_color min-h-[100vh] text-white flex items-center justify-center'>
    <div className='border border-orange-500 p-10 w-[80vw]  h-[60vh] md:h-[70vh] 2xl:w-[60vw] rounded-3xl relative flex md:flex-row flex-col'>
    <div className='flex items-center flex-col md:h-full  justify-center h-[30%] text-white md:w-[50%]'>
        <h1 className='heading'>Welcome</h1>
        <p className='para font-bold mt-2'>Register to continur to <span className='text-orange-500 '>ASS I AM</span></p>
    </div>
    <div className='flex flex-col gap-5 md:w-[50%] md:h-full  items-center justify-center'>
       <div  className='flex flex-col w-full'>
       <p className='para capitalize'>email</p>
       <input className='border border-white primary_bg_color rounded-lg p-2'/>
       </div>
       <div  className='flex flex-col w-full'>
       <p className='para capitalize'>Password</p>
       <input className='border border-white primary_bg_color rounded-lg p-2'/>
       </div>
      <div className='flex gap-2 para w-full'>
        <input type="checkbox" className='border border-white primary_bg_color rounded-lg p-2'/>
        <p>Remember me</p>
      </div>
      <button className='border border-blue-600 p-2 para rounded-lg mt-5 w-full'>
        continue
      </button>
      <div className='absolute flex-col para bottom-5 flex items-center w-full left-0 justify-center md:relative md:mt-5'>
        <p className='md:text-sm'>Already have an account</p>
        <p className='text-blue-500 md:text-sm'>Learn more</p>
    
      </div>
    </div>
    </div>
        </div>
  )
}

export default page