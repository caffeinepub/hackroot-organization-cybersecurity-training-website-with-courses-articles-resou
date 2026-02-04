import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground">
          Terms & Conditions
        </h1>

        <div className="space-y-6">
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                By accessing and using Hackroot Organization's services, you accept and agree to be bound 
                by the terms and provision of this agreement. If you do not agree to these terms, please 
                do not use our services.
              </p>
            </CardContent>
          </Card>

          <Card className="cyber-card">
            <CardHeader>
              <CardTitle>2. Use of Services</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                Our training materials and tools are provided for educational purposes only. You agree to 
                use all resources ethically and legally, obtaining proper authorization before conducting 
                any security testing or assessments.
              </p>
            </CardContent>
          </Card>

          <Card className="cyber-card">
            <CardHeader>
              <CardTitle>3. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                All course materials, content, and resources provided by Hackroot Organization are protected 
                by copyright and other intellectual property laws. Unauthorized reproduction or distribution 
                is prohibited.
              </p>
            </CardContent>
          </Card>

          <Card className="cyber-card">
            <CardHeader>
              <CardTitle>4. User Conduct</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                Users must conduct themselves professionally and ethically. Any misuse of knowledge or tools 
                for illegal activities will result in immediate termination of access and may be reported to 
                appropriate authorities.
              </p>
            </CardContent>
          </Card>

          <Card className="cyber-card">
            <CardHeader>
              <CardTitle>5. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                Hackroot Organization shall not be liable for any damages arising from the use or inability 
                to use our services, including but not limited to direct, indirect, incidental, or consequential 
                damages.
              </p>
            </CardContent>
          </Card>

          <Card className="cyber-card">
            <CardHeader>
              <CardTitle>6. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                We reserve the right to modify these terms at any time. Continued use of our services after 
                changes constitutes acceptance of the modified terms.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
