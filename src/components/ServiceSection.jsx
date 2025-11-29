'use client';
import SectionTitle from './SectionTitle';

const {
  Smartphone,
  Layers,
  Globe,
  Building2,
  Wallet,
  MessageCircle,
  ArrowRight,
} = require('lucide-react');

const SERVICES = [
  {
    title: 'Transfer ke WeChat Pay',
    desc: 'Kirim saldo langsung ke akun WeChat Pay penerima di China. Cepat dan instan sampai.',
    icon: <MessageCircle className='w-10 h-10 text-emerald-500' />,
    image: 'wechatpay.jpg',
  },
  {
    title: 'Top Up Alipay',
    desc: 'Isi ulang saldo Alipay untuk kebutuhan belanja di Taobao, 1688, atau pembayaran supplier.',
    icon: <Wallet className='w-10 h-10 text-blue-500' />,
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=400&h=250',
  },
  {
    title: 'Transfer Bank China',
    desc: 'Kirim uang ke rekening Bank of China, ICBC, ABC, dan bank besar lainnya dengan rate terbaik.',
    icon: <Building2 className='w-10 h-10 text-indigo-500' />,
    image:
      'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=400&h=250',
  },
  {
    title: 'Pembayaran Supplier',
    desc: 'Solusi pembayaran bisnis untuk importir. Bukti transfer resmi untuk verifikasi supplier.',
    icon: <Globe className='w-10 h-10 text-cyan-500' />,
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400&h=250',
  },
  {
    title: 'Pembayaran Pendidikan',
    desc: 'Bayar uang kuliah atau asrama di universitas China dengan prosedur yang aman dan jelas.',
    icon: <Layers className='w-10 h-10 text-purple-500' />,
    image: 'pendidikan.jpg',
  },
  {
    title: 'Top Up Game China',
    desc: 'Isi ulang kredit game server China dengan proses instan tanpa ribet.',
    icon: <Smartphone className='w-10 h-10 text-pink-500' />,
    image:
      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=400&h=250',
  },
];
const ServicesSection = () => {
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
      id='services'
      className='py-20 bg-slate-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionTitle
          title='Layanan Kami'
          subtitle='Solusi lengkap untuk segala kebutuhan transaksi keuangan Anda ke China.'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className='group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col'>
              <div className='h-48 overflow-hidden relative'>
                <div className='absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10'></div>
                <img
                  src={service.image}
                  alt={service.title}
                  loading='lazy'
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute bottom-[-20px] right-6 z-20 bg-white p-3 rounded-xl shadow-md'>
                  {service.icon}
                </div>
              </div>
              <div className='p-6 pt-8 flex-1 flex flex-col'>
                <h3 className='text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors'>
                  {service.title}
                </h3>
                <p className='text-slate-600 mb-6 flex-1 text-sm leading-relaxed'>
                  {service.desc}
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className='flex items-center cursor-pointer text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors mt-auto'>
                  Pesan Layanan <ArrowRight className='w-4 h-4 ml-2' />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
