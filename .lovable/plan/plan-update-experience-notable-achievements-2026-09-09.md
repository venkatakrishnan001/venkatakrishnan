# Plan: Update Experience & Notable Achievements

## Goals
1. Add a new current role at **Michelin Tyres** in the Experience section.
2. Ensure **every** experience entry shows both start and end **month + year**.
3. Expand the Leadership section's single "Notable Achievement" into a **Notable Achievements** area that also includes the two new awards.

## Changes

### 1. ExperienceSection (`src/components/sections/ExperienceSection.tsx`)
- Insert a new first entry in `mainExperience`:
  - **Title:** Account Manager – Chennai & Pondicherry
  - **Company:** Michelin Tyres
  - **Period:** Jun 2026 – Present
  - **Description:** empty array (placeholder for content you'll add later)
  - **Logo:** create/use a clean Michelin-branded placeholder logo asset; if you upload an official logo before approval, we'll use that instead.
- Update all existing `period` strings to include the start year:
  - WhiteOak: `Apr 2025 – Jun 2025`
  - Yottec: `Dec 2023 – Apr 2024`
  - Hubblefly: `Sep 2023 – Dec 2023`
  - ACME: `Mar 2023 – Apr 2023`
  - DRDO: `Jul 2022 – Aug 2022`
  - AIROSSPACE: `Jun 2022 – Dec 2022`
- The existing timeline year-indicator logic (`period.split(' – ')[0]`) will automatically display the start month-year.

### 2. LeadershipSection (`src/components/sections/LeadershipSection.tsx`)
- Rename the section sub-heading from **Notable Achievement** to **Notable Achievements**.
- Replace the single expandable conference card with a responsive grid of three achievement cards:
  1. **Committee Excellence Award** – Product Management Club
  2. **Academic Excellence** – Term 5
  3. **International Conference** – Scramjet Engine Design presentation (existing detail preserved)
- Keep the existing scroll-triggered entrance animation and hover-lift styling consistent with the rest of the section.

## Verification
- Preview the Experience section and confirm the Michelin card appears first with empty bullets, and every date includes both month and year.
- Preview the Leadership section and confirm the three Notable Achievement cards display with correct text and animations.
- Check the build log for any TypeScript or rendering errors.
