import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { User } from 'lucide-react';

export default function DashboardPage() {
  const { identity } = useInternetIdentity();

  const principal = identity?.getPrincipal().toString() || 'Unknown';

  return (
    <div className="container py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground">
            User Dashboard
          </h1>
          <p className="text-lg text-muted-foreground">
            Welcome to your personal dashboard
          </p>
        </div>

        <div className="grid gap-6">
          <Card className="cyber-card">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyber-accent/10">
                <User className="h-6 w-6 text-cyber-accent" />
              </div>
              <CardTitle>Your Identity</CardTitle>
              <CardDescription>
                Your Internet Identity Principal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-muted p-4">
                <p className="break-all font-mono text-sm text-foreground">
                  {principal}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
