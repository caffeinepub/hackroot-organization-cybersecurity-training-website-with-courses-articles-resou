import { type ReactNode, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { setPostLoginRedirect } from '@/lib/authRedirect';

interface AuthGuardProps {
  children: ReactNode;
  redirectTo?: string;
}

/**
 * AuthGuard component that protects routes requiring authentication.
 * Redirects unauthenticated users and stores the intended destination.
 */
export default function AuthGuard({ children, redirectTo = '/' }: AuthGuardProps) {
  const { identity, isInitializing } = useInternetIdentity();
  const navigate = useNavigate();

  const isAuthenticated = identity && !identity.getPrincipal().isAnonymous();

  useEffect(() => {
    if (!isInitializing && !isAuthenticated) {
      // Store the current path for post-login redirect
      setPostLoginRedirect(window.location.pathname);
      // Redirect to home with a query param to show login message
      navigate({ to: redirectTo, search: { loginRequired: 'true' } });
    }
  }, [isInitializing, isAuthenticated, navigate, redirectTo]);

  // Show nothing while initializing or redirecting
  if (isInitializing || !isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
