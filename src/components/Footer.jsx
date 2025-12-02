const { MessageCircle, Instagram } = require('lucide-react');

const Footer = () => {
  const instagramLink = 'https://www.instagram.com/jasatransfer_rmbyuan';
  return (
    <footer className='bg-slate-900 text-slate-300 py-12 border-t border-slate-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid mx-auto justify-center grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
          <div className='col-span-1 md:col-span-1'>
            <span className='font-bold text-2xl text-white tracking-tight'>
              Transfer<span className='text-emerald-500'>RMB</span>
              <span className='text-blue-600'>YUAN</span>
            </span>
            <p className='text-sm text-slate-400'>
              Jasa transfer uang RMB Yuan terpercaya sejak 2020. Solusi
              pembayaran China paling mudah dan aman.
            </p>
          </div>
          {/* --- BAGIAN SOCIAL MEDIA --- */}
          <div className='flex space-x-4'>
            <a
              href={instagramLink}
              target='_blank'
              rel='noopener noreferrer'
              className='w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-purple-500 hover:to-blue-500 text-slate-400 hover:text-white transition-all duration-300'
              aria-label='Follow us on Instagram'>
              <Instagram className='w-8 h-8' />
            </a>
          </div>

          {/* KOLOM 2: Layanan */}
          <div>
            <h4 className='text-white font-bold mb-4 uppercase text-sm tracking-wider'>
              Layanan
            </h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#'
                  className='hover:text-emerald-400 transition-colors'>
                  WeChat Pay
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-emerald-400 transition-colors'>
                  Alipay Top Up
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-emerald-400 transition-colors'>
                  Transfer Bank
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-white font-bold mb-4 uppercase text-sm tracking-wider'>
              Kontak
            </h4>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-center'>
                <MessageCircle className='w-4 h-4 mr-2' /> +62 857-879-75953
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500'>
          <p>
            &copy; {new Date().getFullYear()} TransferRMB. All rights reserved.
          </p>
          <p className='mt-2 md:mt-0'>
            Dibuat dengan ❤️ untuk kemudahan transaksi Anda.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
