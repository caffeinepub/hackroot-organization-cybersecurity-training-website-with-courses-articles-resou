# Specification

## Summary
**Goal:** Restore reliable frontend+backend build and deployment by diagnosing and fixing the current build/network deployment failure, with clearer failure logs and bounded retries for network-dependent steps.

**Planned changes:**
- Identify the root cause of the current build/deploy failure and apply minimal code/config fixes so both frontend and backend build cleanly and deployment completes.
- Improve deployment failure output to clearly indicate the failing step and include the underlying error/stack where available (without exposing secrets).
- Add a bounded retry strategy for network-dependent deployment steps, exiting non-zero after max attempts and printing the final error plus a brief next-step hint in English.
- Document the fix in repository documentation (what broke, what changed, how to verify).

**User-visible outcome:** The project builds and deploys successfully again; if deployment fails, logs clearly show which step failed and why, and transient network issues are automatically retried up to a defined limit.
