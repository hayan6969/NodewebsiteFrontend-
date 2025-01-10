import React from 'react'
import GradientBox from './ui/GradientBox'

function StayConnected() {
  return (
    <div className='primary_bg_color  text-white'>
        <div className='relative'>
      <div className='flex items-center justify-center flex-col '>
        <div className='flex  justify-start w-[58%]'>
        <h1 className='text-[8vw] font-extrabold unbordered leading-none '>
    STAY
</h1>
        </div>

<h1 className='text-[8vw] font-extrabold unbordered leading-none'>
    CONNECTED
</h1>
</div>
<div className='absolute flex top-0 left-0 h-full w-full justify-center items-center'>
<h1 className='text-[4vw] font-extrabold text-white'>
    Stay Connnected
</h1>
</div>
</div>
<div className='p-10 md:p-20'>
<h1 className='heading mt-10'>
Don’t Miss a Moment
</h1>
<p className='para mt-5 md:mt-10'>
Be the first to know what’s next for ASS I AM. Sign up for our newsletter and get exclusive insights, updates, and opportunities delivered straight to your inbox.
</p>

<p className='mt-10 md:mt-20 para'>
We’re just getting started, and you’re a key part of this journey
</p>
<div className='flex items-center justify-center font-bold'>
<p className='mt-20 md:mt-24 para'>
Subscribe now and be at the forefront of innovation.
</p>
</div>
<GradientBox/>
</div>


    </div>
  )
}

export default StayConnected