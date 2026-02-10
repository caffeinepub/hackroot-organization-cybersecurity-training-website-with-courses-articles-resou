import { useEffect } from 'react';
import { useRouter } from '@tanstack/react-router';

export default function ScrollToTopOnRouteChange() {
  const router = useRouter();

  useEffect(() => {
    // Subscribe to router state changes
    const unsubscribe = router.subscribe('onResolved', () => {
      // Scroll to top after navigation completes
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });

    return () => {
      unsubscribe();
    };
  }, [router]);

  return null;
}
