import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import MenuSection from '@/components/menu-section';
import OrderCart from '@/components/order-cart';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="animate-in fade-in duration-500">
          <HeroSection />
        </div>
        <div id="menu" className="animate-in fade-in duration-700 delay-200">
          <MenuSection />
        </div>
        <div className="animate-in fade-in duration-700 delay-300">
          <AboutSection />
        </div>
        <div className="animate-in fade-in duration-700 delay-400">
          <ContactSection />
        </div>
      </main>
      <Footer />
      <OrderCart />
    </div>
  );
}
