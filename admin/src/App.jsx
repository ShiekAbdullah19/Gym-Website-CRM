import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import { Routes, Route, Navigate } from 'react-router-dom'; // Navigate-ah import panrom bro
import Add from './pages/Add';
import List from './pages/List';

export const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const App = () => {
  const [token, setToken] = useState('');

  return (
    <div className='bg-gray-50 min-h-screen'>
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <Navbar setToken={setToken} />
          <div className='flex w-full'>
            <Sidebar />
            <div className='w-[82%] p-8 text-gray-600 text-base'>
              <Routes>
                {/* Base URL-ல லாகின் ஆன உடனே ஆட்டோமேட்டிக்கா /add பக்கத்துக்கு போக வச்சிட்டோம் bro */}
                <Route path='/' element={<Navigate to="/add" replace />} />
                
                <Route path='/add' element={<Add token={token} />} />
                <Route path='/list' element={<List token={token} />} />
                <Route path='/attendance' element={<div className='bg-white p-6 rounded-xl shadow-sm font-semibold text-xl'>⚙️ QR Attendance Scanner Page (Frontend Combo coming soon!)</div>} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;