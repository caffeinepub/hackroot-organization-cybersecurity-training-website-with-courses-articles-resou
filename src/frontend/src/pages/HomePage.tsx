import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Shield, Lock, Laptop, Code, Wrench, AlertTriangle } from 'lucide-react';
import HeroCodeLines from '@/components/HeroCodeLines';
import TextImageCarousel, { CarouselSlide } from '@/components/TextImageCarousel';
import { courses } from '@/data/courses';

export default function HomePage() {
  const navigate = useNavigate();

  const featuredCourses = courses.slice(0, 5);

  const toolkitCategories = [
    { icon: Shield, title: 'Reconnaissance Tools', description: 'Information gathering and network scanning' },
    { icon: Laptop, title: 'Scanners', description: 'Vulnerability detection and assessment' },
    { icon: Wrench, title: 'Exploitation Utilities', description: 'Penetration testing frameworks' },
    { icon: Lock, title: 'Cryptography Tools', description: 'Encryption and decryption utilities' },
  ];

  const carouselSlides: CarouselSlide[] = [
    {
      id: 'slide-1',
      image: '/assets/generated/course-ethical-hacking.dim_1200x675.png',
      alt: 'Ethical Hacking Course - Learn penetration testing fundamentals',
      heading: 'Master Ethical Hacking',
      description: 'Learn the fundamentals of ethical hacking and penetration testing. Gain hands-on experience with real-world scenarios and industry-standard tools.',
    },
    {
      id: 'slide-2',
      image: '/assets/generated/course-penetration-testing.dim_1200x675.png',
      alt: 'Penetration Testing Course - Advanced security assessment techniques',
      heading: 'Advanced Penetration Testing',
      description: 'Dive deep into advanced penetration testing methodologies. Master vulnerability assessment, exploitation techniques, and security reporting.',
    },
    {
      id: 'slide-3',
      image: '/assets/generated/hero-bg.dim_1920x1080.png',
      alt: 'Cybersecurity Training Platform - Professional development',
      heading: 'Professional Cybersecurity Training',
      description: 'Join thousands of students worldwide in our comprehensive cybersecurity training programs. Build your career with industry-recognized certifications.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-br from-cyber-primary via-background to-background">
        <div className="absolute inset-0 bg-[url('/assets/generated/hero-bg.dim_1920x1080.png')] bg-cover bg-center opacity-20" />
        <HeroCodeLines />
        
        <div className="container relative z-10 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Secure Your Digital Future — Learn{' '}
              <span className="text-cyber-accent">Ethical Hacking</span> &{' '}
              <span className="text-cyber-highlight">Cybersecurity</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Hands-on training, real-world scenarios, expert community, and certification prep for cybersecurity professionals.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="cyber-button group"
                onClick={() => navigate({ to: '/courses' })}
              >
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="cyber-button-outline"
                onClick={() => navigate({ to: '/articles' })}
              >
                Read Articles
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-accent to-transparent" />
      </section>

      {/* Carousel Section */}
      <section className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Discover Our Training Programs
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive cybersecurity courses and training materials
          </p>
        </div>

        <TextImageCarousel slides={carouselSlides} />
      </section>

      {/* Featured Courses */}
      <section className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Featured Courses
          </h2>
          <p className="text-lg text-muted-foreground">
            Master cybersecurity with our comprehensive training programs
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <Card key={course.id} className="cyber-card group transition-all hover:border-cyber-accent">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyber-accent/10">
                  <course.icon className="h-6 w-6 text-cyber-accent" />
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardDescription>{course.shortDescription}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            className="cyber-button-outline"
            onClick={() => navigate({ to: '/courses' })}
          >
            View All Courses
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="border-y border-border/40 bg-card">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-[200px_1fr] md:gap-12 lg:grid-cols-[250px_1fr]">
              <div className="mx-auto">
                <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-cyber-accent/20 ring-4 ring-cyber-accent/10">
                  <img
                    src="/assets/generated/founder-portrait.dim_800x800.png"
                    alt="Almadad Ali"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center text-center md:text-left">
                <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
                  Meet the Founder
                </h2>
                <h3 className="mb-4 text-xl font-semibold text-cyber-accent">
                  Almadad Ali
                </h3>
                <p className="mb-2 text-lg font-medium text-muted-foreground">
                  Cybersecurity Expert & Educator
                </p>
                <p className="text-muted-foreground">
                  Experienced ethical hacking trainer dedicated to accessible cybersecurity education. With years of hands-on experience in penetration testing and security research, Almadad brings real-world expertise to every course.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Hacking Toolkit */}
      <section className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Free Ethical Hacking Toolkit
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional-grade tools for security professionals
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {toolkitCategories.map((category) => (
            <Card key={category.title} className="cyber-card text-center transition-all hover:border-cyber-accent">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-cyber-accent/10">
                  <category.icon className="h-8 w-8 text-cyber-accent" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="cyber-button"
            onClick={() => navigate({ to: '/resources' })}
          >
            Explore Toolkit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <AlertTriangle className="h-4 w-4 text-cyber-highlight" />
            <p>Tools are for educational and authorized testing only.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
