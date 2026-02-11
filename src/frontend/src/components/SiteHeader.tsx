import { Link, useNavigate, useLocation } from '@tanstack/react-router';
import { Menu, X, LogIn, LogOut, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useInternetIdentity } from '@/hooks/useInternetIdentity';
import { getAndClearPostLoginRedirect } from '@/lib/authRedirect';
import { toast } from 'sonner';

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { identity, login, clear, isLoggingIn, isLoginSuccess, isInitializing } = useInternetIdentity();

  const isAuthenticated = identity && !identity.getPrincipal().isAnonymous();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Courses', path: '/courses' },
    { label: 'Articles', path: '/articles' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Resources', path: '/resources' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Verify Certificate', path: '/certificate-verification' },
  ];

  // Handle post-login navigation
  useEffect(() => {
    if (isLoginSuccess && isAuthenticated) {
      const redirectTarget = getAndClearPostLoginRedirect();
      if (redirectTarget) {
        navigate({ to: redirectTarget });
      } else {
        navigate({ to: '/dashboard' });
      }
    }
  }, [isLoginSuccess, isAuthenticated, navigate]);

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    // If clicking the current route, scroll to top
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  };

  const handleMobileNavClick = (path: string, e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    // If clicking the current route, scroll to top
    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  };

  const handleLogin = () => {
    if (isAuthenticated) {
      toast.info('You are already logged in');
      return;
    }
    login();
  };

  const handleLogout = () => {
    clear();
    toast.success('Logged out successfully');
    navigate({ to: '/' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <img 
            src="/assets/logo.dim_256x256.png" 
            alt="Hackroot Organization logo" 
            className="h-8 w-8 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-none tracking-tight text-foreground">
              Hackroot Organization
            </span>
            <span className="text-xs text-muted-foreground">Cybersecurity Training</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={(e) => handleNavClick(link.path, e)}
              className="nav-link px-3 py-2 text-sm font-medium transition-colors hover:text-cyber-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              activeProps={{ className: 'text-cyber-accent' }}
            >
              {link.label}
            </Link>
          ))}
          {isAuthenticated && (
            <Link
              to="/dashboard"
              onClick={(e) => handleNavClick('/dashboard', e)}
              className="nav-link px-3 py-2 text-sm font-medium transition-colors hover:text-cyber-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              activeProps={{ className: 'text-cyber-accent' }}
            >
              <LayoutDashboard className="mr-1.5 inline-block h-4 w-4" />
              Dashboard
            </Link>
          )}
          {!isInitializing && (
            <>
              {isAuthenticated ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="ml-2"
                >
                  <LogOut className="mr-1.5 h-4 w-4" />
                  Log out
                </Button>
              ) : (
                <Button
                  variant="default"
                  size="sm"
                  onClick={handleLogin}
                  disabled={isLoggingIn}
                  className="ml-2 cyber-button"
                >
                  <LogIn className="mr-1.5 h-4 w-4" />
                  {isLoggingIn ? 'Logging in...' : 'Log in'}
                </Button>
              )}
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur md:hidden">
          <nav className="container flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="nav-link rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-cyber-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                activeProps={{ className: 'text-cyber-accent bg-accent' }}
                onClick={(e) => handleMobileNavClick(link.path, e)}
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated && (
              <Link
                to="/dashboard"
                className="nav-link rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-cyber-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                activeProps={{ className: 'text-cyber-accent bg-accent' }}
                onClick={(e) => handleMobileNavClick('/dashboard', e)}
              >
                <LayoutDashboard className="mr-1.5 inline-block h-4 w-4" />
                Dashboard
              </Link>
            )}
            {!isInitializing && (
              <div className="mt-2 border-t border-border/40 pt-2">
                {isAuthenticated ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleLogout();
                    }}
                    className="w-full justify-start"
                  >
                    <LogOut className="mr-1.5 h-4 w-4" />
                    Log out
                  </Button>
                ) : (
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleLogin();
                    }}
                    disabled={isLoggingIn}
                    className="w-full cyber-button"
                  >
                    <LogIn className="mr-1.5 h-4 w-4" />
                    {isLoggingIn ? 'Logging in...' : 'Log in'}
                  </Button>
                )}
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
