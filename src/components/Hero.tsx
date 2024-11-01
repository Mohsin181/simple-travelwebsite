import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';


const Hero = () => {
  return (

    <div className='text-white flex justify-center  pt-72 font-bold'>

      <ul>
        <li className='font-extrabold'>Explore the world with a smile</li>
        <li >This world is very beautifull. This World is created by creater, <br /> who is best creator in the world</li>
      </ul>

      <div className='space gap-x-8 bg-white shawod-lg rounded-lg p-4 flex mt-40 '>


        <div className='flex justify-center py-2 px-2'>

          <span className='text-gray-500'>📍</span>
          <input type="text"
          placeholder='City of Destination'
          className='ml-2 outline-none'
          />
        </div>

<div className='flex justify-center py-2 px-2'>
  <span className='text-gray-500'>📅</span>
  <input type="text" 
  placeholder='Date of Stay'
  className='ml-2 outline-none'
  />
</div>

<div className='flex justify-center py-2 px-2'>

  <span className='text-gray-500'>👤</span>
  <input type="text"
  placeholder='Person' 
  className='ml-2 outline-none'
  
  />
</div>
<button className='bg-green-500 text-white px-8 py-2 rounded-lg'>Find a Trip </button>

      </div>


    </div>




  )

}

export default Hero;