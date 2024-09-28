import React from 'react'


const HeroSection = () => {
  return (
    <div className="flex flex-col items-center  bg-cover bg-center bg-blue-100">
        <h1 className="text-4xl sm:text-6xl mt-20 lg:text-7xl text-center tracking-wide font-bold">
            Your Mental Wellness,

            <span className='bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text'>Our Priority</span>
        </h1>
        <p className='mt-10 text-center text-large text-neutral-500 max-w-4xl'>
        At MiHealth, we are dedicated to providing personalized mental health therapy tailored to your unique needs. Take the first step towards healing, growth, and a healthier mindset with our expert-guided therapy services.
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className='bg-gradient-to-r from-blue-400 to-blue-600 py-3 px-4 mx-3 rounded-md'>
            Start Your Journey
            </a>
            <a href="#" className='py-3 px-4 mx-3 rounded-md border hover:bg-gradient-to-r from-blue-400 to-blue-600'>
            Connect with a Therapist Today
            </a>
        </div>
        <div className="flex mt-10 justify-center">
            
        </div>
        
    </div>
  )
}

export default HeroSection
