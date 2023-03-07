import React from 'react';
import logo from '../assets/logo.svg'

export default function Header() {
  return (

    <header >
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="w-1/2">
            <img src={logo} alt="logo" />
          </div>
          <div className='w-1/2 font-bold uppercase tagline'>
            <span className='block text-xl'>Organizing the World's Waste</span>
            <span className='block text-2xl'>Plastic physically and digitally.</span>
          </div>
        </div>
      </div>
    </header>
  )
}
