import { Shield, Target, Bug, Search, Award } from 'lucide-react';

export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  image: string;
  icon: typeof Shield;
}

export const courses: Course[] = [
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking',
    shortDescription: 'Master the fundamentals of ethical hacking and penetration testing',
    description: 'Learn the core principles of ethical hacking, including reconnaissance, scanning, exploitation, and post-exploitation techniques. This comprehensive course covers both theoretical concepts and hands-on practical labs.',
    level: 'Beginner',
    duration: '8 weeks',
    image: '/assets/generated/course-ethical-hacking.dim_1200x675.png',
    icon: Shield,
  },
  {
    id: 'penetration-testing',
    title: 'Penetration Testing',
    shortDescription: 'Advanced techniques for professional penetration testers',
    description: 'Deep dive into advanced penetration testing methodologies, tools, and techniques. Learn to conduct comprehensive security assessments and write professional penetration testing reports.',
    level: 'Intermediate',
    duration: '10 weeks',
    image: '/assets/generated/course-penetration-testing.dim_1200x675.png',
    icon: Target,
  },
  {
    id: 'bug-bounty',
    title: 'Bug Bounty Hunting',
    shortDescription: 'Find vulnerabilities and earn rewards through bug bounty programs',
    description: 'Learn how to identify and report security vulnerabilities in web applications and earn rewards through bug bounty platforms. Covers OWASP Top 10, common vulnerabilities, and responsible disclosure.',
    level: 'Intermediate',
    duration: '6 weeks',
    image: '/assets/generated/course-bug-bounty.dim_1200x675.png',
    icon: Bug,
  },
  {
    id: 'security-research',
    title: 'Security Research',
    shortDescription: 'Conduct cutting-edge security research and vulnerability discovery',
    description: 'Advanced course on security research methodologies, reverse engineering, exploit development, and vulnerability discovery. Learn to contribute to the security community through responsible research.',
    level: 'Advanced',
    duration: '12 weeks',
    image: '/assets/generated/course-security-research.dim_1200x675.png',
    icon: Search,
  },
  {
    id: 'certification-prep',
    title: 'Certification Prep',
    shortDescription: 'Prepare for industry-recognized cybersecurity certifications',
    description: 'Comprehensive preparation for major cybersecurity certifications including CEH, OSCP, and CompTIA Security+. Includes practice exams, study materials, and expert guidance.',
    level: 'Intermediate',
    duration: '8 weeks',
    image: '/assets/generated/course-cert-prep.dim_1200x675.png',
    icon: Award,
  },
];
