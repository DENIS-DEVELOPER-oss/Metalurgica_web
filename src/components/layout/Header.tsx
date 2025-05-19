import Link from 'next/link';
import { MountainIcon, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">ForgeNext</span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link href="#products" className="transition-colors hover:text-accent">
            Products & Services
          </Link>
          <Link href="#projects" className="transition-colors hover:text-accent">
            Projects
          </Link>
          <Link href="#contact" className="transition-colors hover:text-accent">
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium p-6">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <MountainIcon className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">ForgeNext</span>
              </Link>
              <Link href="#products" className="transition-colors hover:text-accent">
                Products & Services
              </Link>
              <Link href="#projects" className="transition-colors hover:text-accent">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-accent">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
