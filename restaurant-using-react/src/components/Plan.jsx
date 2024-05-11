import React from 'react'

const Plan = () => {
  return (
    <div id='plan' className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-3 object-cover w-full h-full p-2' src='https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg' alt='' />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/457878/pexels-photo-457878.jpeg" alt="" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg" alt="" />
        <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/221471/pexels-photo-221471.jpeg" alt="" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg" alt="" />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>
            Plan Your Next Trip
        </h3>
        <p className='text-2xl py-6'>Want to embark on your next adventure?</p>
        <p className='pb-6'>Begin your journey to a new and exciting destination. Explore our curated itineraries and travel guides to make the most of your holiday.





</p>
        <div>
            <button className='border-black mr-4 hover:shadow-xl max-[280px]:mb-2'>Learn More</button>
            <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
        </div>
      </div>
    </div>
  )
}

export default Plan
