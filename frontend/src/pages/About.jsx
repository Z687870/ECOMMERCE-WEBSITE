import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
         <Title text1={'ABOUT'} text2={'US'}/>
      </div>

     <div className='my-10 flex flex-col md:flex-row gap-16'>
         <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p> Amalanda Collection is founded in Durban by lady called Khanyisa Ncethevu to be accessible to her customer , she  started selling on whatsapp and she want to explore,  being known by large number of pleople.</p>
            <p>We've worked tirelessly to curate a diverse selection of high-qulity  products that and clothing to  home essentials, we offer an extensive collection source from genuine brands suppliers.</p>
             <b className='text-gray-800'>Our Mission</b>
             <p>Our mission at Amalanda Collection is to empower customer with choice , convience and building trust with seamless sopping experience that exceeds expectattion, from browsing and ordering to delivery and support then with any thing they need. </p>
         </div>
     </div>

     <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
     </div>

     <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Products:</b>
          <p className='text-gray-600'>We delivery high quality product  eto ensure it meets it meets our quality standards.</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'> With our user-friendly interface and hassle free ordering process, shopping has never been easier</p>
          </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Excellent Customer Service: </b>
          <p className='text-gray-600'>Our team of  dedicated professionals is here to help you  the way, ensuring your satisfaction is our top priority. </p>
         </div>
     </div>

     <NewsLetterBox/>

    </div>
  )
}

export default About
