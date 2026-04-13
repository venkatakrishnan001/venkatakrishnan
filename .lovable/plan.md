
## Reduce Section Spacing

All 8 section components use `py-24` (96px top + bottom). Changing each to `py-16` (64px top + bottom) will reduce the gap between sections from ~192px to ~128px for a tighter, more moderate feel.

### Files to edit (single change per file)

Replace `py-24` with `py-16` in the `<section>` tag of each:

1. `src/components/sections/AboutSection.tsx`
2. `src/components/sections/HighlightsSection.tsx`
3. `src/components/sections/ExperienceSection.tsx`
4. `src/components/sections/EducationSection.tsx`
5. `src/components/sections/SkillsSection.tsx`
6. `src/components/sections/ProjectsSection.tsx`
7. `src/components/sections/LeadershipSection.tsx`
8. `src/components/sections/ContactSection.tsx`

No structural or logic changes needed -- just a padding class swap in each file.
