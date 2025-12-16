import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const AboutSection = () => {
    const aboutImageData = PlaceHolderImages.find(img => img.id === 'about-image');
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl font-bold font-headline text-accent">About आहा! १० स्टार खाजा घर</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Welcome to आहा! १० स्टार खाजा घर Food Stall 🌸🍽️
          </p>
          <p className="mt-4 text-foreground/80">
            Warm greetings from the Class 10 Engineering students of Shree Ratna Rajya Laxmi Secondary School. On the joyful occasion of our Annual Anniversary, we proudly present our Digital Food Menu.
          </p>
          <p className="mt-4 text-foreground/80">
            Our stall offers a delightful taste of traditional Nepali-style foods, prepared with care, cleanliness, and love. This effort reflects our creativity, teamwork, and passion for learning beyond the classroom.
          </p>
          <p className="mt-4 text-foreground/80">
            Thank you for visiting our stall. Enjoy the flavors, celebrate together! ✨
          </p>
        </div>
        <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-2xl order-1 md:order-2">
          <Image 
            src={aboutImageData?.imageUrl || "https://picsum.photos/seed/about/800/600"}
            alt={aboutImageData?.description || "Students working together"}
            fill
            className="object-cover"
            data-ai-hint={aboutImageData?.imageHint || "students teamwork"}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
