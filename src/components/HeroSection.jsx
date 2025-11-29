'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from './Button';

const HeroSection = () => {
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
      id='home'
      className='relative pt-20 md:pt-0 min-h-screen flex items-center bg-slate-50 overflow-hidden'>
      <div className='absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50'></div>
      <div className='absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-50'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 md:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Text Content */}
          <div className='order-2 lg:order-1 space-y-8 animate-fade-in-up'>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-2 border border-blue-100'>
              <CheckCircle2 className='w-4 h-4 mr-2 text-emerald-500' />
              #1 Jasa Transfer RMB YUAN Terpercaya
            </div>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight'>
              Transfer RMB Yuan <br className='hidden lg:block' />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-emerald-500'>
                Cepat, Aman & Terpercaya
              </span>
            </h1>
            <p className='text-lg text-slate-600 max-w-xl leading-relaxed'>
              Layanan transfer RMB Yuan ke berbagai bank dan platform pembayaran
              China — mulai dari WeChat Pay, Alipay, hingga Bank China. Proses
              mudah, kurs kompetitif, dan dukungan pelanggan responsif.
            </p>

            {/* BUTTONS DENGAN KLIK WA */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                variant='primary'
                className='shadow-xl shadow-emerald-500/20'
                onClick={handleWhatsAppClick}>
                Kirim Uang Sekarang <ArrowRight className='ml-2 w-5 h-5' />
              </Button>
              <Button
                variant='ghost'
                className='border border-slate-200'
                onClick={handleWhatsAppClick}>
                Konsultasi via WA
              </Button>
            </div>

            <div className='pt-8 border-t border-slate-200 flex gap-8'>
              <div>
                <p className='font-bold text-2xl text-slate-900'>50K+</p>
                <p className='text-sm text-slate-500'>Transaksi Sukses</p>
              </div>
              <div>
                <p className='font-bold text-2xl text-slate-900'>1 Jam</p>
                <p className='text-sm text-slate-500'>Rata-rata Waktu</p>
              </div>
              <div>
                <p className='font-bold text-2xl text-slate-900'>100%</p>
                <p className='text-sm text-slate-500'>Jaminan Aman</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className='order-1 lg:order-2 flex justify-center relative'>
            <div className='relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500'>
              <Image
                src='https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=800&h=600'
                alt='Transaksi RMB Yuan Aman'
                fill
                priority
                sizes='(max-width: 768px) 100vw, 50vw'
                className='object-cover'
              />
              <div className='absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 z-10'>
                <div className='flex items-center gap-4'>
                  <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600'>
                    <CheckCircle2 className='w-6 h-6' />
                  </div>
                  <div>
                    <p className='text-sm text-slate-500'>Status Transaksi</p>
                    <p className='font-bold text-slate-800'>
                      Berhasil Terkirim ¥ 10,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
