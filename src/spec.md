# Specification

## Summary
**Goal:** Create the Hackroot Organization cybersecurity training website with a cohesive dark tech theme, core informational pages, contact inquiries, and certificate verification.

**Planned changes:**
- Add site-wide header navigation and client-side routing for: Home, Courses, Articles, Resources, About, Contact, Certificate Verification.
- Build the Home page with: hero (headline/subheadline, CTAs to Courses/Articles, dark tech animated background), Featured Courses (5 items + “View All Courses”), Meet the Founder (Almadad Ali section with circular portrait), and “Free Ethical Hacking Toolkit” section (categories + disclaimer + CTA to Resources).
- Implement Courses page with a responsive grid of course cards (title, description, skill level, duration, Enroll button) including at least the five featured topics.
- Implement Articles page in a blog format with entries showing featured image, headline, preview, and “Read More” routing to a detail view or placeholder.
- Implement Resources page with four categories (Toolkits, Cheat sheets, Security utilities, External learning resources) using icons/graphics and descriptive blurbs.
- Implement About page including the provided mission/vision sentence, plus sections for story, values, founder expertise, and optional placeholder testimonials.
- Implement Contact page with inquiry form (name, email, subject, message), client-side validation, displayed email address, and social links; store inquiries via backend or show a clear backend-tied success state.
- Implement Certificate Verification page with a code input form and backend verification against a minimal certificate data model; show Valid/Invalid deterministically for sample codes.
- Add a global footer with quick links, social media icons (YouTube, Instagram, LinkedIn, Telegram, Twitter), Terms & Conditions and Privacy Policy pages/placeholders, and the provided copyright text.
- Apply the specified global cybersecurity visual theme (palette, motifs, subtle hover animations) and set global SEO metadata (title, description, keywords).
- Add and reference required static image assets from `frontend/public/assets/generated` (hero background, founder portrait placeholder, course/article thumbnails, and simple security/tool icons).

**User-visible outcome:** Users can navigate a themed Hackroot training site, browse courses, read article listings, explore resources, learn about the organization, submit a contact inquiry, and verify a certificate code with a clear valid/invalid result.
