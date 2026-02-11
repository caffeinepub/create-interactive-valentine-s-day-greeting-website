# Specification

## Summary
**Goal:** Update the Screen 1 envelope overlay to include a centered heart icon between the greeting and date.

**Planned changes:**
- In `frontend/src/components/ValentineEnvelopeScene.tsx`, replace the `/* Content */` overlay block with the provided version: add `text-center`, `space-y-3`, and `z-10` to the container, remove `mb-2` from the heading, and insert the circular gradient heart icon block between the heading and date.
- Keep the visible copy exactly as “Hey Love” and “14.02.2026”, and leave the existing heart seal layering (`z-20`) unchanged.

**User-visible outcome:** The envelope overlay displays “Hey Love”, then a pulsing circular gradient heart icon, then “14.02.2026”, centered and vertically stacked.
