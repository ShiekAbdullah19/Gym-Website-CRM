import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/member/list`, { headers: { token } });
      if (response.data.success) {
        setList(response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100'>
      <h2 className='text-xl font-bold text-gray-800 mb-6'>👥 All Gym Members</h2>
      
      <div className='overflow-x-auto'>
        <table className='w-full text-left text-sm border-collapse'>
          <thead>
            <tr className='bg-gray-50 text-gray-700 font-semibold border-b border-gray-100'>
              <th className='py-3 px-4'>Name</th>
              <th className='py-3 px-4'>Email</th>
              <th className='py-3 px-4'>Phone</th>
              <th className='py-3 px-4'>Plan</th>
              <th className='py-3 px-4'>QR Code String</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-50 text-gray-600'>
            {list.length === 0 ? (
              <tr>
                <td colSpan="5" className='py-6 text-center text-gray-400'>No members registered yet, bro!</td>
              </tr>
            ) : (
              list.map((item, index) => (
                <tr key={index} className='hover:bg-gray-50/50 transition'>
                  <td className='py-3 px-4 font-medium text-gray-800'>{item.name}</td>
                  <td className='py-3 px-4'>{item.email}</td>
                  <td className='py-3 px-4'>{item.phone}</td>
                  <td className='py-3 px-4'><span className='bg-red-50 text-red-600 font-medium px-2.5 py-0.5 rounded-full text-xs'>{item.planType}</span></td>
                  <td className='py-3 px-4 font-mono text-xs text-gray-500'>{item.qrCodeData}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;