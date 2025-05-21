
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const newsItemsData = [
  {
    title: "Avances en fabricación de aleaciones de alta entropía por impresión 3D",
    category: "Procesamiento de Materiales",
    description: "Estudio sobre desarrollos recientes en la fabricación aditiva de aleaciones de alta entropía, explorando sus propiedades y aplicaciones en industrias aeroespacial y energética.",
    imageUrl: "https://placehold.co/600x400.png?text=Aleaciones+3D",
    imageHint: "3d printing metal",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0921509323008146"
  },
  {
    title: "Superconductividad a temperatura ambiente en nuevos hidruros",
    category: "Ciencia de Materiales",
    description: "Investigadores descubren superconductividad a temperatura ambiente en hidruros de tierras raras, abriendo posibilidades para la transmisión de energía sin pérdidas.",
    imageUrl: "https://placehold.co/600x400.png?text=Superconductividad",
    imageHint: "abstract science materials",
    link: "https://www.nature.com/articles/s41586-023-06004-9"
  },
  {
    title: "Nuevas técnicas para mejorar propiedades de aleaciones de titanio",
    category: "Metalurgia Avanzada",
    description: "Estudio presenta técnicas innovadoras de procesamiento termomecánico para mejorar la resistencia y ductilidad de aleaciones de titanio, con aplicaciones en industrias aeroespacial y biomédica.",
    imageUrl: "https://placehold.co/600x400.png?text=Titanio",
    imageHint: "titanium alloy medical",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0921509323007700"
  },
  {
    title: "Reciclaje eficiente de metales raros de residuos electrónicos",
    category: "Sostenibilidad en Metalurgia",
    description: "Nuevo proceso hidrometalúrgico para recuperar metales raros de residuos electrónicos, contribuyendo a la economía circular y la conservación de recursos.",
    imageUrl: "https://placehold.co/600x400.png?text=Reciclaje+Metales",
    imageHint: "recycling electronics",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0921509323006755"
  },
  {
    title: "Nanopartículas metálicas para catálisis avanzada",
    category: "Nanotecnología",
    description: "Equipo internacional diseña nanopartículas metálicas con estructura controlada que muestran actividad catalítica excepcional, prometiendo avances en la industria química y producción de energía limpia.",
    imageUrl: "https://placehold.co/600x400.png?text=Nanoparticulas",
    imageHint: "nanotechnology abstract",
    link: "https://www.nature.com/articles/s41563-023-01508-1"
  },
  {
    title: "Recubrimientos metálicos avanzados contra la corrosión",
    category: "Ingeniería de Superficies",
    description: "Científicos desarrollan recubrimientos metálicos multicapa que ofrecen protección excepcional contra la corrosión en ambientes extremos, con aplicaciones en industrias marinas y químicas.",
    imageUrl: "https://placehold.co/600x400.png?text=Corrosion",
    imageHint: "metal corrosion protection",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1359645423003129"
  }
];

const ITEMS_PER_SLIDE = 3;

export default function ActualidadSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const numSlides = Math.ceil(newsItemsData.length / ITEMS_PER_SLIDE);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % numSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + numSlides) % numSlides);
  };
  
  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000); // Change slide every 7 seconds
    return () => clearInterval(timer); // Cleanup on component unmount
  }, [numSlides]);


  const getVisibleNewsItems = () => {
    const startIndex = currentSlide * ITEMS_PER_SLIDE;
    return newsItemsData.slice(startIndex, startIndex + ITEMS_PER_SLIDE);
  };

  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-foreground">Actualidad</h2>
          <Link href="#" className="text-primary hover:text-primary/80 font-semibold">
            Toda la actualidad
          </Link>
        </div>
        <div className="relative">
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 sm:-translate-x-8 z-10 bg-card hover:bg-muted"
            aria-label="Previous news slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {Array.from({ length: numSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1">
                  {newsItemsData.slice(slideIndex * ITEMS_PER_SLIDE, (slideIndex + 1) * ITEMS_PER_SLIDE).map((news, itemIndex) => (
                    <Link key={itemIndex} href={news.link} target="_blank" rel="noopener noreferrer" className="block">
                      <Card className="overflow-hidden hover:shadow-lg transition duration-300 h-full flex flex-col">
                        <div className="relative w-full h-48">
                           <Image 
                            src={news.imageUrl} 
                            alt={news.title} 
                            fill
                            style={{objectFit:"cover"}}
                            data-ai-hint={news.imageHint}
                          />
                        </div>
                        <CardContent className="p-5 flex flex-col flex-grow">
                          <span className="text-sm text-primary font-semibold">{news.category}</span>
                          <h3 className="text-lg font-bold text-foreground mt-2 mb-3 flex-grow">{news.title}</h3>
                          <p className="text-muted-foreground text-sm">{news.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 sm:translate-x-8 z-10 bg-card hover:bg-muted"
            aria-label="Next news slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
