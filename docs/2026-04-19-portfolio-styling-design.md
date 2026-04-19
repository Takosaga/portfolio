# Design Spec: Portfolio Styling Updates

**Date:** 2026-04-19  
**Topic:** Hero centering, project card text centering, tech skills renaming, and section spacing

## Overview

This document outlines styling changes to improve the visual presentation of the portfolio website, focusing on centering elements for better alignment and consistency.

## Changes

### 1. Hero Section Centering

**Goal:** Center the hero avatar and text group horizontally.

**Current State:** Hero content is left-aligned with flex layout.

**Changes:**
- Update `.hero-content` to center text alignment
- Maintain flex row layout for avatar and text side-by-side on desktop
- Ensure mobile responsiveness maintains centering

**CSS Changes:**
```css
.hero-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center; /* Add this */
}
```

### 2. Project Card Text Centering

**Goal:** Center text content within project cards (title, description, tech badges).

**Current State:** Project card content is left-aligned.

**Changes:**
- Center project card title (`h3`)
- Center project description (`p`)
- Center tech badges container

**CSS Changes:**
```css
.project-card {
    text-align: center; /* Add this */
}

.project-card h3 {
    margin: 0 auto 0.5rem; /* Center with auto left margin */
}

.project-card p {
    margin: 0 auto 1rem; /* Center with auto left margin */
}
```

### 3. Tech Skills Section

**Goal:** Rename "Tech Stack & Skills" to "Tech Skills" and center all items.

**Current State:** Section titled "Tech Stack & Skills" with left-aligned tech list.

**Changes:**
- Update section title from "Tech Stack & Skills" to "Tech Skills"
- Update navigation link from "Tech Stack" to "Tech Skills"
- Ensure tech badges are centered (already centered via flex justify-content: center)

**HTML Changes:**
- `index.html`: Change `<h2>Tech Stack & Skills</h2>` to `<h2>Tech Skills</h2>`
- `index.html`: Change `<li><a href="#tech-stack" class="nav-link">Tech Stack</a></li>` to `<li><a href="#tech-skills" class="nav-link">Tech Skills</a></li>`
- Update section id from `tech-stack` to `tech-skills` for consistency

### 4. Project Page Section Spacing

**Goal:** Add more spacing between sections (About, Features, Tech Stack, etc.) on individual project pages.

**Current State:** Sections have standard padding.

**Changes:**
- Increase vertical spacing between sections
- Add section divider or increased padding

**CSS Changes:**
```css
section {
    padding: 4rem 0 5rem 0; /* Increased bottom padding for section spacing */
}

section + section {
    margin-top: 3rem; /* Additional spacing between consecutive sections */
}
```

## Files to Modify

1. `css/styles.css` - All CSS styling changes
2. `index.html` - Section title and nav link updates

## Testing Checklist

- [ ] Hero section is centered on desktop and mobile
- [ ] Project card text is centered
- [ ] Tech Skills section title and nav link updated
- [ ] Tech badges are centered
- [ ] Project pages have increased section spacing
- [ ] Mobile responsiveness maintained
- [ ] Navigation links work correctly
