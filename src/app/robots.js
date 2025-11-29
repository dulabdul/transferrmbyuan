export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Contoh jika ada folder admin
    },
    sitemap: 'https://transferrmbyuan.com/sitemap.xml',
  };
}
