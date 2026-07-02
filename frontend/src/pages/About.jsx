import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='bg-neutral-950 text-white font-sans min-h-screen overflow-x-hidden pt-12 selection:bg-orange-500'>
      
      {/* Banner Title */}
      <div className='py-12 md:py-16 text-center space-y-3 bg-neutral-900 border-b border-neutral-800 px-6'>
        <div className='text-orange-500 font-mono text-xs uppercase tracking-widest font-bold'>Who We Are</div>
        <h1 className='text-3xl md:text-5xl font-black uppercase tracking-tight'>ABOUT OUR WORKSPACE</h1>
        <p className='text-neutral-500 text-xs max-w-md mx-auto leading-relaxed'>
          GymPlus Alpha combines extreme physical training gear with state-of-the-art CRM automation systems.
        </p>
      </div>

      {/* Grid Split Content */}
      <div className='max-w-6xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>
        
        <div className='space-y-5 text-left'>
          <div className='flex items-center gap-2 text-orange-500 font-mono text-xs uppercase tracking-widest font-bold'>
            <span className='w-8 h-[2px] bg-orange-500'></span> Push Beyond Limits
          </div>
          <h2 className='text-2xl md:text-3xl font-black uppercase tracking-tight leading-snug'>
            WE ARE MORE THAN JUST A WORKOUT SPACE
          </h2>
          <p className='text-neutral-400 text-xs md:text-sm leading-relaxed'>
            GymPlus Alpha offers seamless check-ins via digital encrypted member QR passes, live profile monitoring matrix, and customized subscription alerts directly integrated inside the user portal.
          </p>
          <p className='text-neutral-500 text-xs leading-relaxed'>
            Whether your goal is bodybuilding, functional strength, or advanced cardiovascular performance, our elite certified trainer sync platform keeps you aligned on every repetition block.
          </p>

          <div className='pt-2'>
            <Link to="/login" className='bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 uppercase tracking-wider text-xs transition duration-200 inline-block'>
              Become A Member
            </Link>
          </div>
        </div>

        {/* Feature Display Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'>
          {[
            { title: 'Elite Trainers', desc: 'Professional coaches coordinating real-time routine iterations.', path: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
            { title: 'QR Attendance', desc: 'Secure entry gate validation through smart pass dashboards.', path: 'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h.01M16 20h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
            { title: 'Smart Reminders', desc: 'Automated subscription workflow alerts for proactive renewals.', path: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
            { title: 'Modern Gear', desc: 'Heavy loading biomechanically sound resistance systems.', path: 'M13 10V3L4 14h7v7l9-11h-7z' }
          ].map((item, index) => (
            <div key={index} className='bg-neutral-900 p-5 md:p-6 border border-neutral-800 hover:border-orange-500/30 transition duration-300 flex flex-col justify-between text-left'>
              <div>
                <div className='text-orange-500 mb-3'>
                  <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={item.path}/></svg>
                </div>
                <h3 className='font-bold text-sm md:text-base uppercase mb-1 text-white'>{item.title}</h3>
                <p className='text-neutral-500 text-xs leading-relaxed'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;