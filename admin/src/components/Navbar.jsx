import React from 'react';

const Navbar = ({ setToken }) => {
  return (
    <div className='flex items-center justify-between py-2 px-[4%] border-b border-gray-200 bg-white'>
      <div className='flex items-center gap-2'>
        <span className='text-xl font-bold tracking-wider text-red-600 uppercase'>💪 GYM ALPHA</span>
        <span className='text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium'>Admin Panel</span>
      </div>
      <button 
        onClick={() => setToken('')} 
        className='bg-red-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-red-700 transition duration-200 shadow-sm'
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;