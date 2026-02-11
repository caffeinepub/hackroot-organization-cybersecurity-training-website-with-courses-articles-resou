const REDIRECT_KEY = 'auth_redirect_target';

/**
 * Store the intended destination for post-login navigation
 */
export function setPostLoginRedirect(path: string): void {
  try {
    sessionStorage.setItem(REDIRECT_KEY, path);
  } catch (error) {
    console.warn('Failed to store redirect target:', error);
  }
}

/**
 * Retrieve and clear the post-login redirect target
 */
export function getAndClearPostLoginRedirect(): string | null {
  try {
    const target = sessionStorage.getItem(REDIRECT_KEY);
    if (target) {
      sessionStorage.removeItem(REDIRECT_KEY);
    }
    return target;
  } catch (error) {
    console.warn('Failed to retrieve redirect target:', error);
    return null;
  }
}

/**
 * Clear the post-login redirect target without retrieving it
 */
export function clearPostLoginRedirect(): void {
  try {
    sessionStorage.removeItem(REDIRECT_KEY);
  } catch (error) {
    console.warn('Failed to clear redirect target:', error);
  }
}
