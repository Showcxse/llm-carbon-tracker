import React from 'react'
import { assets } from '../assets/assets.js';

const navbar = () => {
  return (
    <nav className='relative flex p-5 items-center justify-center font-medium text-gray-700 bg-primary-white'>
        <div className="absolute top-[-10%] right-[-5%] w-125 h-125 bg-primary-green/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-100 h-100 bg-emerald-400/10 rounded-full blur-[100px] pointer-events-none"></div>

        <ul className="hidden sm:flex gap-5 text-sm">
            <li className='hover:text-primary-green transition-colors duration-300 cursor-pointer'>ABOUT</li>
            <li className='hover:text-primary-green transition-colors duration-300 cursor-pointer'>PROMPTS</li>
            <li className='hover:text-primary-green transition-colors duration-300 cursor-pointer'>
              <a href="">
                <img src={assets.githubicon} alt="GitHub Icon" className="w-5 h-5" />
              </a>
            </li>


        </ul>
    </nav>
  )
}

export default navbar