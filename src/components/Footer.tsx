import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl font-bold gradient-text">
            Kasthuri Eswar
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> © {new Date().getFullYear()}
          </p>
          <p className="text-sm text-muted-foreground">
            AI & Prompt Engineering Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
