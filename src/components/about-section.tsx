import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const AboutSection = () => {
    const aboutImageData = PlaceHolderImages.find(img => img.id === 'about-image');
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold font-headline text-accent">About TapServe</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Welcome to our restaurant, where culinary excellence meets modern convenience. At TapServe, we're passionate about serving delicious, high-quality food made from the freshest ingredients.
          </p>
          <p className="mt-4 text-foreground/80">
            Our digital menu is designed to provide you with a seamless and interactive dining experience. Browse our offerings, discover new flavors, and enjoy the ease of ordering right from your device. Our mission is to blend tradition with technology, ensuring every meal is memorable.
          </p>
        </div>
        <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-2xl order-1 md:order-2">
          <Image 
            src={aboutImageData?.imageUrl || "https://picsum.photos/seed/about/800/600"}
            alt={aboutImageData?.description || "Our restaurant kitchen"}
            fill
            className="object-cover"
            data-ai-hint={aboutImageData?.imageHint || "restaurant kitchen"}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
