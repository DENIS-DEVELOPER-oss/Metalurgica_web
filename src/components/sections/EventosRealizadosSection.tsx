
"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, Download, Share2, X, Info } from 'lucide-react';

const MAX_IMAGES_COL1 = 29;
const MAX_IMAGES_COL2 = 30;

const generateImagePaths = (prefix: string, count: number, startNum: number = 1) => {
  return Array.from({ length: count }, (_, i) => ({
    src: `https://placehold.co/800x600.png?text=${prefix}+${startNum + i}`,
    alt: `${prefix} Image ${startNum + i}`,
    hint: `event photography ${prefix.toLowerCase()}`
  }));
};

const gallery1Images = generateImagePaths("Ceremonia", MAX_IMAGES_COL1, 1);
const gallery2Images = generateImagePaths("Integracion", MAX_IMAGES_COL2, MAX_IMAGES_COL1 + 1);

const allEventImages = [...gallery1Images, ...gallery2Images];

interface ImageGalleryProps {
  images: { src: string; alt: string; hint: string }[];
  title: string;
  galleryId: string;
  openModal: (imageIndex: number, gallery: 'all') => void;
  baseModalIndex: number;
}

function ImageCarousel({ images, title, galleryId, openModal, baseModalIndex }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(() => {
      // Only advance this specific gallery if it's its "turn"
      // This logic is simplified here; a more robust global turn manager might be needed
      // if strict alternating auto-advance is required.
      // For now, each gallery advances independently.
      // if (galleryId === "columna1" && Math.random() > 0.5) nextSlide();
      // if (galleryId === "columna2" && Math.random() <= 0.5) nextSlide();
    }, 4000); // Advance every 4 seconds
    return () => clearInterval(timer);
  }, [currentIndex, images.length, galleryId]);


  return (
    <div className="relative overflow-hidden group">
      <div id={galleryId} className="relative overflow-hidden rounded-lg shadow-xl h-[400px] transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => openModal(baseModalIndex + currentIndex, 'all')}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-lg cursor-pointer"
              data-ai-hint={image.hint}
            />
          </div>
        ))}
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm z-20">
          {currentIndex + 1}/{images.length}
        </div>
        <Button
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          variant="ghost"
          size="icon"
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full hover:scale-110 transition-all duration-300 z-20 opacity-70 hover:opacity-100 group-hover:opacity-100"
        >
          <ChevronLeft />
        </Button>
        <Button
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
          variant="ghost"
          size="icon"
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full hover:scale-110 transition-all duration-300 z-20 opacity-70 hover:opacity-100 group-hover:opacity-100"
        >
          <ChevronRight />
        </Button>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent h-24 z-10 flex items-end">
          <h3 className="text-white font-medium px-4 pb-4">{title}</h3>
        </div>
      </div>
      <div className="absolute -top-3 -left-3 bg-primary text-primary-foreground px-4 py-1 rounded-br-lg rounded-tl-lg shadow-lg transform rotate-[-5deg] z-20">
        <span className="text-sm font-bold">{galleryId === "columna1" ? "Ceremonia" : "Galería"}</span>
      </div>
    </div>
  );
}

interface EventModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  images: { src: string; alt: string; hint: string }[];
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

function EventModal({ isOpen, setIsOpen, images, currentIndex, setCurrentIndex }: EventModalProps) {
  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  
  const getModalTitleAndDescription = () => {
    if (currentIndex < gallery1Images.length) {
      return {
        title: "Grupo 1 - Ceremonia de Bienvenida",
        description: `Imagen ${currentIndex + 1} de ${gallery1Images.length}`
      };
    } else {
      const indexInCol2 = currentIndex - gallery1Images.length;
      return {
        title: "Grupo 2 - Actividades de Integración",
        description: `Imagen ${indexInCol2 + 1} de ${gallery2Images.length}`
      };
    }
  };

  const { title, description } = getModalTitleAndDescription();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-5xl max-h-[90vh] p-0 bg-black bg-opacity-90 border-none flex items-center justify-center">
        <div className="relative max-w-5xl max-h-[80vh]">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            width={1200}
            height={900}
            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            data-ai-hint={currentImage.hint}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 rounded-b-lg">
            <h4 className="text-lg font-medium">{title}</h4>
            <p className="text-sm text-gray-300">{description}</p>
          </div>
        </div>
        <Button
          onClick={prevImage}
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors duration-300"
        >
          <ChevronLeft />
        </Button>
        <Button
          onClick={nextImage}
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors duration-300"
        >
          <ChevronRight />
        </Button>
        <Button
          onClick={() => setIsOpen(false)}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors duration-300"
        >
          <X />
        </Button>
        <div className="absolute bottom-4 right-4 text-white bg-black/50 px-4 py-2 rounded-full">
          {currentIndex + 1}/{images.length}
        </div>
      </DialogContent>
    </Dialog>
  );
}


export default function EventosRealizadosSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  
  // Popup state
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomePopup(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);


  const openModalHandler = (imageIndex: number) => {
    setModalImageIndex(imageIndex);
    setIsModalOpen(true);
  };
  
  const closePopup = () => {
    setShowWelcomePopup(false);
  };

  const scrollToGallery = () => {
    document.getElementById('seccion-cachimbos')?.scrollIntoView({ behavior: 'smooth'});
    closePopup();
  };

  return (
    <>
      <section id="seccion-cachimbos" className="bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-foreground relative pl-4">
              <span className="absolute left-0 top-0 h-full w-1 bg-primary rounded-full"></span>
              Recepción de Cachimbos 2025-I
            </h2>
            <span className="ml-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <span className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>Evento reciente
            </span>
          </div>
          
          <div className="mb-6 bg-blue-50 rounded-lg p-4 shadow-sm border-l-4 border-primary">
            <p className="text-primary/80 text-sm md:text-base flex items-start">
              <Info className="mr-2 mt-1 text-primary h-5 w-5 flex-shrink-0" />
              Bienvenida a nuestros nuevos estudiantes del semestre 2025-I. Una nueva generación de futuros metalúrgicos inicia su formación profesional en nuestra Escuela.
            </p>
          </div>
      
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImageCarousel images={gallery1Images} title="Ceremonia de Bienvenida" galleryId="columna1" openModal={openModalHandler} baseModalIndex={0} />
            <ImageCarousel images={gallery2Images} title="Actividades de Integración" galleryId="columna2" openModal={openModalHandler} baseModalIndex={gallery1Images.length} />
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="mr-2 h-4 w-4" /> Descargar fotos
            </Button>
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" /> Compartir
            </Button>
          </div>
        </div>
      </section>
      <EventModal 
        isOpen={isModalOpen} 
        setIsOpen={setIsModalOpen} 
        images={allEventImages} 
        currentIndex={modalImageIndex}
        setCurrentIndex={setModalImageIndex}
      />
      {showWelcomePopup && (
         <div className="fixed bottom-6 right-6 bg-card rounded-lg shadow-2xl z-50 max-w-xs overflow-hidden transition-all duration-700 transform translate-y-0 opacity-100">
          <div className="relative h-40 overflow-hidden">
            <Image src="https://placehold.co/400x200.png?text=Cachimbos+2025" alt="Recepción de Cachimbos 2025" width={400} height={200} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" data-ai-hint="students event university"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent/30 flex items-end">
              <h3 className="text-white font-bold p-3 text-lg">¡Nuevos Cachimbos 2025!</h3>
            </div>
            <Button onClick={closePopup} variant="ghost" size="icon" className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/70 rounded-full w-8 h-8 flex items-center justify-center transition-colors">
              <X className="h-4 w-4"/>
            </Button>
          </div>
          <div className="p-4">
            <p className="text-muted-foreground text-sm mb-3">Conoce a la nueva generación de ingenieros metalúrgicos que se une a nuestra escuela profesional.</p>
            <Button onClick={scrollToGallery} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Ver Galería
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
