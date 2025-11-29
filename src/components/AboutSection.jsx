'use client';
import Image from 'next/image';
import Button from './Button';

const { CheckCircle2 } = require('lucide-react');

const AboutSection = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '6285787975953';
    const message = 'Halo Admin TransferRMBYUAN, saya ingin transfer uang';
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };
  return (
    <section
      id='about'
      className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          {/* Image Side */}
          <div className='relative'>
            <div className='absolute inset-0 bg-blue-600 rounded-3xl transform translate-x-3 translate-y-3'></div>
            {/* Container Image */}
            <div className='relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl'>
              <Image
                src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800&h=600'
                alt='Tim Transfer RMB Profesional'
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
                className='object-cover'
              />
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h4 className='text-emerald-500 font-bold uppercase tracking-wider mb-2'>
              Tentang Kami
            </h4>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-6'>
              Partner Terpercaya untuk Kebutuhan Keuangan Anda di China
            </h2>
            <p className='text-slate-600 mb-6 leading-relaxed'>
              Kami adalah penyedia layanan remitansi independen yang berfokus
              pada kecepatan dan keamanan transaksi Rupiah (IDR) ke Renminbi
              (RMB). Sejak 2020, kami telah membantu ribuan pengusaha, pelajar,
              dan ekspatriat dalam mengelola pembayaran mereka ke China.
            </p>
            <ul className='space-y-4 mb-8'>
              {[
                'Verifikasi identitas ketat untuk keamanan',
                'Jaringan luas ke bank lokal China',
                'Legalitas dan transparansi operasional',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className='flex items-center text-slate-700'>
                  <CheckCircle2 className='w-5 h-5 text-emerald-500 mr-3' />
                  {item}
                </li>
              ))}
            </ul>
            <Button
              variant='ghost'
              className='border border-slate-200'
              onClick={handleWhatsAppClick}>
              Konsultasi via WA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
