import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr]  gap-14 my-10 mt-40 text-sm'>
      
      <div>
      <Link to='/' ><p className='text-xl font-medium mb-5 text-'>AMANDA COLLECTION</p></Link>
         <p className='w-full md:w-2/3 text-gray-600'>
         One and only store  that could meet your needs with no extra cash.
         </p>
      </div>

      <div>
        <p className='text-xl font-medium mb-5'>MENU</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <Link to='/' ><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/orders'><li>Delivery</li></Link>
            <Link to='/our-policy'><li>Privacy policy</li></Link>
        </ul>
      </div>

      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li> (+27)714855 2551</li>
            <li>Phumzilemzayifani@gmail.com</li>
        </ul>
      </div>
   </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center bg-gray'>CopyRight 2024&amalandacollection.co.za- All Right Reserved.</p>
     </div>

</div>
  )
}

export default Footer
