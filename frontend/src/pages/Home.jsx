import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { QrCode, Bell, UserCheck, Dumbbell, Shield, Award, Mail, Phone, MapPin } from 'lucide-react';

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='bg-neutral-950 text-white font-sans -mt-28 -mx-4 overflow-x-hidden scroll-smooth'>
      
      {/* 1. HERO SECTION */}
      <section 
        id="home"
        className='relative h-screen flex items-center px-6 md:px-[8%] bg-cover bg-center bg-no-repeat'
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 35%, rgba(0, 0, 0, 0.5) 100%), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop')` 
        }}
      >
        <div className='max-w-3xl space-y-4 md:space-y-6 text-left z-10'>
          <h1 className='text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-tight md:leading-none'>
            THE PERFECT GYM <br />
            <span className='text-orange-500'>CRM PORTAL</span> FOR YOU
          </h1>
          <p className='text-neutral-400 text-xs sm:text-sm md:text-base max-w-xl font-normal leading-relaxed'>
            Track active slots, scan your personal gate attendance QR pass, coordinate workout cycles with premium trainers, and manage subscription alerts seamlessly.
          </p>
          <div className='flex flex-wrap gap-3 pt-2 md:pt-4'>
            <Link to="/login" className='bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3.5 md:px-8 md:py-4 uppercase tracking-wider text-[11px] md:text-xs transition duration-200 shadow-lg shadow-orange-500/20'>
              Join Now Pass
            </Link>
            <a href="#about" className='bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 text-white font-bold px-6 py-3.5 md:px-8 md:py-4 uppercase tracking-wider text-[11px] md:text-xs transition duration-200'>
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section id="about" className='py-20 md:py-28 px-6 md:px-[8%] bg-neutral-900 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center border-b border-neutral-800'>
        <div className='space-y-5 md:space-y-6'>
          <div className='flex items-center gap-2 text-orange-500 font-mono text-xs uppercase tracking-widest font-bold'>
            <span className='w-8 h-[2px] bg-orange-500'></span> About GymPlus Alpha
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight'>
            WE ARE MORE THAN JUST A WORKOUT WORKSPACE
          </h2>
          <p className='text-neutral-400 text-xs sm:text-sm leading-relaxed'>
            GymPlus Alpha combines premium physical conditioning equipment with high-end digital CRM solutions. We monitor active member slots, auto-trigger reminder workflows, and provide instantaneous dashboard access.
          </p>
          
          <div className='grid grid-cols-2 gap-4 pt-2'>
            <div className='border-l-2 border-orange-500 pl-4'>
              <h4 className='text-xl md:text-2xl font-black text-white'>1500+</h4>
              <p className='text-[10px] text-neutral-500 uppercase font-bold tracking-wider'>Active Members</p>
            </div>
            <div className='border-l-2 border-orange-500 pl-4'>
              <h4 className='text-xl md:text-2xl font-black text-white'>99.9%</h4>
              <p className='text-[10px] text-neutral-500 uppercase font-bold tracking-wider'>QR Gate Success</p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6'>
          <div className='bg-neutral-950 p-5 md:p-6 border border-neutral-800 hover:border-orange-500/30 transition duration-300'>
            <UserCheck className='text-orange-500 mb-3' size={24} />
            <h3 className='font-bold text-sm md:text-base uppercase mb-1'>Member Tracking</h3>
            <p className='text-neutral-500 text-xs leading-relaxed'>Comprehensive metrics monitoring active member subscription lifecycles.</p>
          </div>
          <div className='bg-neutral-950 p-5 md:p-6 border border-neutral-800 hover:border-orange-500/30 transition duration-300'>
            <QrCode className='text-orange-500 mb-3' size={24} />
            <h3 className='font-bold text-sm md:text-base uppercase mb-1'>QR Gate Logs</h3>
            <p className='text-neutral-500 text-xs leading-relaxed'>Instant gate check-ins with digital encrypted member QR passes.</p>
          </div>
          <div className='bg-neutral-950 p-5 md:p-6 border border-neutral-800 hover:border-orange-500/30 transition duration-300'>
            <Bell className='text-orange-500 mb-3' size={24} />
            <h3 className='font-bold text-sm md:text-base uppercase mb-1'>Auto Reminders</h3>
            <p className='text-neutral-500 text-xs leading-relaxed'>Automated renewal warning alerts triggered directly onto dashboards.</p>
          </div>
          <div className='bg-neutral-950 p-5 md:p-6 border border-neutral-800 hover:border-orange-500/30 transition duration-300'>
            <Dumbbell className='text-orange-500 mb-3' size={24} />
            <h3 className='font-bold text-sm md:text-base uppercase mb-1'>Trainer Sync</h3>
            <p className='text-neutral-500 text-xs leading-relaxed'>Direct booking systems to lock specific timeframes with elite coaches.</p>
          </div>
        </div>
      </section>

      {/* 3. PACKAGES SECTION */}
      <section id="packages" className='py-20 md:py-28 px-6 md:px-[8%] bg-neutral-950 border-b border-neutral-800'>
        <div className='text-center space-y-2 mb-12 md:mb-16'>
          <div className='text-orange-500 font-mono text-xs uppercase tracking-widest font-bold'>Pricing Tiers</div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight'>CHOOSE YOUR SUBSCRIPTION SLOT</h2>
          <p className='text-neutral-500 text-xs max-w-md mx-auto'>All packages automatically generate a digital entry pass inside the member account panel.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {/* Card 1 */}
          <div className='bg-neutral-900 border border-neutral-800 p-6 md:p-8 rounded-none flex flex-col justify-between group hover:border-orange-500/40 transition duration-300'>
            <div className='space-y-4'>
              <div className='text-xs font-bold uppercase tracking-wider text-neutral-400'>Standard Pass</div>
              <div className='text-3xl font-black text-white'>₹1,499<span className='text-xs font-normal text-neutral-500'>/Mo</span></div>
              <ul className='space-y-2.5 pt-4 text-xs text-neutral-400 border-t border-neutral-800'>
                <li className='flex items-center gap-2'><Shield size={14} className='text-orange-500' /> Basic Gym Floor Access</li>
                <li className='flex items-center gap-2'><Shield size={14} className='text-orange-500' /> Digital QR Attendance Card</li>
                <li className='flex items-center gap-2'><Shield size={14} className='text-orange-500' /> Profile Matrix Tracker</li>
              </ul>
            </div>
            <Link to="/login" className='w-full mt-6 bg-neutral-800 hover:bg-orange-500 text-white text-center font-bold py-3 text-xs uppercase tracking-wider transition duration-200'>Get Started</Link>
          </div>

          {/* Card 2 */}
          <div className='bg-neutral-900 border-2 border-orange-500 p-6 md:p-8 rounded-none relative flex flex-col justify-between shadow-2xl shadow-orange-500/5 my-4 md:my-0'>
            <div className='absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-black text-[9px] font-black uppercase tracking-widest px-3 py-0.5'>MOST POPULAR</div>
            <div className='space-y-4'>
              <div className='text-xs font-bold uppercase tracking-wider text-orange-500'>Elite Membership</div>
              <div className='text-3xl font-black text-white'>₹3,999<span className='text-xs font-normal text-neutral-500'>/3 Mos</span></div>
              <ul className='space-y-2.5 pt-4 text-xs text-neutral-300 border-t border-neutral-800'>
                <li className='flex items-center gap-2'><Award size={14} className='text-orange-500' /> All Floor Access & Cardio Slots</li>
                <li className='flex items-center gap-2'><Award size={14} className='text-orange-500' /> Personalized Portal Automation</li>
                <li className='flex items-center gap-2'><Award size={14} className='text-orange-500' /> Renewal Alerts & Reminders</li>
                <li className='flex items-center gap-2'><Award size={14} className='text-orange-500' /> 2 Trainer Consultations/Mo</li>
              </ul>
            </div>
            <Link to="/login" className='w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white text-center font-black py-3 text-xs uppercase tracking-wider transition duration-200'>Get Started</Link>
          </div>

          {/* Card 3 */}
          <div className='bg-neutral-900 border border-neutral-800 p-6 md:p-8 rounded-none flex flex-col justify-between group hover:border-orange-500/40 transition duration-300'>
            <div className='space-y-4'>
              <div className='text-xs font-bold uppercase tracking-wider text-neutral-400'>VIP Corporate</div>
              <div className='text-3xl font-black text-white'>₹11,999<span className='text-xs font-normal text-neutral-500'>/Yr</span></div>
              <ul className='space-y-2.5 pt-4 text-xs text-neutral-400 border-t border-neutral-800'>
                <li className='flex items-center gap-2'><Shield size={14} className='text-orange-500' /> Unlimited 24/7 Floor Access</li>
                <li className='flex items-center gap-2'><Shield size={14} className='text-orange-500' /> Dedicated Trainer Scheduling</li>
                <li className='flex items-center gap-2'><Shield size={14} className='text-orange-500' /> Premium Diet Log Trackers</li>
                <li className='flex items-center gap-2'><Shield size={14} className='text-orange-500' /> Full Locker Key Access</li>
              </ul>
            </div>
            <Link to="/login" className='w-full mt-6 bg-neutral-800 hover:bg-orange-500 text-white text-center font-bold py-3 text-xs uppercase tracking-wider transition duration-200'>Get Started</Link>
          </div>
        </div>
      </section>

      {/* 4. TRAINERS SECTION */}
      <section id="trainers" className='py-20 md:py-28 px-6 md:px-[8%] bg-neutral-900 border-b border-neutral-800'>
        <div className='text-center space-y-2 mb-12 md:mb-16'>
          <div className='text-orange-500 font-mono text-xs uppercase tracking-widest font-bold'>Team Professionals</div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight'>MEET OUR CERTIFIED COACHES</h2>
          <p className='text-neutral-500 text-xs max-w-md mx-auto'>Log in to book separate training slots with these elite conditioning specialists.</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto'>
          {/* Trainer Cards */}
          {['Marcus Vane', 'Sarah Jenkins', 'Alex Thorne'].map((name, i) => (
            <div key={i} className='bg-neutral-950 group border border-neutral-800 overflow-hidden'>
              <div className='h-72 md:h-80 overflow-hidden relative bg-neutral-800'>
                <img src={
                  i === 0 ? "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop" :
                  i === 1 ? "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop" :
                            "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=600&auto=format&fit=crop"
                } alt={name} className='w-full h-full object-cover group-hover:scale-105 transition duration-500 filter grayscale group-hover:grayscale-0' />
              </div>
              <div className='p-4 md:p-5 text-left border-t border-neutral-800'>
                <div className='text-orange-500 text-[9px] font-bold tracking-widest uppercase mb-1'>
                  {i === 0 ? 'Strength Specialist' : i === 1 ? 'Cardio & HIIT Coach' : 'Bodybuilding Master'}
                </div>
                <h3 className='font-black text-base md:text-lg uppercase'>{name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GALLERY SECTION */}
      <section id="gallery" className='py-20 md:py-28 px-6 md:px-[8%] bg-neutral-950 border-b border-neutral-800'>
        <div className='text-center space-y-2 mb-12'>
          <div className='text-orange-500 font-mono text-xs uppercase tracking-widest font-bold'>Workspace Showcase</div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight'>INSIDE GYMPLUS DELUXE</h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto'>
          {["photo-1540497077202-7c8a3999166f", "photo-1517838277536-f5f99be501cd", "photo-1571731956622-9a94274940e3", "photo-1593079831268-3381b0db4a77"].map((id, index) => (
            <div key={index} className='h-48 sm:h-56 md:h-60 bg-neutral-900 border border-neutral-800 overflow-hidden'>
              <img src={`https://images.unsplash.com/${id}?q=80&w=500&auto=format&fit=crop`} className='w-full h-full object-cover opacity-75 hover:opacity-100 transition duration-300' alt="Gym Workspace"/>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CONTACT WORKSPACE SECTION */}
      <section id="contact" className='py-20 md:py-28 px-6 md:px-[8%] bg-neutral-900 border-b border-neutral-950'>
        <div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12'>
          
          <div className='space-y-4 md:space-y-6 text-left'>
            <div className='text-orange-500 font-mono text-xs uppercase tracking-widest font-bold'>Get In Touch</div>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight'>NEED HELPDESK ASSISTANCE?</h2>
            <p className='text-neutral-400 text-xs leading-relaxed max-w-md'>
              Have trouble scanning your digital entry QR code or configuring your active subscription cycle billing details? Ping our desk anytime!
            </p>
            <div className='space-y-3 pt-2 text-xs font-medium text-neutral-300'>
              <div className='flex items-center gap-3'><MapPin size={15} className='text-orange-500 shrink-0' /> 742 Alpha Avenue, Fitness Cluster, Chennai, IN</div>
              <div className='flex items-center gap-3'><Phone size={15} className='text-orange-500 shrink-0' /> +91 98765 43210</div>
              <div className='flex items-center gap-3'><Mail size={15} className='text-orange-500 shrink-0' /> crm-support@gymplusalpha.com</div>
            </div>
          </div>

          <div className='bg-neutral-950 p-6 md:p-8 border border-neutral-800 relative'>
            <div className='absolute top-0 left-0 w-full h-[2px] bg-orange-500'></div>
            <form onSubmit={handleContactSubmit} className='space-y-4 text-left text-xs'>
              <div>
                <label className='block text-neutral-400 font-bold uppercase mb-1.5 tracking-wider'>Full Name</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className='w-full p-3 bg-neutral-900 border border-neutral-800 focus:outline-none focus:border-orange-500 transition text-white rounded-none' placeholder='John Doe' />
              </div>
              <div>
                <label className='block text-neutral-400 font-bold uppercase mb-1.5 tracking-wider'>Email ID</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className='w-full p-3 bg-neutral-900 border border-neutral-800 focus:outline-none focus:border-orange-500 transition text-white rounded-none' placeholder='name@email.com' />
              </div>
              <div>
                <label className='block text-neutral-400 font-bold uppercase mb-1.5 tracking-wider'>Message Request</label>
                <textarea rows="3" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className='w-full p-3 bg-neutral-900 border border-neutral-800 focus:outline-none focus:border-orange-500 transition text-white rounded-none' placeholder='Query message...'></textarea>
              </div>
              
              <button type='submit' className='w-full bg-orange-500 hover:bg-orange-600 font-bold text-black py-3 uppercase tracking-widest transition duration-200'>
                Send Message
              </button>

              {submitted && (
                <div className='text-center text-green-400 text-[11px] font-bold mt-2 uppercase tracking-wide'>
                  ✓ Sent successfully!
                </div>
              )}
            </form>
          </div>

        </div>
      </section>

      {/* 7. FOOTER SECTION */}
      <footer className='bg-neutral-950 py-10 px-6 md:px-[8%] text-neutral-500 text-xs border-t border-neutral-900'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='text-center md:text-left'>
            <div className='text-xl font-black text-white uppercase tracking-tighter mb-1'>Gym<span className='text-orange-500'>Plus</span></div>
            <p className='text-[10px] text-neutral-600'>© 2026 GymPlus Alpha CRM Ecosystem. All Rights Reserved.</p>
          </div>

          <div className='flex flex-wrap justify-center gap-4 md:gap-6 font-bold uppercase tracking-wider text-[10px] text-neutral-400'>
            <a href="#home" className='hover:text-orange-500 transition'>Home</a>
            <a href="#about" className='hover:text-orange-500 transition'>About</a>
            <a href="#packages" className='hover:text-orange-500 transition'>Packages</a>
            <a href="#trainers" className='hover:text-orange-500 transition'>Trainers</a>
            <a href="#gallery" className='hover:text-orange-500 transition'>Gallery</a>
            <a href="#contact" className='hover:text-orange-500 transition'>Contact</a>
          </div>

          <div className='flex gap-5 text-neutral-400'>
            {/* Custom SVG Social Icons */}
            <a href="#" aria-label="Instagram" className='hover:text-orange-500 transition'><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
            <a href="#" aria-label="Facebook" className='hover:text-orange-500 transition'><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg></a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;