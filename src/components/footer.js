import React from 'react';
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'

export default function Footer() {
  return (
    <footer className='mt-6 lg:mt-0'>
      <div className="w-4/5 mx-auto flex flex-col lg:flex-row ">
        <div className="text-lg font-semibold text-center lg:text-left">
          Reach us at:
          <span className="lg:px-4 lg:border-r-2 lg:border-white block lg:inline-block">contact@vaspar.org</span>
          <span className="lg:pl-4 block lg:inline-block">+91 00000 00000</span>
        </div>
        <div className="lg:ml-auto flex items-center social-links text-center lg:text-left self-center mt-3 lg:mt-0">

          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/" className='pr-4'>
            <img src={linkedin} alt="linkedin" />
          </a>

          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  )
}
