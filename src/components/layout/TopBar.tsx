import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TopBar() {
  return (
    <div className="bg-top-bar text-top-bar-foreground py-4 px-2 sm:px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-0">
          <a href="tel:+51950942064" className="flex items-center hover:text-top-bar-hover transition duration-300">
            <Phone className="h-4 w-4 mr-1" />
            <span className="hover:underline">+51 950 942 064</span>
          </a>
          <a href="mailto:EChavez@unap.edu.pe" className="flex items-center hover:text-top-bar-hover transition duration-300">
            <Mail className="h-4 w-4 mr-1" />
            <span className="hover:underline">EChavez@unap.edu.pe</span>
          </a>
        </div>
        <Button
          className="bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold hover:bg-accent/90 transition duration-300 shadow-md text-xs sm:text-sm w-full sm:w-auto"
          asChild
        >
          <Link href="https://geologicaunap.com" target="_blank" rel="noopener noreferrer">
            Cambiar a Ingeniería Geológica
          </Link>
        </Button>
      </div>
    </div>
  );
}
