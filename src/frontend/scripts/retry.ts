/**
 * Bounded retry helper for network-dependent operations
 * Provides exponential backoff and clear logging
 */

export interface RetryOptions {
  maxAttempts: number;
  initialDelayMs?: number;
  maxDelayMs?: number;
  backoffMultiplier?: number;
  operationName: string;
}

export async function retryWithBackoff<T>(
  operation: () => Promise<T>,
  options: RetryOptions
): Promise<T> {
  const {
    maxAttempts,
    initialDelayMs = 1000,
    maxDelayMs = 30000,
    backoffMultiplier = 2,
    operationName,
  } = options;

  let lastError: Error | undefined;
  let currentDelay = initialDelayMs;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      console.log(`[${operationName}] Attempt ${attempt}/${maxAttempts}...`);
      const result = await operation();
      if (attempt > 1) {
        console.log(`[${operationName}] ✓ Succeeded on attempt ${attempt}`);
      }
      return result;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      
      if (attempt === maxAttempts) {
        console.error(`[${operationName}] ✗ Failed after ${maxAttempts} attempts`);
        console.error(`[${operationName}] Final error:`, lastError.message);
        if (lastError.stack) {
          console.error(lastError.stack);
        }
        break;
      }

      console.warn(`[${operationName}] Attempt ${attempt} failed: ${lastError.message}`);
      console.log(`[${operationName}] Retrying in ${currentDelay}ms...`);
      
      await new Promise(resolve => setTimeout(resolve, currentDelay));
      currentDelay = Math.min(currentDelay * backoffMultiplier, maxDelayMs);
    }
  }

  // All retries exhausted
  console.error('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.error('❌ DEPLOYMENT FAILED');
  console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.error(`Operation: ${operationName}`);
  console.error(`Attempts: ${maxAttempts}`);
  console.error(`Last error: ${lastError?.message || 'Unknown error'}`);
  console.error('\n💡 Next steps:');
  console.error('  1. Check your network connection');
  console.error('  2. Verify dfx is running (dfx start)');
  console.error('  3. Check canister IDs in dfx.json');
  console.error('  4. Review logs above for specific errors');
  console.error('  5. See DEPLOYMENT_TROUBLESHOOTING.md for more help');
  console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  throw lastError || new Error(`${operationName} failed after ${maxAttempts} attempts`);
}

export function createRetryableOperation<T>(
  fn: () => Promise<T>,
  operationName: string,
  maxAttempts: number = 3
): () => Promise<T> {
  return () => retryWithBackoff(fn, { maxAttempts, operationName });
}
