import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#ba2747]'>
          <div className='flex items-center gap-3'>
           <p className='w-8 md:w-11 h-[2px] bg-[#ba2747]'></p>
           <p className='font-medium text-1xl  md:text-base'> WELCOME TO </p>
          </div>  
           <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'> Amalanda Collection </h1>
           <div className='flex items-center gap-2'>
            <p className='font-medium text-1xl md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[2px] bg-[#ba2747]'></p>

           </div>
        </div>
     </div>
     {/* Hero Right */}
     <img className='w-full sm:w-1/2'  src={assets.hero_img} alt=""/>
    </div>
  )
}

export default Hero