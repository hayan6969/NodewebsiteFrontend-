import React from 'react'

export default function Footer() {

  const data = [
    "Ui designs","check facailty","Ux designs","Blog","Data"
  ]
  return (
    <div className='p-10 md:p-20 primary_bg_color text-white'>
      <div className='w-full h-[1vh] bg-red-900 rounded-t-3xl md:rounded-t-none'></div>
<div className='md:flex-row flex-col gap-10 md:gap-0  flex bg-black pt-5 px-5 pb-32'>
  <div className='w-[25%]'>icons</div>
  <div className='w-[25%] flex flex-col gap-10'>
    <div>
    <h1>
      TITle
    </h1>
    </div>
    <div className='flex flex-col gap-2 text-gray-400'>
    {data.map((element)=>(
      <p>{element}</p>
    ))}
    </div>
  </div>
  <div className='w-[25%] flex flex-col gap-10'>
  <div>
    <h1>
      TITle
    </h1>
    </div>
    <div className='flex flex-col gap-2 text-gray-400'>
    {data.map((element)=>(
      <p>{element}</p>
    ))}
    </div>
  </div>
  <div className='w-[25%] flex flex-col gap-10'><div>
    <h1>
      TITle
    </h1>
    </div>
    <div className='flex flex-col gap-2 text-gray-400'>
    {data.map((element)=>(
      <p>{element}</p>
    ))}
    </div></div> 
</div>
    </div>
  )
}