import React, { useState } from 'react';

const Login = ({ setUserToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setUserToken('dummy_member_token_987');
    }
  };

  return (
    <div className='max-w-md mx-auto my-16 bg-neutral-950 p-8 rounded-2xl border border-neutral-800 shadow-2xl relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-orange-500 to-red-600'></div>
      <h2 className='text-3xl font-black uppercase text-center tracking-tight mb-1'>Member Access</h2>
      <p className='text-neutral-500 text-center text-xs mb-8 tracking-wide uppercase'>Enter CRM Portal Credentials</p>
      
      <form onSubmit={handleLogin} className='space-y-5 text-sm'>
        <div>
          <label className='block text-neutral-400 font-bold uppercase tracking-wider text-xs mb-2'>Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@email.com" className='w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl focus:outline-none focus:border-orange-500 transition text-white font-medium' required />
        </div>
        <div>
          <label className='block text-neutral-400 font-bold uppercase tracking-wider text-xs mb-2'>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className='w-full px-4 py-3.5 bg-neutral-900 border border-neutral-800 rounded-xl focus:outline-none focus:border-orange-500 transition text-white font-medium' required />
        </div>
        <button type="submit" className='w-full bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white font-bold py-4 rounded-xl transition duration-200 shadow-lg shadow-orange-500/10 tracking-widest uppercase text-xs mt-4'>
          Verify & Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;