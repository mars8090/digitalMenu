import { Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-headline text-center text-accent mb-12">Contact & Location</h2>
        <div className="grid md:grid-cols-1 gap-8 text-center max-w-2xl mx-auto">
          
          <Card className="bg-card/50">
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-3 rounded-full mb-4 w-fit">
                <MapPin className="h-8 w-8 text-accent"/>
              </div>
              <CardTitle className="font-headline">Our Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mt-2">Ratna Rajya Laxmi Secondary School.</p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};
export default ContactSection;
