import { Mail, Phone } from 'lucide-react';
import { SiYoutube, SiInstagram, SiLinkedin, SiTelegram } from 'react-icons/si';

export default function TopContactStrip() {
  const socialLinks = [
    { icon: SiYoutube, label: 'YouTube', href: 'https://youtube.com/@hackrootorg2.0?si=SCyY3YuqXwv9OusU' },
    { icon: SiInstagram, label: 'Instagram', href: 'https://www.instagram.com/hackrootorg.in?igsh=ZHpwemQzbDFza2I3' },
    { icon: SiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/bablu-kumar-8bb7b3257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { icon: SiTelegram, label: 'Telegram', href: 'https://t.me/hackrootorg' },
  ];

  return (
    <div className="w-full border-b border-border/40 bg-muted/30">
      <div className="container py-2">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          {/* Left: Promo Message */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-cyber-accent">Start Your Career With Us !!</span>
          </div>

          {/* Right: Contact Info & Social Icons */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Email */}
            <a
              href="mailto:hackrootorg82@gmail.com"
              className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-cyber-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">hackrootorg82@gmail.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:7527050563"
              className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-cyber-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>7527050563</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-7 w-7 items-center justify-center rounded text-muted-foreground transition-colors hover:text-cyber-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
