import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Laptop, Code, Wrench, BookOpen, ExternalLink } from 'lucide-react';

export default function ResourcesPage() {
  const resources = [
    {
      icon: '/assets/generated/icon-tools.dim_256x256.png',
      title: 'Toolkits',
      description: 'Comprehensive collections of security testing tools',
      items: [
        'Metasploit Framework',
        'Burp Suite',
        'Nmap Network Scanner',
        'Wireshark Protocol Analyzer',
      ],
    },
    {
      icon: '/assets/generated/icon-code-brackets.dim_256x256.png',
      title: 'Cheat Sheets',
      description: 'Quick reference guides for common security tasks',
      items: [
        'Linux Command Line',
        'SQL Injection Techniques',
        'XSS Attack Vectors',
        'Privilege Escalation',
      ],
    },
    {
      icon: '/assets/generated/icon-lock.dim_256x256.png',
      title: 'Security Utilities',
      description: 'Essential tools for security professionals',
      items: [
        'Password Crackers',
        'Encryption Tools',
        'Forensics Software',
        'Network Analyzers',
      ],
    },
    {
      icon: '/assets/generated/icon-laptop.dim_256x256.png',
      title: 'External Learning Resources',
      description: 'Curated links to expand your knowledge',
      items: [
        'OWASP Top 10',
        'CVE Database',
        'Security Blogs',
        'Research Papers',
      ],
    },
  ];

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Security Resources
        </h1>
        <p className="text-lg text-muted-foreground">
          Essential tools, guides, and resources for cybersecurity professionals
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {resources.map((resource) => (
          <Card key={resource.title} className="cyber-card transition-all hover:border-cyber-accent">
            <CardHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-cyber-accent/10">
                <img src={resource.icon} alt="" className="h-10 w-10 opacity-80" />
              </div>
              <CardTitle className="text-2xl">{resource.title}</CardTitle>
              <CardDescription className="text-base">{resource.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {resource.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyber-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-lg border border-border/40 bg-card p-6 text-center">
        <Shield className="mx-auto mb-4 h-12 w-12 text-cyber-accent" />
        <h2 className="mb-2 text-xl font-bold text-foreground">Responsible Use</h2>
        <p className="text-muted-foreground">
          All tools and resources are provided for educational purposes and authorized security testing only. 
          Always obtain proper authorization before conducting security assessments.
        </p>
      </div>
    </div>
  );
}
