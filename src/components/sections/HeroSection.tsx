import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-4rem)] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Metalworking Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-40"
        data-ai-hint="metalworking factory"
        priority
      />
      <div className="relative z-10 p-4 md:p-6 bg-black/50 rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Precision Metal</span>
          <span className="block text-accent">Crafted for You</span>
        </h1>
        <p className="mt-6 max-w-md mx-auto text-lg text-neutral-200 sm:text-xl md:mt-8 md:max-w-2xl">
          Innovative metalwork solutions, from custom fabrication to intricate designs. ForgeNext brings your vision to life with unparalleled quality and expertise.
        </p>
        <div className="mt-10 flex justify-center space-x-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#contact">Request a Quote</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            <Link href="#projects">View Our Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
