'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: "/nuestra-informacion", label: "Nuestra Información" },
  { href: "/escuela-profesional", label: "Escuela Profesional" },
  { href: "/oferta-educativa", label: "Oferta Educativa" },
  { href: "/investigacion-servicios", label: "Investigación y Servicios" },
  { href: "/responsabilidad-social", label: "Responsabilidad Social" },
  { href: "/gestion-ambiental", label: "Gestión Ambiental" },
  { href: "/acreditacion-icacit", label: "Acreditación ICACIT" },
  { href: "/grados-titulos", label: "Grados y Titulos" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-card shadow-md transition-all duration-300 w-full z-50 ${isHeaderFixed ? 'fixed top-0 left-0 right-0' : 'sticky top-0'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image 
              src="https://placehold.co/100x64.png?text=Logo"
              alt="Logo EPIM" 
              width={100}
              height={64}
              className="h-16 w-auto mr-4"
              data-ai-hint="university logo"
            />
            <div>
              <p className="text-sm text-header-text-muted">Escuela Profesional de</p>
              <h1 className="text-xl font-bold text-header-text-bold font-serif tracking-wide">Ingeniería Metalúrgica</h1>
            </div>
          </Link>
          
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú de navegación</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-card p-6">
              <SheetHeader className="mb-4 pb-4 border-b border-border">
                <SheetTitle className="text-lg font-semibold text-primary">Navegación Principal</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-nav-text hover:text-nav-hover-text transition duration-300 text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <nav className="hidden lg:flex space-x-5">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-nav-text hover:text-nav-hover-text transition duration-300 hover-underline-animation text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
