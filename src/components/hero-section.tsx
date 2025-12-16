import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const HeroSection = () => {
  const heroImageData = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <section className="relative h-[60vh] text-white">
      <Image
        src={heroImageData?.imageUrl || "https://picsum.photos/seed/hero/1920/1080"}
        alt={heroImageData?.description || "Delicious food on a table"}
        fill
        className="object-cover"
        data-ai-hint={heroImageData?.imageHint || "food festival"}
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-headline drop-shadow-lg">Ratna Food Fest a आहा! १० स्टार खाजा घर</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">Your favorite dishes, just a tap away. Fresh, fast, and full of flavor.</p>
        <Button size="lg" className="mt-8 text-lg py-6 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
          <a href="#menu">Explore Menu</a>
        </Button>
      </div>
    </section>
  );
};
export default HeroSection;
