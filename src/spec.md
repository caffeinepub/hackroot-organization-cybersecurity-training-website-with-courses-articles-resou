# Specification

## Summary
**Goal:** Add additional requested articles to the Articles page so they appear in the list and can be opened in the Article Detail view.

**Planned changes:**
- Add new article entries to `frontend/src/data/articles.ts` with unique slugs, English title, preview, full content, author, date, and a valid image path following the existing Article shape.
- Ensure the existing `/articles` list and `/articles/$slug` detail pages correctly resolve and render each newly added article without route or lookup conflicts.
- Add any required static image assets under `frontend/public/assets/` (or `frontend/public/assets/generated`) and reference them via each new article’s `image` field to avoid broken images.

**User-visible outcome:** The Articles page shows additional new articles, and users can click each one to view its full details page with correct metadata and images.
