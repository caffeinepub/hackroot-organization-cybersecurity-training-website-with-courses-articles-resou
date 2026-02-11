import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { InternetIdentityProvider } from './hooks/useInternetIdentity';
import TopContactStrip from './components/TopContactStrip';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';
import AuthGuard from './components/AuthGuard';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import EnrollmentSuccessPage from './pages/EnrollmentSuccessPage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CertificateVerificationPage from './pages/CertificateVerificationPage';
import GalleryPage from './pages/GalleryPage';
import DashboardPage from './pages/DashboardPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import { Toaster } from '@/components/ui/sonner';

const queryClient = new QueryClient();

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopContactStrip />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingWhatsAppButton />
      <Toaster />
      <ScrollToTopOnRouteChange />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const coursesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/courses',
  component: CoursesPage,
});

const courseDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/courses/$courseId',
  component: CourseDetailPage,
});

const enrollmentSuccessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/courses/$courseId/enrollment-success',
  component: EnrollmentSuccessPage,
});

const articlesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/articles',
  component: ArticlesPage,
});

const articleDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/articles/$slug',
  component: ArticleDetailPage,
});

const resourcesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resources',
  component: ResourcesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const certificateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/certificate-verification',
  component: CertificateVerificationPage,
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery',
  component: GalleryPage,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: () => (
    <AuthGuard>
      <DashboardPage />
    </AuthGuard>
  ),
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/terms',
  component: TermsPage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy',
  component: PrivacyPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  coursesRoute,
  courseDetailRoute,
  enrollmentSuccessRoute,
  articlesRoute,
  articleDetailRoute,
  resourcesRoute,
  aboutRoute,
  contactRoute,
  certificateRoute,
  galleryRoute,
  dashboardRoute,
  termsRoute,
  privacyRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <InternetIdentityProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </InternetIdentityProvider>
    </ThemeProvider>
  );
}
