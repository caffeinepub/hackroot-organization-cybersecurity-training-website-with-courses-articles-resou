# Specification

## Summary
**Goal:** Add Internet Identity login/logout UI and a protected User Dashboard route that is only accessible to authenticated users.

**Planned changes:**
- Add a new protected Dashboard page at route `/dashboard`, registered in the TanStack Router route tree.
- Implement a reusable client-side auth guard that uses the existing `useInternetIdentity` context to protect routes and prevent unauthenticated content from flashing before redirect.
- Update the site header to be auth-aware: show “Log in” when logged out, show “Log out” and a “Dashboard” link when logged in (for both mobile and desktop navigation).
- Ensure the login flow allows the user to reach the dashboard immediately after successful Internet Identity authentication (via automatic navigation or a clear dashboard entry point).
- Add basic dashboard content: “User Dashboard” heading and display the authenticated user’s Principal in a readable format (English text only).

**User-visible outcome:** Users can log in with Internet Identity, see a Dashboard link, and access `/dashboard` to view a simple dashboard showing their Principal; logged-out users attempting to visit `/dashboard` are redirected to a public page with a clear message that login is required.
