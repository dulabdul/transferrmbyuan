import SectionTitle from './SectionTitle';

const {
  ShieldCheck,
  TrendingUp,
  Zap,
  MessageCircle,
  Eye,
  Layers,
} = require('lucide-react');

const FEATURES = [
  {
    title: 'Aman & Terpercaya',
    desc: 'Transaksi diproses secara profesional dengan sistem verifikasi ketat. Bukti transaksi resmi selalu diberikan.',
    icon: <ShieldCheck className='w-8 h-8 text-white' />,
    bg: 'bg-blue-600',
  },
  {
    title: 'Kurs Kompetitif',
    desc: 'Kami menyediakan kurs bersaing (RMB to IDR) agar Anda mendapatkan nilai tukar terbaik.',
    icon: <TrendingUp className='w-8 h-8 text-white' />,
    bg: 'bg-emerald-500',
  },
  {
    title: 'Proses Cepat',
    desc: 'Sebagian besar transaksi diproses dalam hitungan menit hingga 1 jam, tergantung jenis layanan.',
    icon: <Zap className='w-8 h-8 text-white' />,
    bg: 'bg-amber-500',
  },
  {
    title: 'Support Responsif',
    desc: 'Tim kami siap membantu melalui WhatsApp dan chat support untuk pengalaman transaksi nyaman.',
    icon: <MessageCircle className='w-8 h-8 text-white' />,
    bg: 'bg-indigo-500',
  },
  {
    title: 'Transparan',
    desc: 'Semua biaya dan kurs diinformasikan di awal, tanpa biaya tersembunyi di belakang.',
    icon: <Eye className='w-8 h-8 text-white' />,
    bg: 'bg-teal-500',
  },
  {
    title: 'Serbaguna',
    desc: 'Cocok untuk kebutuhan bisnis, belanja online, top up dompet digital, hingga pendidikan.',
    icon: <Layers className='w-8 h-8 text-white' />,
    bg: 'bg-rose-500',
  },
];

const FeaturesSection = () => (
  <section
    id='features'
    className='py-20 bg-blue-900 text-white relative overflow-hidden'>
    {/* Background Pattern */}
    <div
      className='absolute inset-0 opacity-10'
      style={{
        backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }}></div>

    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
      <SectionTitle
        title='Mengapa Memilih Kami?'
        subtitle='Keunggulan layanan yang membedakan kami dari kompetitor lain.'
        light={true}
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
        {FEATURES.map((item, index) => (
          <div
            key={index}
            className='bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors'>
            <div
              className={`${item.bg} w-14 h-14 rounded-lg flex items-center justify-center mb-6 shadow-lg`}>
              {item.icon}
            </div>
            <h3 className='text-xl font-bold mb-3'>{item.title}</h3>
            <p className='text-blue-100 text-sm leading-relaxed opacity-90'>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
