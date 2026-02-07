# Specification

## Summary
**Goal:** Make course navigation and course content display consistent and readable by ensuring “Enroll Now” opens the correct course detail page, prices display in INR, and descriptions are fully visible in a responsive medium-density layout.

**Planned changes:**
- Update the Courses page “Enroll Now” action to always navigate to the selected course’s detail route (`/courses/<courseId>`).
- Ensure the Course Detail page formats and displays the course price in Indian Rupees (₹ with Indian digit grouping), consistent with the Courses list.
- Add a user-friendly “Course Not Found” state for invalid course IDs, including a working “Back to Courses” action.
- Adjust Course Detail page layout and typography for a responsive, medium-density reading experience across mobile/tablet/desktop, with no overlapping or horizontal scrolling.
- Remove any truncation/clamping/hidden overflow so the full course description is always visible on the Course Detail page.
- Remove any truncation/clamping/hidden overflow so course descriptions on Courses page cards remain fully readable across breakpoints while keeping the card layout stable.

**User-visible outcome:** Clicking “Enroll Now” always opens the correct course detail page, course prices appear in INR, invalid course links show a helpful not-found page, and both course cards and the course detail view show full descriptions in a clean, responsive medium layout.
