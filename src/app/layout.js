import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  // ... (bagian title, description, keywords tetap sama)
  title: 'Jasa Transfer RMB Yuan Terpercaya - Cepat & Aman',
  description:
    'Layanan transfer RMB ke WeChat, Alipay, dan Bank China. Kurs kompetitif dan proses cepat.',
  // --- BAGIAN INI YANG DIUBAH ---
  icons: {
    // Ganti '/favicon.ico' dengan '/nama-file-anda.png'
    // Pastikan diawali tanda slash '/' yang artinya folder public
    icon: '/icon.ico',

    // (Opsional) Icon untuk shortcut di desktop/android
    shortcut: '/icon.ico',

    // (Opsional) Icon khusus saat website di-bookmark di iPhone/iPad
    apple: '/icon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
