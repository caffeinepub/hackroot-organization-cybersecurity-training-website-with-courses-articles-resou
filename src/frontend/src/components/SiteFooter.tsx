import { Link } from '@tanstack/react-router';
import { SiYoutube, SiInstagram, SiLinkedin, SiTelegram, SiX } from 'react-icons/si';
import { Heart } from 'lucide-react';

export default function SiteFooter() {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Courses', path: '/courses' },
    { label: 'Articles', path: '/articles' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Resources', path: '/resources' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: SiYoutube, label: 'YouTube', href: '#' },
    { icon: SiInstagram, label: 'Instagram', href: '#' },
    { icon: SiLinkedin, label: 'LinkedIn', href: '#' },
    { icon: SiTelegram, label: 'Telegram', href: '#' },
    { icon: SiX, label: 'X (Twitter)', href: '#' },
  ];

  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/assets/logo.dim_256x256.png" 
                alt="Hackroot Organization logo" 
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-lg font-bold text-foreground">Hackroot Organization</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Unlock the future of digital security with real-world cybersecurity training, ethical hacking, and expert tools.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-cyber-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-muted-foreground transition-colors hover:text-cyber-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-muted-foreground transition-colors hover:text-cyber-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-border/40 text-muted-foreground transition-colors hover:border-cyber-accent hover:text-cyber-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2026 CyberMindspace. Built with <Heart className="inline h-4 w-4 text-cyber-highlight" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-cyber-accent transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
