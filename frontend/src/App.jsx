import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BookTrainer from './pages/BookTrainer';

// இப்போதைக்கு எரர் வராம இருக்க சிம்பிள் பிளேஸ்ஹோல்டர்ஸ் bro
const About = () => <div className='bg-neutral-800 p-8 rounded-2xl border border-neutral-700 text-center max-w-2xl mx-auto my-12'><h1 className='text-2xl font-black text-orange-500 uppercase'>About Us</h1><p className='text-neutral-400 mt-2 text-sm'>Welcome to Gym Alpha. Premium fitness training and CRM tracking hub.</p></div>;
const Packages = () => <div className='bg-neutral-800 p-8 rounded-2xl border border-neutral-700 text-center max-w-2xl mx-auto my-12'><h1 className='text-2xl font-black text-orange-500 uppercase'>Our Packages</h1><p className='text-neutral-400 mt-2 text-sm'>Explore monthly, quarterly, and annual premium membership slots.</p></div>;
const Gallery = () => <div className='bg-neutral-800 p-8 rounded-2xl border border-neutral-700 text-center max-w-2xl mx-auto my-12'><h1 className='text-2xl font-black text-orange-500 uppercase'>Gym Gallery</h1><p className='text-neutral-400 mt-2 text-sm'>Inside view of our high-tech workout workspace setup.</p></div>;
const Contact = () => <div className='bg-neutral-800 p-8 rounded-2xl border border-neutral-700 text-center max-w-2xl mx-auto my-12'><h1 className='text-2xl font-black text-orange-500 uppercase'>Contact Us</h1><p className='text-neutral-400 mt-2 text-sm'>Reach out at support@gymalpha.com for membership configurations.</p></div>;

const App = () => {
  const [userToken, setUserToken] = useState('');

  return (
    <div className='min-h-screen bg-neutral-900 text-white flex flex-col justify-between font-sans selection:bg-orange-500'>
      <Navbar userToken={userToken} setUserToken={setUserToken} />
      
      <div className='flex-grow container mx-auto px-4 py-8 pt-28'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          
          <Route path='/login' element={userToken ? <Navigate to="/dashboard" replace /> : <Login setUserToken={setUserToken} />} />
          <Route path='/dashboard' element={userToken ? <Dashboard userToken={userToken} /> : <Navigate to="/login" replace />} />
          <Route path='/book-trainer' element={userToken ? <BookTrainer userToken={userToken} /> : <Navigate to="/login" replace />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;