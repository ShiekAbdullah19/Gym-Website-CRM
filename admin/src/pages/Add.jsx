import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';

const Add = ({ token }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [planType, setPlanType] = useState('Monthly');
  const [months, setMonths] = useState('1');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/member/add`, 
        { name, email, phone, planType, months }, 
        { headers: { token } }
      );

      if (response.data.success) {
        alert(response.data.message);
        setName('');
        setEmail('');
        setPhone('');
        setPlanType('Monthly');
        setMonths('1');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Error adding member, bro! ❌");
    }
  };

  return (
    <div className='bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-lg'>
      <h2 className='text-xl font-bold text-gray-800 mb-6'>🏋️‍♂️ Register New Gym Member</h2>
      
      <form onSubmit={onSubmitHandler} className='flex flex-col gap-4 text-sm'>
        <div>
          <label className='block font-semibold text-gray-700 mb-1'>Member Name</label>
          <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none' type="text" placeholder="Type here" required />
        </div>

        <div>
          <label className='block font-semibold text-gray-700 mb-1'>Email Address</label>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none' type="email" placeholder="name@email.com" required />
        </div>

        <div>
          <label className='block font-semibold text-gray-700 mb-1'>Phone Number</label>
          <input onChange={(e)=>setPhone(e.target.value)} value={phone} className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none' type="tel" placeholder="9876543210" required />
        </div>

        <div className='flex gap-4'>
          <div className='w-1/2'>
            <label className='block font-semibold text-gray-700 mb-1'>Plan Type</label>
            <select onChange={(e)=>setPlanType(e.target.value)} value={planType} className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none bg-white'>
              <option value="Monthly">Basic (Monthly)</option>
              <option value="Quarterly">Standard (Quarterly)</option>
              <option value="Premium">Premium (Annual)</option>
            </select>
          </div>

          <div className='w-1/2'>
            <label className='block font-semibold text-gray-700 mb-1'>Duration (Months)</label>
            <input onChange={(e)=>setMonths(e.target.value)} value={months} className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none' type="number" min="1" max="12" required />
          </div>
        </div>

        <button type="submit" className='mt-4 bg-red-600 text-white font-medium py-3 rounded-lg hover:bg-red-700 transition duration-200 shadow-md uppercase tracking-wider text-xs'>
          Add Member
        </button>
      </form>
    </div>
  );
};

export default Add;