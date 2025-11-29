'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import Button from './Button';

const CTASection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '6285787975953';
    const message = 'Halo Admin Transfer RMB YUAN, saya ingin transfer uang';
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <section
      id='contact'
      className='py-20 px-4'>
      <div className='max-w-5xl mx-auto bg-gradient-to-r from-blue-700 to-emerald-600 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute bottom-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3'></div>

        <div className='relative z-10'>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
            Siap Transfer RMB Yuan dengan Aman & Cepat?
          </h2>
          <p className='text-blue-50 text-lg md:text-xl mb-10 max-w-2xl mx-auto'>
            Percayakan transaksi Anda pada layanan yang profesional dan
            berpengalaman. Kami siap melayani 24/7.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              variant='secondary'
              className='shadow-lg'
              onClick={handleWhatsAppClick}>
              Mulai Transaksi Sekarang
            </Button>
            <Button
              variant='outline'
              className='border-white text-white hover:bg-white hover:text-blue-700'
              onClick={handleWhatsAppClick}>
              <MessageCircle className='w-5 h-5 mr-2' />
              Chat Admin 24/7
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
