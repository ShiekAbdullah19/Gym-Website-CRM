import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = ({ userToken, setUserToken }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu State

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className='absolute top-0 left-0 w-full bg-transparent px-6 md:px-[8%] py-6 flex justify-between items-center z-50'>
      {/* Brand Identity Logo */}
      <NavLink to="/" onClick={closeMenu} className='text-2xl md:text-3xl font-black tracking-tight text-white font-sans uppercase z-50'>
        Gym<span className='text-orange-500'>Plus</span>
      </NavLink>

      {/* Hamburger Icon for Mobile Screens */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className='lg:hidden text-white focus:outline-none z-50 p-2'
        aria-label="Toggle Menu"
      >
        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Navigation Menu Links (Desktop & Mobile Drawer Overlay) */}
      <div className={`
        fixed lg:static top-0 left-0 w-full h-screen lg:h-auto bg-neutral-950/95 lg:bg-transparent 
        flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-8 lg:gap-8 
        text-sm lg:text-xs font-bold uppercase tracking-widest text-neutral-300
        transition-all duration-300 ease-in-out z-40
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:opacity-100 lg:visible'}
      `}>
        <NavLink to="/" onClick={closeMenu} className='hover:text-orange-500 transition [&.active]:text-orange-500'>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu} className='hover:text-orange-500 transition [&.active]:text-orange-500'>About</NavLink>
        <NavLink to="/packages" onClick={closeMenu} className='hover:text-orange-500 transition [&.active]:text-orange-500'>Packages</NavLink>
        
        {userToken ? (
          <>
            <NavLink to="/book-trainer" onClick={closeMenu} className='hover:text-orange-500 transition [&.active]:text-orange-500'>Trainers</NavLink>
            <NavLink to="/dashboard" onClick={closeMenu} className='hover:text-orange-500 transition [&.active]:text-orange-500'>Dashboard (Pass)</NavLink>
          </>
        ) : (
          <NavLink to="/login" onClick={closeMenu} className='hover:text-orange-500 transition [&.active]:text-orange-500'>Trainers</NavLink>
        )}
        
        <NavLink to="/gallery" onClick={closeMenu} className='hover:text-orange-500 transition [&.active]:text-orange-500'>Gallery</NavLink>
        <NavLink to="/contact" onClick={closeMenu} className='hover:text-orange-500 transition [&.active]:text-orange-500'>Contact</NavLink>

        {/* Action Button Toggle */}
        {userToken ? (
          <button 
            onClick={() => { setUserToken(''); navigate('/'); closeMenu(); }} 
            className='bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded lg:rounded-none transition text-xs uppercase tracking-wider mt-4 lg:mt-0'
          >
            Logout
          </button>
        ) : (
          <NavLink to="/login" onClick={closeMenu} className='bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded lg:rounded-none transition text-xs uppercase tracking-wider mt-4 lg:mt-0'>
            Join Now
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;