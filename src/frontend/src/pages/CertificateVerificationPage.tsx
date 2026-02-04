import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, CheckCircle2, XCircle, Loader2 } from 'lucide-react';
import { useActor } from '@/hooks/useActor';
import { useMutation } from '@tanstack/react-query';

export default function CertificateVerificationPage() {
  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState<boolean | null>(null);
  const { actor } = useActor();

  const verifyMutation = useMutation({
    mutationFn: async (id: string) => {
      if (!actor) throw new Error('Actor not initialized');
      return await actor.verifyCertificate(id);
    },
    onSuccess: (isValid) => {
      setVerificationResult(isValid);
    },
    onError: () => {
      setVerificationResult(false);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (certificateId.trim()) {
      setVerificationResult(null);
      verifyMutation.mutate(certificateId.trim());
    }
  };

  const handleReset = () => {
    setCertificateId('');
    setVerificationResult(null);
    verifyMutation.reset();
  };

  return (
    <div className="container py-12 md:py-16">
      <div className="mb-12 text-center">
        <Shield className="mx-auto mb-4 h-16 w-16 text-cyber-accent" />
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Certificate Verification
        </h1>
        <p className="text-lg text-muted-foreground">
          Verify the authenticity of Hackroot Organization certificates
        </p>
      </div>

      <div className="mx-auto max-w-2xl">
        <Card className="cyber-card">
          <CardHeader>
            <CardTitle className="text-2xl">Verify Certificate</CardTitle>
            <CardDescription>
              Enter the certificate ID to verify its authenticity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="certificateId">Certificate ID</Label>
                <Input
                  id="certificateId"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  placeholder="Enter certificate ID (e.g., CERT-2026-001)"
                  disabled={verifyMutation.isPending}
                />
                <p className="text-xs text-muted-foreground">
                  The certificate ID can be found on your certificate document
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  type="submit"
                  className="cyber-button flex-1"
                  disabled={!certificateId.trim() || verifyMutation.isPending}
                >
                  {verifyMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    'Verify Certificate'
                  )}
                </Button>
                {verificationResult !== null && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleReset}
                    disabled={verifyMutation.isPending}
                  >
                    Reset
                  </Button>
                )}
              </div>
            </form>

            {/* Verification Result */}
            {verificationResult !== null && !verifyMutation.isPending && (
              <div className="mt-6">
                {verificationResult ? (
                  <div className="rounded-lg border border-cyber-highlight/20 bg-cyber-highlight/5 p-6 text-center">
                    <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-cyber-highlight" />
                    <h3 className="mb-2 text-xl font-bold text-foreground">
                      Certificate Valid
                    </h3>
                    <p className="text-muted-foreground">
                      This certificate has been verified and is authentic.
                    </p>
                  </div>
                ) : (
                  <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-6 text-center">
                    <XCircle className="mx-auto mb-3 h-12 w-12 text-destructive" />
                    <h3 className="mb-2 text-xl font-bold text-foreground">
                      Certificate Invalid
                    </h3>
                    <p className="text-muted-foreground">
                      This certificate could not be verified. Please check the ID and try again.
                    </p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="cyber-card mt-6">
          <CardHeader>
            <CardTitle>About Certificate Verification</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              All certificates issued by Hackroot Organization are registered in our secure database. 
              This verification system allows employers and institutions to confirm the authenticity 
              of certificates.
            </p>
            <p>
              If you believe there is an error with your certificate verification, please contact 
              our support team at support/contact@example.com.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
