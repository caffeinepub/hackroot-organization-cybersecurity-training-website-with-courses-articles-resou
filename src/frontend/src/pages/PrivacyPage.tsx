import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground">
          Privacy Policy
        </h1>

        <div className="space-y-6">
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                enroll in courses, or contact us for support. This may include your name, email address, 
                and other contact information.
              </p>
            </CardContent>
          </Card>

          <Card className="cyber-card">
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                We use the information we collect to provide, maintain, and improve our services, to 
                communicate with you, to monitor and analyze trends and usage, and to personalize your 
                learning experience.
              </p>
            </CardContent>
          </Card>

          <Card className="cyber-card">
            <CardHeader>
              <CardTitle>3. Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information with service providers who assist us in operating our platform, conducting 
                our business, or serving our users.
              </p>
            </CardContent>
          </Card>

          <Card className="cyber-card">
            <CardHeader>
              <CardTitle>4. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </CardContent>
          </Card>

          <Card className="cyber-card">
            <CardHeader>
              <CardTitle>5. Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                You have the right to access, update, or delete your personal information. You may also 
                opt out of receiving promotional communications from us at any time.
              </p>
            </CardContent>
          </Card>

          <Card className="cyber-card">
            <CardHeader>
              <CardTitle>6. Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                We use cookies and similar tracking technologies to track activity on our platform and 
                hold certain information to improve and analyze our service.
              </p>
            </CardContent>
          </Card>

          <Card className="cyber-card">
            <CardHeader>
              <CardTitle>7. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                If you have any questions about this Privacy Policy, please contact us at 
                support/contact@example.com.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
