import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto flex h-10 items-center justify-between px-4 md:px-6 text-xs">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Phone className="h-4 w-4" />
            <a href="tel:+51950942064" className="hover:underline">+51 950 942 064</a>
          </div>
          <div className="flex items-center space-x-1">
            <Mail className="h-4 w-4" />
            <a href="mailto:EChavez@unap.edu.pe" className="hover:underline">EChavez@unap.edu.pe</a>
          </div>
        </div>
        <Button 
          size="sm" 
          className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-md h-7 px-3 text-xs"
          asChild
        >
          <Link href="#"> {/* TODO: Update this link as needed */}
            Cambiar a Ingenieria Geológica
          </Link>
        </Button>
      </div>
    </div>
  );
}
