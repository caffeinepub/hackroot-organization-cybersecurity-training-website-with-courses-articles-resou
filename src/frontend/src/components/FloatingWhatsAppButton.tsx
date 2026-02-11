import { SiWhatsapp } from 'react-icons/si';
import { getWhatsAppUrl } from '@/lib/siteContact';

export default function FloatingWhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp for inquiry"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:bottom-8 md:right-8"
    >
      <SiWhatsapp className="h-7 w-7" />
    </a>
  );
}
