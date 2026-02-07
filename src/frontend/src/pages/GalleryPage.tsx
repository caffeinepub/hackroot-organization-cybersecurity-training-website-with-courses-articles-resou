import { Card, CardContent } from '@/components/ui/card';
import { galleryImages } from '@/data/galleryImages';

export default function GalleryPage() {
  return (
    <div className="container py-12">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Gallery
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Explore our collection of cybersecurity training visuals, course materials, and educational content.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image) => (
          <Card key={image.id} className="cyber-card group overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-sm font-medium text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {image.category}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
