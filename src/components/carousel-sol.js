import React from 'react'

export default function carouselSol() {

  return (

    <div className='mt-8 w-full lg:w-11/12 ml-auto'>
      <div className="flex flex-col lg:flex-row mb-8">
        <div className="lg:w-2/5 lg:mr-6 mb-8 lg:mb-0">
          <div className="h-60 bg-gray-400 rounded"></div>
        </div>
        <div className="text-box lg:w-3/5 mt-0 lg:mt-3">
          <h3 className='text-2xl font-semibold mb-4'>Solving the Plastic Problem with Comprehensive Tracking</h3>
          <p className='text-xl'>A comprehensive approach to tracking plastic waste at every stage of its journey using advanced technology like RFID and blockchain can prevent plastic from ending up in landfills or oceans, solving the plastic problem and promoting a cleaner environment.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mb-8">
        <div className="lg:w-2/5 lg:mr-6 mb-8 lg:mb-0">
          <div className="h-60 bg-gray-400 rounded"></div>
        </div>
        <div className="text-box lg:w-3/5 mt-0 lg:mt-3">
          <h3 className='text-2xl font-semibold mb-4'>Next-Generation Construction Panel for Modular, Sustainable Homes</h3>
          <p className='text-xl'>Our innovative construction panel enables modular, sustainable homes with easy dismantling and reassembly, reducing waste and promoting circular economy practices. It also allows for waterless construction and improves indoor air quality through data collection.</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/5 lg:mr-6 mb-8 lg:mb-0">
          <div className="h-60 bg-gray-400 rounded"></div>
        </div>
        <div className="text-box lg:w-3/5 mt-0 lg:mt-3">
          <h3 className='text-2xl font-semibold mb-4'>Air Jacket for Energy-Efficient Home Temperature Control</h3>
          <p className='text-xl'>The air jacket uses conduction, convection, and radiation to transfer heat and maintain a consistent indoor temperature, reducing the need for energy-consuming heating and cooling systems. This innovative technology saves energy, lowers energy bills, and reduces the carbon footprint of the house.</p>
        </div>
      </div>
    </div>
  )
}
