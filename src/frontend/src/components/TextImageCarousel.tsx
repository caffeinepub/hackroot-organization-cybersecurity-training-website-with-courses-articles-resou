import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export interface CarouselSlide {
  id: string;
  image: string;
  alt: string;
  heading: string;
  description: string;
}

interface TextImageCarouselProps {
  slides: CarouselSlide[];
  autoPlayInterval?: number;
  className?: string;
}

export default function TextImageCarousel({
  slides,
  autoPlayInterval = 5000,
  className = '',
}: TextImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, [slides.length]);

  // Auto-advance carousel if not reduced motion
  useEffect(() => {
    if (prefersReducedMotion || slides.length <= 1) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [prefersReducedMotion, autoPlayInterval, goToNext, slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  if (slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  return (
    <div className={`relative ${className}`} role="region" aria-label="Image carousel" tabIndex={0}>
      <div className="overflow-hidden rounded-lg border border-border/40 bg-card">
        <div className="grid gap-6 p-6 md:grid-cols-2 md:gap-8 md:p-8 lg:gap-12">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <img
                src={currentSlide.image}
                alt={currentSlide.alt}
                className="h-full w-full object-cover transition-opacity duration-500"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 flex flex-col justify-center md:order-2">
            <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {currentSlide.heading}
            </h3>
            <p className="text-lg text-muted-foreground">{currentSlide.description}</p>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-6 flex items-center justify-between">
        {/* Previous/Next Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            aria-label="Previous slide"
            className="h-10 w-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            aria-label="Next slide"
            className="h-10 w-10"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2" role="tablist" aria-label="Slide navigation">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-cyber-accent'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
              role="tab"
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-sm text-muted-foreground">
          {currentIndex + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
}
