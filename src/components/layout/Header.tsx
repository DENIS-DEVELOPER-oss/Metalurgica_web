import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

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
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-card">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2 mr-4">
          <Image 
            src="https://placehold.co/50x50.png" 
            alt="Logo EPIM" 
            width={50} 
            height={50} 
            data-ai-hint="university logo" 
            className="rounded-sm"
          />
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground leading-tight">Escuela Profesional de</span>
            <span className="text-lg font-semibold text-primary leading-tight">Ingeniería Metalúrgica</span>
          </div>
        </Link>
        
        <nav className="hidden items-center space-x-1 text-xs font-normal md:flex lg:space-x-1.5 xl:space-x-2">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="transition-colors hover:text-accent px-1.5 py-1 lg:px-2 whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
            <nav className="grid gap-4 text-base font-medium p-6">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Image 
                  src="https://placehold.co/40x40.png" 
                  alt="Logo EPIM" 
                  width={40} 
                  height={40} 
                  data-ai-hint="university logo"
                  className="rounded-sm"
                />
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground leading-tight">Escuela Profesional de</span>
                  <span className="text-md font-semibold text-primary leading-tight">Ingeniería Metalúrgica</span>
                </div>
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-accent text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
