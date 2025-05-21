
"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  imageUrl: string;
  imageHint: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 7000); // Auto-scroll every 7 seconds
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-1">
              <Card className="bg-background shadow-xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.author}
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-primary shadow-lg"
                    data-ai-hint={testimonial.imageHint}
                  />
                  <Quote className="mx-auto h-8 w-8 text-primary/50 mb-4 transform scale-x-[-1]" />
                  <blockquote className="text-muted-foreground text-lg italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-foreground font-semibold not-italic">
                    - {testimonial.author}
                  </cite>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-0 sm:-left-4 transform -translate-y-1/2 rounded-full bg-card hover:bg-muted"
        onClick={prevTestimonial}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-0 sm:-right-4 transform -translate-y-1/2 rounded-full bg-card hover:bg-muted"
        onClick={nextTestimonial}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index ? 'bg-primary' : 'bg-muted hover:bg-primary/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

    