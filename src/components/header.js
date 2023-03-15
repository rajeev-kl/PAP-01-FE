import React from 'react';
import logo from '../assets/logo.svg'

export default function Header() {
  return (

    <header >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="sm:w-full md:w-1/2">
            <img src={logo} alt="logo" className='mb-4 lg:mb-0 cursor-pointer' />
          </div>
          <div className='sm:w-full md:w-1/2 font-bold uppercase tagline'>
            <span className='block text-lg lg:text-xl'>Organizing the World's Waste</span>
            <span className='block text-2xl'>Plastic physically and digitally.</span>
          </div>
        </div>
      </div>
    </header>
  )
}
