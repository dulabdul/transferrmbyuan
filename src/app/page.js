import AboutSection from '@/components/AboutSection';
import BankLogosSection from '@/components/BankLogoSection';
import CTASection from '@/components/CTASection';
import FeaturesSection from '@/components/FeatureSection';
import FloatingInstagram from '@/components/FloatingInstragam';
import FloatingWhatsApp from '@/components/FloatingWhatsapp';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServiceSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <BankLogosSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
      <FloatingInstagram />
    </main>
  );
}
