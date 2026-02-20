import React from 'react';

const navbar = () => {
  return (
    <>
    <nav className='relative flex p-4 items-center justify-center font-medium text-gray-700 bg-linear-to-t from-primary-white to-primary-off-white overflow-hidden'>
      <div className="absolute top-[-10%] right-[-5%] w-125 h-125 bg-primary-green/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-5%] w-100 h-100 bg-emerald-400/10 rounded-full blur-[100px] pointer-events-none"></div>
      <ul className="flex gap-8 text-sm">
        <li className='hover:text-primary-green transition-colors duration-300 cursor-pointer'>ABOUT</li>
        <li className='hover:text-primary-green transition-colors duration-300 cursor-pointer'>
          PROMPTS
          </li>
        {/*IMPLEMENT THIS LATER FUTURE */}
        <li>DARK MODE</li>
        <li className='self-end hover:text-primary-green transition-colors duration-300 cursor-pointer'>
          <a href="https://github.com/Showcxse/llm-carbon-tracker" target="_blank" rel="noopener noreferrer">
          {/*IM TOO LAZY TO MAKE THIS SHIT I JUST GOOGLED IT*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 hover:text-primary-green transition-colors duration-300"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.14-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default navbar;