import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserPlus, Users, CheckSquare } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r border-gray-200 bg-white pt-6'>
      <div className='flex flex-col gap-2 pl-[20%] text-[15px] text-gray-700'>
        
        <NavLink 
          className='flex items-center gap-3 border border-gray-200 border-r-0 px-3 py-2.5 rounded-l-lg transition-all duration-200 hover:text-red-600 [&.active]:bg-red-50 [&.active]:border-red-500 [&.active]:text-red-600 [&.active]:font-semibold' 
          to="/add"
        >
          <UserPlus size={20} />
          <p className='hidden md:block'>Add Member</p>
        </NavLink>

        <NavLink 
          className='flex items-center gap-3 border border-gray-200 border-r-0 px-3 py-2.5 rounded-l-lg transition-all duration-200 hover:text-red-600 [&.active]:bg-red-50 [&.active]:border-red-500 [&.active]:text-red-600 [&.active]:font-semibold' 
          to="/list"
        >
          <Users size={20} />
          <p className='hidden md:block'>List Members</p>
        </NavLink>

        <NavLink 
          className='flex items-center gap-3 border border-gray-200 border-r-0 px-3 py-2.5 rounded-l-lg transition-all duration-200 hover:text-red-600 [&.active]:bg-red-50 [&.active]:border-red-500 [&.active]:text-red-600 [&.active]:font-semibold' 
          to="/attendance"
        >
          <CheckSquare size={20} />
          <p className='hidden md:block'>Attendance</p>
        </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;