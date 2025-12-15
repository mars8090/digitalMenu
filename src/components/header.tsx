import { UtensilsCrossed } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-4 px-4 md:px-8 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container mx-auto flex items-center gap-3">
        <UtensilsCrossed className="h-7 w-7 text-accent" />
        <h1 className="text-2xl font-bold font-headline text-foreground">TapServe</h1>
      </div>
    </header>
  );
};
export default Header;
