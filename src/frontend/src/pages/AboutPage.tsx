import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Target, Users, Award } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize ethical practices and responsible disclosure in all our training.',
    },
    {
      icon: Target,
      title: 'Practical Focus',
      description: 'Real-world scenarios and hands-on labs ensure you gain applicable skills.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Learn alongside peers and experts in a supportive, collaborative environment.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Industry-recognized certifications and cutting-edge curriculum.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Security Analyst',
      content: 'The hands-on approach and real-world scenarios helped me land my dream job in cybersecurity.',
    },
    {
      name: 'Michael Chen',
      role: 'Penetration Tester',
      content: 'Excellent courses with practical knowledge. The instructor is knowledgeable and supportive.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Security Consultant',
      content: 'Best investment in my career. The certification prep course was comprehensive and effective.',
    },
  ];

  return (
    <div className="container py-12 md:py-16">
      {/* Mission Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          About Hackroot Organization
        </h1>
        <p className="mx-auto max-w-3xl text-xl text-cyber-accent">
          Empower learners to become cybersecurity professionals through practical training and community support.
        </p>
      </div>

      {/* Story Section */}
      <section className="mb-16">
        <Card className="cyber-card border-cyber-accent/20">
          <CardHeader>
            <CardTitle className="text-2xl">Our Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Founded by cybersecurity expert Almadad Ali, Hackroot Organization was born from a vision to make 
              high-quality cybersecurity education accessible to everyone. With years of experience in ethical 
              hacking and penetration testing, our founder recognized the growing need for skilled security 
              professionals in an increasingly digital world.
            </p>
            <p>
              What started as small workshops has grown into a comprehensive training platform serving thousands 
              of students worldwide. We've helped aspiring security professionals launch their careers, and 
              experienced practitioners advance their skills with cutting-edge techniques and tools.
            </p>
            <p>
              Today, Hackroot Organization stands as a trusted name in cybersecurity education, known for our 
              practical approach, expert instruction, and commitment to ethical practices.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground">
          Our Values
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.title} className="cyber-card text-center transition-all hover:border-cyber-accent">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-cyber-accent/10">
                  <value.icon className="h-8 w-8 text-cyber-accent" />
                </div>
                <CardTitle className="text-lg">{value.title}</CardTitle>
                <CardDescription>{value.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Founder Expertise */}
      <section className="mb-16">
        <Card className="cyber-card border-cyber-accent/20">
          <CardHeader>
            <CardTitle className="text-2xl">Founder's Expertise</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Almadad Ali</strong> brings over a decade of experience in 
              cybersecurity, specializing in ethical hacking, penetration testing, and security research. His 
              expertise spans multiple domains including:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyber-accent" />
                <span>Advanced penetration testing methodologies</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyber-accent" />
                <span>Web application security and vulnerability assessment</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyber-accent" />
                <span>Network security and infrastructure hardening</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyber-accent" />
                <span>Security research and responsible disclosure</span>
              </li>
            </ul>
            <p>
              His passion for education and commitment to ethical practices have shaped Hackroot Organization 
              into a leading platform for cybersecurity training.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground">
          What Our Students Say
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="cyber-card">
              <CardHeader>
                <CardDescription className="italic">"{testimonial.content}"</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
