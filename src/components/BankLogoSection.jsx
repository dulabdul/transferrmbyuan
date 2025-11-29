'use client';

const BankLogosSection = () => {
  // Mocking bank logos with text placeholders for simulation
  const banks = [
    'Bank of China',
    'ICBC',
    'China Construction Bank',
    'WeChat Pay',
    'Alipay',
    'Agricultural Bank',
    'China Merchants Bank',
  ];

  return (
    <section className='py-12 bg-white border-y border-slate-100 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 mb-6 text-center'>
        <p className='text-sm font-semibold text-slate-400 uppercase tracking-widest'>
          Mendukung Transfer Ke
        </p>
      </div>
      <div className='relative flex overflow-x-hidden group'>
        <div className='animate-marquee whitespace-nowrap flex space-x-12 px-4'>
          {/* Double map for seamless loop effect */}
          {[...banks, ...banks, ...banks].map((bank, idx) => (
            <span
              key={idx}
              className='text-2xl font-bold text-slate-300 hover:text-blue-600 transition-colors cursor-default select-none'>
              {bank}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default BankLogosSection;
