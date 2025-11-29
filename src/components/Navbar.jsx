'use client';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { useState } from 'react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Tentang Kami', href: '#about' },
  { name: 'Layanan', href: '#services' },
  { name: 'Keunggulan', href: '#features' },
  { name: 'Kontak', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleWhatsAppClick = () => {
    const phoneNumber = '6285787975953';
    const message = 'Halo Admin TransferRMBYUAN, saya ingin transfer uang';
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };
  return (
    <nav className='fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <div className='flex-shrink-0 flex items-center gap-2 cursor-pointer'>
            <div className='w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl'>
              R
            </div>
            <span className='font-bold text-2xl text-slate-800 tracking-tight'>
              Transfer<span className='text-emerald-500'>RMB</span>
              <span className='text-blue-600'>YUAN</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-8 items-center'>
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='text-slate-600 hover:text-blue-700 font-medium transition-colors text-sm uppercase tracking-wide'>
                {link.name}
              </a>
            ))}
            <Button
              variant='primary'
              onClick={handleWhatsAppClick}
              className='px-5 py-2 text-sm rounded-full'>
              Kirim Uang
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-slate-600 focus:outline-none p-2'>
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className='md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg'>
          <div className='px-4 pt-2 pb-6 space-y-2'>
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            ))}
            <div className='pt-4'>
              <Button
                variant='primary'
                className='w-full justify-center'>
                Kirim Uang Sekarang
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
