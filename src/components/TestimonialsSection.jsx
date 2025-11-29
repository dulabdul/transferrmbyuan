import SectionTitle from './SectionTitle';

const TESTIMONIALS = [
  {
    name: 'Budi Santoso',
    role: 'Importir Barang China',
    text: 'Awalnya ragu, tapi setelah coba sekali ternyata prosesnya cepat banget. Rate-nya juga lebih bagus dibanding tempat lain. Sangat membantu bisnis impor saya.',
  },
  {
    name: 'Siti Aminah',
    role: 'Mahasiswa di Beijing',
    text: 'Orang tua saya selalu kirim uang lewat sini untuk bayar asrama. Adminnya ramah dan selalu update status transfernya. Terpercaya!',
  },
  {
    name: 'Hendra Wijaya',
    role: 'Pengguna Taobao',
    text: 'Top up Alipay nggak pernah semudah ini. 10 menit langsung masuk saldo. Recommended buat yang suka belanja di marketplace China.',
  },
];

const TestimonialsSection = () => (
  <section className='py-20 bg-slate-50'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <SectionTitle
        title='Apa Kata Mereka?'
        subtitle='Testimoni asli dari pelanggan yang telah menggunakan jasa kami.'
      />

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
        {TESTIMONIALS.map((testi, index) => (
          <div
            key={index}
            className='bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col relative'>
            <div className='text-emerald-500 mb-4'>
              <svg
                width='40'
                height='40'
                viewBox='0 0 24 24'
                fill='currentColor'>
                <path d='M14.017 21L14.017 18C14.017 16.0547 14.3314 14.8967 14.9602 14.526C16.8483 13.4137 18.0673 12.1818 18.6172 10.8303C19.1671 9.47881 18.8923 8.16335 17.7925 6.88379C16.2996 5.1462 13.9796 4.70034 10.8322 5.54637L10.8322 8.54637C12.7963 8.01764 14.2494 8.29244 15.1914 9.3708C15.8986 10.1804 16.0949 10.99 15.7801 11.7997C15.5444 12.4069 15.0335 12.7105 14.2475 12.7105C13.4614 12.7105 12.8718 12.9129 12.4786 13.3177C12.0854 13.7225 11.8889 14.4312 11.8889 15.4439L11.8889 21L14.017 21ZM5.16016 21L5.16016 18C5.16016 16.0547 5.47457 14.8967 6.10339 14.526C7.99153 13.4137 9.21048 12.1818 9.76037 10.8303C10.3103 9.47881 10.0354 8.16335 8.93566 6.88379C7.44275 5.1462 5.12275 4.70034 1.97534 5.54637L1.97534 8.54637C3.93946 8.01764 5.39257 8.29244 6.33459 9.3708C7.04177 10.1804 7.23806 10.99 6.92322 11.7997C6.6875 12.4069 6.1766 12.7105 5.39063 12.7105C4.60465 12.7105 4.01499 12.9129 3.62176 13.3177C3.22854 13.7225 3.03192 14.4312 3.03192 15.4439L3.03192 21L5.16016 21Z' />
              </svg>
            </div>
            <p className='text-slate-600 mb-6 italic text-sm md:text-base'>
              {testi.text}
            </p>
            <div className='mt-auto flex items-center'>
              <div className='w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold mr-3'>
                {testi.name.charAt(0)}
              </div>
              <div>
                <h5 className='font-bold text-slate-900 text-sm'>
                  {testi.name}
                </h5>
                <p className='text-xs text-slate-500'>{testi.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
