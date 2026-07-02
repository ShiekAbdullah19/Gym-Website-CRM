import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // இப்போதைக்கு லோக்கலா டெஸ்ட் பண்ண ஒரு டம்மி டோக்கன் செட் பண்றோம் bro
      if (email === "admin@gym.com" && password === "admin123") {
        setToken("dummy_gym_token_123");
      } else {
        alert("Invalid credentials, bro! ❌");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
      <div className='bg-white shadow-xl rounded-2xl max-w-md w-full p-8 border border-gray-100'>
        <h1 className='text-2xl font-bold text-gray-800 text-center mb-1'>🏋️‍♂️ GYM ALPHA</h1>
        <p className='text-gray-500 text-center text-sm mb-6'>Admin Control Center</p>
        <form onSubmit={onSubmitHandler}>
          <div className='mb-4'>
            <label className='text-sm font-semibold text-gray-700 block mb-2'>Email Address</label>
            <input 
              onChange={(e) => setEmail(e.target.value)} 
              value={email} 
              className='rounded-lg w-full px-4 py-2.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition' 
              type="email" 
              placeholder="admin@gym.com" 
              required 
            />
          </div>
          <div className='mb-6'>
            <label className='text-sm font-semibold text-gray-700 block mb-2'>Password</label>
            <input 
              onChange={(e) => setPassword(e.target.value)} 
              value={password} 
              className='rounded-lg w-full px-4 py-2.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition' 
              type="password" 
              placeholder="••••••••" 
              required 
            />
          </div>
          <button className='w-full bg-red-600 text-white font-medium py-3 rounded-lg hover:bg-red-700 transition duration-200 shadow-md'>
            Login to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;