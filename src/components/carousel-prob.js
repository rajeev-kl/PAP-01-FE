import React from 'react'

export default function carouselProb() {


  return (
    <div className='mt-8 w-full lg:w-11/12 ml-auto'>
      <div className="flex flex-col lg:flex-row mb-8">
        <div className="lg:w-2/5 lg:mr-6 mb-8 lg:mb-0">
          <img src={process.env.PUBLIC_URL + "/images/image-1.png"} className="w-full rounded-xl" alt='image' />
        </div>
        <div className="text-box lg:w-3/5 mt-0 lg:mt-3">
          <h3 className='text-2xl font-semibold mb-4'>Collected Plastic: Burnt, Buried, or Floating?</h3>
          <p className='mb-4 text-lg'>Most collected plastic ends up being burnt, buried, or floating, releasing toxins, leaching chemicals, and posing a threat to marine life.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mb-8">
        <div className="lg:w-2/5 lg:mr-6 mb-8 lg:mb-0">
          <img src={process.env.PUBLIC_URL + "/images/image-2.png"} className="w-full rounded-xl" alt='image' />
        </div>
        <div className="text-box lg:w-3/5 mt-0 lg:mt-3">
          <h3 className='text-2xl font-semibold mb-4'>The Ecological Impact of Building a House</h3>
          <p className='mb-4 text-lg'>Building a single house can lead to the depletion of natural resources such as wood, sand, stone, steel, and water, with devastating environmental consequences.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/5 lg:mr-6 mb-8 lg:mb-0">
          <img src={process.env.PUBLIC_URL + "/images/image-3.png"} className="w-full rounded-xl" alt='image' />
        </div>
        <div className="text-box lg:w-3/5 mt-0 lg:mt-3">
          <h3 className='text-2xl font-semibold mb-4'>Glass and Concrete Buildings - Inefficient Human Habitats</h3>
          <p className='mb-4 text-lg'>Most collected plastic ends up being burnt, buried, or floating, releasing toxins, leaching chemicals, and posing a threat to marine life.</p>
        </div>
      </div>
    </div>
  )
}
