import React from 'react';
import { QRCodeSVG } from 'qrcode.react'; // SVG மெத்தட் யூஸ் பண்றோம் bro
import { QrCode, Calendar, Clock, Bell } from 'lucide-react';

const Dashboard = () => {
  // டம்மி யூசர் ப்ரொஃபைல் டேட்டா
  const memberData = {
    id: "MEM-2026-ALPHA",
    name: "Bro Jack",
    plan: "Premium (Annual Plan)",
    status: "Active",
    validTill: "31-Dec-2026"
  };

  return (
    <div className='max-w-4xl mx-auto space-y-8'>
      <div className='bg-neutral-800 p-6 rounded-2xl border border-neutral-700 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md'>
        <div>
          <span className='bg-green-500/10 text-green-400 text-xs font-semibold px-3 py-1 rounded-full border border-green-500/20 uppercase tracking-wide'>{memberData.status} Membership</span>
          <h1 className='text-3xl font-black mt-2'>Welcome Back, {memberData.name}! 👋</h1>
          <p className='text-neutral-400 text-sm mt-1'>Plan: <span className='text-red-400 font-medium'>{memberData.plan}</span></p>
        </div>
        
        {/* Subscription Renewal Reminder Notice */}
        <div className='bg-red-500/10 border border-red-500/20 p-4 rounded-xl flex items-start gap-3 max-w-sm'>
          <Bell className='text-red-500 shrink-0 mt-0.5' size={18} />
          <div>
            <h4 className='text-xs font-bold text-red-400 uppercase tracking-wider'>Renewal Alert</h4>
            <p className='text-neutral-300 text-xs mt-0.5'>Your plan is active till {memberData.validTill}. Reminders will auto-notify 5 days before.</p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* QR Code Card - Attendance Front Gate Security Screen */}
        <div className='bg-gradient-to-b from-neutral-800 to-neutral-900 p-6 rounded-2xl border border-neutral-700 flex flex-col items-center text-center shadow-lg relative overflow-hidden'>
          <div className='absolute top-0 left-0 w-full h-1 bg-red-600'></div>
          <QrCode className='text-red-500 mb-2' size={28} />
          <h3 className='font-bold text-lg text-neutral-200'>Digital Gate Pass</h3>
          <p className='text-xs text-neutral-400 mb-5 max-w-[200px]'>Scan this QR code at the gym entrance to log attendance.</p>
          
          {/* White container for high contrast QR Scan */}
          <div className='bg-white p-4 rounded-xl shadow-inner mb-4'>
            <QRCodeSVG value={memberData.id} size={160} fgColor="#000000" bgColor="#ffffff" level="H" />
          </div>
          
          <span className='font-mono text-xs text-neutral-400 bg-neutral-800 px-3 py-1 rounded-md border border-neutral-700'>{memberData.id}</span>
        </div>

        {/* Attendance Stats & Log Status */}
        <div className='bg-neutral-800 p-6 rounded-2xl border border-neutral-700 md:col-span-2 space-y-4'>
          <h3 className='font-bold text-lg flex items-center gap-2'><Calendar size={20} className='text-red-500' /> Recent Attendance Logs</h3>
          <div className='divide-y divide-neutral-700/50 text-sm'>
            <div className='py-3 flex justify-between items-center'>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-green-500'></div>
                <p className='font-medium text-neutral-200'>Today (30-Jun-2026)</p>
              </div>
              <p className='text-neutral-400 flex items-center gap-1 font-mono text-xs'><Clock size={14} /> 07:15 AM - Present</p>
            </div>
            <div className='py-3 flex justify-between items-center'>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-green-500'></div>
                <p className='font-medium text-neutral-200'>Yesterday (29-Jun-2026)</p>
              </div>
              <p className='text-neutral-400 flex items-center gap-1 font-mono text-xs'><Clock size={14} /> 07:02 AM - Present</p>
            </div>
            <div className='py-3 flex justify-between items-center'>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-red-500'></div>
                <p className='font-medium text-neutral-200'>Saturday (27-Jun-2026)</p>
              </div>
              <p className='text-neutral-400 flex items-center gap-1 font-mono text-xs'>Absent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;