const SectionTitle = ({ title, subtitle, align = 'center', light = false }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2
      className={`text-3xl md:text-4xl font-bold mb-4 ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
      {title}
    </h2>
    {subtitle && (
      <p
        className={`text-lg md:text-xl max-w-2xl mx-auto ${
          light ? 'text-slate-200' : 'text-slate-600'
        }`}>
        {subtitle}
      </p>
    )}
    <div
      className={`mt-4 h-1.5 w-24 bg-emerald-500 rounded-full ${
        align === 'center' ? 'mx-auto' : ''
      }`}></div>
  </div>
);

export default SectionTitle;
