import { Phone, MapPin, Wallet, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-headline text-center text-accent mb-12">Contact & Payments</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          
          <Card className="bg-card/50">
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-3 rounded-full mb-4 w-fit">
                <MapPin className="h-8 w-8 text-accent"/>
              </div>
              <CardTitle className="font-headline">Our Address</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mt-2">123 Culinary Lane, Foodie City, 110011</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50">
            <CardHeader>
               <div className="mx-auto bg-primary/10 p-3 rounded-full mb-4 w-fit">
                <Phone className="h-8 w-8 text-accent"/>
               </div>
              <CardTitle className="font-headline">For Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mt-2">Call us to place your order directly.</p>
              <Button asChild className="mt-4">
                <a href="tel:9867938198">
                  <Phone className="mr-2 h-4 w-4"/>
                  Call 9867938198
                </a>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-card/50">
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-3 rounded-full mb-4 w-fit">
                <Wallet className="h-8 w-8 text-accent"/>
              </div>
              <CardTitle className="font-headline">Payment Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mt-2">We accept the following payment methods:</p>
              <div className="flex justify-center items-center gap-6 mt-4">
                <div className="flex flex-col items-center gap-1">
                  <Smartphone className="h-8 w-8 text-foreground/80"/>
                  <span className="text-sm text-foreground/80">Phone Payment</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Wallet className="h-8 w-8 text-foreground/80"/>
                  <span className="text-sm text-foreground/80">Cash</span>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};
export default ContactSection;
