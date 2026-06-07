---
name: Gonzalo Gamez — Portfolio
description: Personal portfolio for an AI Engineer in Riga, Latvia
colors:
  accent: "#d9723a"
  neutral-bg-primary: "#fdfcfb"
  neutral-bg-secondary: "#f5f0ec"
  text-primary: "#1e1c1a"
  text-secondary: "#5a534f"
  border: "#e8e2dc"
  error: "#b53a3a"
typography:
  display:
    fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(2rem, 5vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.1
  headline:
    fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.5rem, 4vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Figtree', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: "4px"
  md: "8px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  xxl: "3rem"
---

# Design System: Gonzalo Gamez — Portfolio

## 1. Overview

**Creative North Star: "The Technical Spec Sheet"**

This is a portfolio built like engineering documentation: clean, precise, no decoration without purpose. The visual language mirrors the work — AI systems that are transparent, explainable, and well-structured. Warm tones (terracotta accent on an off-white canvas) keep it human; the layout discipline keeps it sharp. Every section presents evidence: project artifacts, tech stacks, career timeline, data visualizations. Nothing exists to fill space.

The system rejects SaaS-cream aesthetics — no generic blue corporate templates, no dark-mode-by-default posturing, no identical card grids with icons and descriptions. It also avoids the editorial-magazine reflex that floods every portfolio: no display serif drop caps, no broadsheet grids, no italicized metadata labels above every section.

**Key Characteristics:**
- Warm neutral canvas with a single committed accent (terracotta)
- Two-family typography: Manrope for headings (structural), Figtree for body (readable)
- Tonal layering over heavy shadows — surfaces distinguished by subtle background shifts
- Asymmetric layouts where content demands it; left-aligned, not center-stacked
- Evidence-first: data visualizations, real project images, concrete tech badges

## 2. Colors

A warm neutral palette grounded by a single terracotta accent. The warmth comes from the undertone — every neutral is tinted toward amber (chroma ~0.005), avoiding sterile grays. The accent is used deliberately, not diluted across the surface.

### Primary
- **Terracotta** (#d9723a): Navigation hover states, button backgrounds, timeline avatar borders, sparkline stroke, token counter, focus ring outlines. The only saturated color on any given screen. Its rarity is the point — when it appears, it draws attention.

### Neutral
- **Warm Ivory** (#fdfcfb): Primary background across the entire site. Not pure white — a faint amber tint keeps it warm and readable under typical indoor lighting.
- **Sand** (#f5f0ec): Secondary surface for project cards, tech skills section, and card backgrounds. Provides subtle tonal separation from the primary canvas without introducing a new hue.
- **Graphite** (#1e1c1a): Primary text color. Near-black with an amber undertone — never pure `#000`. Used for headings, body text, logo.
- **Warm Gray** (#5a534f): Secondary text — bios, descriptions, timestamps, captions. Provides clear hierarchy against the primary text without requiring weight contrast alone.
- **Clay** (#e8e2dc): Borders and dividers. Subtle enough to define structure without competing with content. Used for nav bottom border, form input borders, timeline connecting line.
- **Signal Red** (#b53a3a): Error states only — form validation errors, error messages. Never used decoratively.

### Named Rules
**The One Voice Rule.** The terracotta accent (#d9723a) appears on ≤10% of any given screen. Its scarcity is what makes it effective. If you find yourself using it more, ask whether the element should be structural (text weight, size contrast) instead.

## 3. Typography

**Display Font:** Manrope (with -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif fallback)
**Body Font:** Figtree (with -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif fallback)

**Character:** Two geometric sans-serifs that share a DNA of clean readability. Manrope brings structural authority to headings — its bold weights feel engineered, not decorative. Figtree is the workhorse: calm, legible, unopinionated at body size but with enough character in 500/700 weights to carry labels and badges without feeling generic.

### Hierarchy
- **Display** (800, clamp(2rem, 5vw, 3rem), 1.1): Hero name only. The largest weight in the system creates maximum contrast against body text. Tight line-height for compact presence.
- **Headline** (700, clamp(1.5rem, 4vw, 2rem), 1.2): Section headings (Projects, Tech Skills, Experience). Scaled with fluid clamp() for responsive breathing room.
- **Title** (700, 1.125rem, 1.3): Project card titles, timeline entry titles. The smallest heading weight — still bold enough to signal hierarchy without competing with section headlines.
- **Body** (400, 1rem, 1.6): All prose content. Max line length capped at 75ch for readability. Generous line-height prevents crowding.
- **Label** (500, 0.875rem, 1.4): Tech badges, timestamps, secondary metadata. Slightly bolded for legibility at small size without entering heading territory.

### Named Rules
**The Weight Gap Rule.** Heading weights start at 700 and go up to 800 — no 500 or 600 in headings. This creates a hard step from body (400) to the smallest heading (700), a ≥1.75 weight ratio that makes hierarchy unambiguous even without size contrast.

## 4. Elevation

Tonal layering is the primary depth strategy; shadows are reserved for interactive responses. Surfaces sit flat at rest — project cards use background color shifts (#f5f0ec vs #fdfcfb) to distinguish themselves from the canvas. Shadows appear only on hover or focus, signaling interactivity rather than permanent elevation.

### Shadow Vocabulary
- **Ambient Low** (`0 2px 8px rgba(30, 28, 26, 0.08)`): Lightbox default state, subtle container separation. Used sparingly — never on resting cards.
- **Medium** (`0 4px 12px rgba(30, 28, 26, 0.1)`): Project card hover lift. Paired with `translateY(-2px)` for a physical response to pointer interaction.
- **Strong** (`0 4px 24px rgba(30, 28, 26, 0.25)`): Lightbox overlay shadow on the displayed image. Creates clear visual separation from the page content behind it.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to state (hover, focus, active). A card that shadows without user interaction is guessing at importance — let content hierarchy decide what matters.

## 5. Components

### Buttons
- **Shape:** Gently curved edges (4px radius) — tight enough to feel technical, not soft.
- **Primary:** Terracotta background (#d9723a), warm ivory text (#f5f0ec), padding 12px 24px. Used for primary CTAs like "GitHub Repository" on project pages.
- **Hover:** Opacity drops to 0.9 — no color shift, no lift, just a subtle fade. Consistent with the precision-over-decoration principle.
- **Focus:** 2px terracotta outline with 3px offset. Visible but not aggressive.

### Tech Badges / Chips
- **Style:** Warm ivory background (#fdfcfb), terracotta text (#b5552a), 4px radius, compact padding (4px 12px). No border — the background shift distinguishes them from the card surface.
- **State:** Single static state. Badges are informational labels, not interactive filters.

### Project Cards
- **Corner Style:** 8px radius on all corners — slightly more rounded than buttons to soften the card's visual weight.
- **Background:** Sand (#f5f0ec) for the card body; image area has no background (fills to edge).
- **Shadow Strategy:** Flat at rest, Medium shadow + translateY(-4px) on hover. The lift is noticeable but not dramatic — a physical nudge, not a jump.
- **Internal Padding:** 1.5rem horizontal for text content; images fill the card width with no gutter.

### Form Inputs
- **Style:** Clay border (#e8e2dc), warm ivory background (#fdfcfb), 4px radius, 12px padding. Clean stroke — not filled, not ghost.
- **Focus:** Border shifts to terracotta (#d9723a) with a 3px soft glow (color-mixed at 30% opacity). The glow is functional, decorative only in that it makes the focus state unmistakable.
- **Error:** Clay border replaced with Signal Red (#b53a3a), red glow on focus. Error message displayed below in red at 13px.

### Navigation
- **Style:** Sticky header, warm ivory background, Clay bottom border (1px). Logo in Manrope 700/1.25rem on the left. Nav links in Figtree 500 with Warm Gray text (#5a534f) that shifts to terracotta on hover.
- **Active State:** Terracotta text color — no underline, no background highlight. The link's identity is its color shift against the neutral canvas.
- **Mobile:** Hamburger toggle (3 horizontal bars, 3px thick, graphite color). Menu slides below the header with a Clay bottom border. Touch targets minimum 44x44px.

### Timeline Entries
- **Structure:** Left-edge connecting line (2px, Clay color) on desktop; icons pop out from the line with spring-eased animations. Double-logo entries stacked vertically for double-degree programs.
- **Avatar Treatment:** Circular (50% radius), 2px terracotta border, shadow-sm at rest. Grayscale filter (saturate 0.3) applied to non-current entries; hover restores partial color (saturate 0.5). This creates a visual distinction between current and past entries without using labels or badges.
- **Hover:** Entire entry shifts — avatar lifts and scales (translateY(-4px), scale(1.12)), content slides left (-4px). Coordinated movement that signals interactivity.

### Dashboard Teaser Card
- **Structure:** Full-width card spanning the project grid, featuring an animated sparkline SVG with gradient stroke (terracotta at 0.4→1.0 opacity), a pulsing endpoint dot, and a token counter animation (easeOutQuart to 283,985,437).
- **Hover:** Radial gradient glow appears behind the card (terracotta at 8% opacity), card lifts with Strong shadow. The glow is a subtle halo — not glassmorphism, just atmospheric light.

### Lightbox
- **Structure:** Fixed overlay at 85% opacity graphite (#141210) on mobile, full viewport coverage. Image centered with 8px radius and Strong shadow. Close button top-right (×), nav arrows mid-screen edges.
- **Behavior:** Focus trap within the lightbox, keyboard navigation (←/→/Esc), click-outside-to-close. Triggers return focus to the originating element.

## 6. Do's and Don'ts

### Do:
- **Do** use terracotta (#d9723a) sparingly — on interactive elements, data visualization accents, and structural borders. Its power comes from rarity.
- **Do** let content determine layout direction. Left-aligned sections with asymmetric compositions feel more designed than centered stacks. Use containers only where they serve a purpose (max-width for readability), not as default wrappers.
- **Do** maintain the weight gap: body at 400, all headings at 700+. No intermediate heading weights. This creates unambiguous hierarchy through weight contrast alone.
- **Do** use tonal layering (background shifts between #fdfcfb and #f5f0ec) as the primary depth strategy. Shadows are reserved for hover/focus responses only.
- **Do** keep animations purposeful: ease-out-quart or ease-out-expo curves, no bounce, no elastic. Spring-eased pop-outs for timeline items are acceptable when they serve content reveal.
- **Do** use real project imagery — data visualizations, screenshots, photos of work artifacts. The portfolio's credibility depends on showing actual output.

### Don't:
- **Don't** use dark mode as a default or aesthetic crutch. The warm ivory canvas (#fdfcfb) is the starting point. If dark mode exists, it's an explicit choice, not a reflex.
- **Don't** reach for SaaS-cream patterns: gradient hero metrics, blue-on-white corporate templates, identical card grids with icons and short descriptions repeated mindlessly.
- **Don't** use side-stripe borders (border-left or border-right greater than 1px as a colored accent) on cards, list items, callouts, or alerts. Rewrite with full borders, background tints, leading numbers, or nothing.
- **Don't** use gradient text (`background-clip: text` with gradient). Use a single solid color with weight or size for emphasis.
- **Don't** use glassmorphism (blurs, frosted glass) as a default treatment. It's rare and purposeful, or nothing.
- **Don't** nest cards inside other cards. Nested containers are always wrong — if you need two levels of grouping, use spacing, typography, or color instead.
- **Don't** add decorative elements that don't serve information, navigation, or interaction. No floating shapes, no background patterns, no decorative dividers between sections.
