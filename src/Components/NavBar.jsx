import React from 'react'
import C from '../assets/C.png'

const NavBar = () => {
  return (
      <nav className="sticky top-0 z-50 py-3 bg-blue-500 border-b border-blue-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-10 w-10 mr-2" src={C} alt="Nhi hai" />
                    <span className="text-3xl tracking-tight text-white-300 font-bold">Cerebral Gain</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12 text-lg">
                    <li><a href="/" className='hover:text-white-500'>Home</a></li>
                    <li><a href="/about" className='hover:text-white-500'>About</a></li>
                    <li><a href="/contact" className='hover:text-white-500'>Contact</a></li>
                    <li><a href="/doctors" className='hover:text-white-500'>Doctors</a></li>
                </ul>
                <div className="hidden lg:flex items-center space-x-12 justify-center">
                    <a href="/log-in" className='py-2 px-3 border rounded-md'>
                        Sign-In
                    </a>
                    <a href="/create-account" className='bg-gradient-to-r from-blue-700 to-blue-800 py-2 px-3 rounded-md text-white'>
                        Create an Account
                    </a>
                </div> 
            </div>
        </div>
      </nav>
  )
}

export default NavBar
