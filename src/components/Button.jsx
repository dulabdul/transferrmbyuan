const Button = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyle =
    'inline-flex items-center cursor-pointer justify-center px-6 py-3 text-base font-semibold transition-all duration-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary:
      'bg-emerald-500 hover:bg-emerald-600 text-white focus:ring-emerald-500 shadow-emerald-500/30',
    secondary: 'bg-white text-blue-900 hover:bg-blue-50 focus:ring-white',
    outline: 'border-2 border-white text-white hover:bg-white/10',
    ghost:
      'bg-transparent text-slate-600 hover:text-emerald-600 hover:bg-slate-50',
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
