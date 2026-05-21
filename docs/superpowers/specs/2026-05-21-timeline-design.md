# Timeline: Experience & Education Design

## Overview

Add a combined timeline section to the home page displaying work experience and education in reverse-chronological order with circular image placeholders beside each entry.

## Placement

New `<section id="timeline">` inserted between the tech-skills section and the shiny-dashboard section on `index.html`. A "Timeline" link is added to the top navigation menu, positioned between "Tech Skills" and "Contact".

## HTML Structure

Each timeline entry uses an `<article class="timeline-item">` with:
- A circular `<img>` (avatar-style) — placeholder for company logo, school emblem, or personal photo
- A content block containing:
  - Title line: role/program name (bold)
  - Location line: location and work mode in normal text
  - Date range line: date span

Five entries total, ordered newest to oldest:

1. **AI Engineering Bootcamp & Internship** — Accenture Baltics (Riga, Latvia · Hybrid) | Feb 2026 – Present
2. **Master of Science - MS, Computer Science** — Transport and Telecommunication Institute (TSI) / University of the West of England (UWE) (Riga, Latvia · Hybrid) | Sep 2023 – Jul 2025
3. **Computer Science and Math Teacher** — ISR - International School of Riga (Riga, Latvia) | Aug 2021 – Jul 2023
4. **Math and Computer Science Teacher** — Harlandale ISD (San Antonio, Texas, United States) | Aug 2014 – Jun 2021
5. **Bachelor of Science - BS, Math** — The University of Texas at San Antonio (San Antonio, Texas, United States) | Jan 2012 – May 2014

## Visual Design

- A thin vertical line (`border-left`) runs along the left edge of the timeline container, connecting all entries
- Each entry's circular avatar sits on top of that line, visually anchoring to it
- Avatar sizing: `clamp(60px, 15vw, 80px)` — smaller than the hero avatar but consistent with the avatar style already used (circular, `object-fit: cover`)
- Content block left-aligned beside the avatar
- Title uses `--font-heading` (Manrope), bold weight
- Location and date appear below in `--text-secondary` color
- Spacing between entries: 2.5rem vertical gap

## CSS Approach

New BEM-like classes scoped to the timeline section:
- `.timeline` — section wrapper
- `.timeline-item` — individual entry (article)
- `.timeline-avatar` — circular image
- `.timeline-content` — text block
- `.timeline-title` — role/program name
- `.timeline-location` — location line
- `.timeline-date` — date range

CSS variables already in `:root` are reused; no new variables needed.

## Responsive Behavior

On mobile (≤768px):
- Timeline container padding reduces to match other sections
- Avatar size uses the lower clamp value for tighter fit
- Line and avatars remain left-aligned; content flows naturally below on very small screens if needed

## Image Placeholders

Images go in `images/` alongside existing portfolio images. File names should be descriptive (e.g., `accenture.jpg`, `tsi-uwe.jpg`, `isr.jpg`, `harlandale.jpg`, `utsa.jpg`). Each `<img>` uses `loading="lazy"`.

## Error Handling / Edge Cases

- Missing image: avatar area shows as a blank circle (CSS background color fallback)
- Long title text: wraps naturally within the content block; no truncation
- Very long date ranges: wrap to next line without breaking layout
