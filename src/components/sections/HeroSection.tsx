import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-4rem)] flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Paisaje montañoso al atardecer"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-40"
        data-ai-hint="mountain landscape"
        priority
      />
      <div className="relative z-10 p-4 md:p-6 bg-black/50 rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Diseñando aleaciones
        </h1>
        <p className="mt-6 max-w-md mx-auto text-lg text-neutral-200 sm:text-xl md:mt-8 md:max-w-2xl">
          Formando a los futuros líderes en la ciencia, tecnología e innovación de materiales metálicos y sus aplicaciones industriales.
        </p>
        <div className="mt-10 flex justify-center space-x-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#graduados">NUESTROS GRADUADOS</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#contact">CONTÁCTANOS</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
