import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-base text-gray-700'>

     <div>
        <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>Product exchange</p>
        <p className='text-gray-400'>We offer hasle free exchange policy.</p>
     </div>

     <div>
        <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>Money back guarantee</p>
        <p className='text-gray-400'>If you are not satisfy with our product you can return it get your money back within 7 days.</p>
     </div>

     <div>
        <img src={assets.support_img} alt="" className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>Good customer service</p>
        <p className='text-gray-400'>we lean in to our customer every time 24/7.</p>
     </div>

    </div>
  )
}

export default OurPolicy
