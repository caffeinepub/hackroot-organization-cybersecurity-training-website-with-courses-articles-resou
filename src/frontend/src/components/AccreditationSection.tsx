export default function AccreditationSection() {
  return (
    <section className="border-y border-border/40 bg-card">
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            We are Accredited by
          </h2>
          <div className="flex justify-center">
            <img
              src="/assets/image.png"
              alt="Accreditation partners: Google for Education Officially Authorised Partner, Micro Small and Medium Enterprises, Startupindia, International Organization for Standardization ISO 9001:2015, Ministry of Skill Development And Entrepreneurship Government of India"
              className="h-auto w-full max-w-5xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
