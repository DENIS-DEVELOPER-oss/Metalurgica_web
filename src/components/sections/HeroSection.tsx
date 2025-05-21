'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const frases = [
  "Formando los ingenieros del mañana",
  "Forjando el futuro con innovación metalúrgica",
  "Transformando minerales en soluciones avanzadas",
  "Liderando la revolución de los materiales",
  "Diseñando aleaciones para un mundo sostenible",
  "Impulsando la industria con ciencia y creatividad"
];

export default function HeroSection() {
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const phrase = frases[phraseIndex];

    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentPhrase(phrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prevIndex) => (prevIndex + 1) % frases.length);
        }
      } else {
        if (charIndex < phrase.length) {
          setCurrentPhrase(phrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 3000);
        }
      }
    };

    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section className="relative w-full md:h-[700px] h-[50vh] flex items-center justify-center p-4 overflow-hidden">
      <Image
        src="/images/fondo1.jpg" // Placeholder for images/fondo1.jpg
        alt="Fondo Hero Metalurgia"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0" // Removed opacity-40 from previous version to match new HTML
        data-ai-hint="mining geology abstract" // Updated hint
        priority
      />
      <div className="relative z-10 text-center bg-black bg-opacity-50 p-6 sm:p-8 rounded-lg max-w-xl w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 h-20 sm:h-24 font-serif">
          <span>{currentPhrase}</span>
          <span className="animate-pulse">|</span>
        </h1>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded text-sm sm:text-base"
          >
            <Link href="https://transparencia.unap.edu.pe/web/relacion-de-grados-y-titulos-2024/" target="_blank" rel="noopener noreferrer">
              NUESTROS GRADUADOS
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="text-gray-300 hover:text-white transition-colors border-gray-300 hover:border-white rounded px-6 py-2 text-sm sm:text-base bg-transparent hover:bg-transparent"
          >
            <Link href="/contactanos#contact-section"> {/* Updated to internal link if #contact-section is in contactanos page */}
              CONTÁCTANOS
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
