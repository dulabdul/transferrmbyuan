import React from 'react';

const StructuredData = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService', // Tipe bisnis
    name: 'TransferRMB',
    image: 'https://transferrmbyuan.com/logo.jpg',
    description:
      'Layanan jasa transfer uang RMB Yuan ke China, Top Up Alipay dan WeChat Pay terpercaya.',
    url: 'https://transferrmbyuan.com',
    telephone: '+6285787975953', // Sesuaikan
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jalan Jendral Sudirman', // Sesuaikan
      addressLocality: 'Jakarta Selatan',
      addressRegion: 'DKI Jakarta',
      postalCode: '12190',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.2297465, // Sesuaikan koordinat (bisa ambil dari Google Maps)
      longitude: 106.829518,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '22:00',
    },
    priceRange: '$$', // Indikator harga kompetitif
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    currenciesAccepted: 'IDR, CNY',
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default StructuredData;
