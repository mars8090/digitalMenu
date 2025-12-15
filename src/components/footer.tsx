import { UtensilsCrossed } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="py-6 px-4 md:px-8 border-t border-border/40 bg-card">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <div className="flex items-center gap-2">
            <UtensilsCrossed className="h-5 w-5 text-accent" />
            <span className="font-bold text-lg font-headline">TapServe</span>
        </div>
        <p className="text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} TapServe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
