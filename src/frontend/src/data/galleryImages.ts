export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'hero-bg',
    src: '/assets/generated/hero-bg.dim_1920x1080.png',
    alt: 'Cybersecurity training platform hero background with digital security elements',
    category: 'Branding',
  },
  {
    id: 'ethical-hacking',
    src: '/assets/generated/course-ethical-hacking.dim_1200x675.png',
    alt: 'Ethical Hacking Fundamentals course cover image',
    category: 'Courses',
  },
  {
    id: 'penetration-testing',
    src: '/assets/generated/course-penetration-testing.dim_1200x675.png',
    alt: 'Advanced Penetration Testing course cover image',
    category: 'Courses',
  },
  {
    id: 'bug-bounty',
    src: '/assets/generated/course-bug-bounty.dim_1200x675.png',
    alt: 'Bug Bounty Hunting course cover image',
    category: 'Courses',
  },
  {
    id: 'security-research',
    src: '/assets/generated/course-security-research.dim_1200x675.png',
    alt: 'Security Research Methodology course cover image',
    category: 'Courses',
  },
  {
    id: 'cert-prep',
    src: '/assets/generated/course-cert-prep.dim_1200x675.png',
    alt: 'Certification Preparation course cover image',
    category: 'Courses',
  },
  {
    id: 'cyber-tips',
    src: '/assets/generated/article-cyber-tips.dim_1200x675.png',
    alt: 'Top 10 Cybersecurity Tips article featured image',
    category: 'Articles',
  },
  {
    id: 'hacking-fundamentals',
    src: '/assets/generated/article-hacking-fundamentals.dim_1200x675.png',
    alt: 'Understanding Ethical Hacking Fundamentals article featured image',
    category: 'Articles',
  },
  {
    id: 'research-trends',
    src: '/assets/generated/article-research-trends.dim_1200x675.png',
    alt: 'The Future of Security Research article featured image',
    category: 'Articles',
  },
  {
    id: 'founder-portrait',
    src: '/assets/generated/founder-portrait.dim_800x800.png',
    alt: 'Hackroot Organization founder portrait',
    category: 'Team',
  },
];
