import React from 'react';
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'

export default function Footer() {
  return (
    <footer>
      <div className="w-4/5 mx-auto flex ">
        <div className="text-lg font-semibold">
          Reach us at:
          <span className="px-4 border-r-2 border-white">contact@vaspar.org</span>
          <span className="pl-4">+91 00000 00000</span>
        </div>
        <div className="ml-auto flex items-center social-links">
          <a href="#" className='pr-4' target="_blank">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="#" target="_blank">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    </footer>
  )
}
