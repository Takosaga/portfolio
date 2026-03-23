# Team Lead - AI Group Project

**Date:** 2026-03-23  
**Author:** Gonzalo Gamez

---

## Overview

This document specifies the design for `project3.html`, a portfolio page showcasing experience as a team lead managing an AI group project. The page follows the established pattern from `project1.html` and `project2.html` to maintain visual consistency across the portfolio.

---

## Architecture

### Single-Page HTML Structure

The implementation uses a self-contained HTML file with embedded styles and scripts, matching the existing portfolio architecture:

```
projects/project3.html
├── HTML structure (main content)
├── Embedded CSS (lightbox styles)
└── Embedded JavaScript (lightbox gallery)
```

**External Dependencies:**
- `../css/styles.css` - Main stylesheet
- `../js/main.js` - Shared navigation scripts
- Image files in `./images/` directory

---

## Page Structure

### Header Section
- **Logo**: "Gonzalo Gamez" (linked to index.html)
- **Navigation**: About | Projects | Contact links
- Mobile-responsive hamburger menu with collapsible nav

### Main Content Article

#### 1. Title & Description
```html
<h1>Team Lead - AI Group Project</h1>
<p class="description">[Detailed project description]</p>
```

#### 2. About Section
- Overview of the AI group project context
- Team composition (~3 members)
- Timeline (~2 months / 8 weeks)
- Project objectives and scope

#### 3. Features Section (Team Coordination Focus)
Key features to highlight:
- Communication management (Slack/Teams/Discord integration)
- Documentation and knowledge sharing protocols
- Sprint planning and iterative progress tracking
- Task assignment, prioritization, and follow-up systems
- Team dynamics facilitation and collaboration optimization

#### 4. Tech Stack Section
```html
<div class="tech-stack">
  <span class="tech-badge">GitHub Projects</span>
  <span class="tech-badge">Git Workflow</span>
  <span class="tech-badge">Agile Methodology</span>
  <span class="tech-badge">Stakeholder Communication</span>
  <span class="tech-badge">Team Leadership</span>
</div>
```

#### 5. Links Section
Three primary links:
1. GitHub Repository (primary link, default style)
2. Project Board view (secondary link, dark background)
3. View page link (if applicable, secondary link)

#### 6. Visualizations Section
Grid layout with lightbox gallery:
- 2-3 screenshots from GitHub Project board
- Examples: board layout/columns setup, sprint tracking, task organization
- Clickable thumbnails with hover effects
- Integrated lightbox modal with navigation controls

### Footer Section
- Social links: GitHub only (no LinkedIn, no email)
- Copyright notice with year

---

## Components

### Lightbox Gallery Component

**HTML Structure:**
```html
<div id="lightbox" class="lightbox" role="dialog" aria-modal="true">
  <span class="close-lightbox">&times;</span>
  <button class="nav-btn prev">&larr;</button>
  <img src="" alt="Full-size visualization" id="lightbox-img">
  <button class="nav-btn next">&rarr;</button>
</div>
```

**Features:**
- Full-screen overlay with 85% background opacity
- Centered image display (max-width: 90%, max-height: 85vh)
- Close button (top-right), navigation arrows (left/right sides)
- Click outside to close
- Keyboard navigation: ArrowLeft/ArrowRight, Escape

**JavaScript Logic:**
```javascript
const images = [
  './images/board_layout_screenshot.png',
  './images/sprint_tracking_screenshot.png',
  './images/task_organization_screenshot.png'
];

let currentIndex = 0;
// Event listeners for close, prev, next buttons
// Keyboard event handlers
// Click-outside-to-close behavior
```

---

## Data Flow

1. **Page Load**: 
   - Browser loads HTML → parses embedded CSS
   - JavaScript initializes on DOMContentLoaded
   - Images loaded from `./images/` directory

2. **User Interaction**:
   - User clicks thumbnail → opens lightbox with current image
   - Click prev/next buttons → cycles through images (wraps around)
   - Click outside or press Escape → closes lightbox
   - Keyboard events handled when lightbox is active

---

## Error Handling

### Defensive Programming
- Check `if (!lightbox) return;` before attaching event listeners
- Empty image array check: `if (images.length === 0) return;`
- Null-safety for DOM element references

### Graceful Degradation
- Page renders fully without JavaScript (content visible)
- Lightbox fails silently if images missing (browser shows broken image icon)
- Mobile responsive styling applied regardless of screen size

---

## Styling Inheritance

All base styles inherited from `../css/styles.css`:
- Color scheme: Neutral theme (white background, dark text, blue accent)
- Typography: System font stack
- Max-width container: 1200px
- Responsive breakpoints at 768px

### Embedded Styles Only
- Lightbox overlay and controls
- Thumbnail hover effects
- Mobile adjustments for navigation buttons

---

## Testing Strategy

### Manual Verification Checklist

**Visual Tests:**
- [ ] Header displays correctly on desktop and mobile
- [ ] All sections (About, Features, Tech Stack, Links, Visualizations) render properly
- [ ] Tech stack badges display as inline-flex tags
- [ ] Visualizations grid shows images correctly

**Lightbox Tests:**
- [ ] Clicking thumbnail opens lightbox with correct image
- [ ] Previous/next buttons cycle through all images
- [ ] Wrapping works: last → first, first → last
- [ ] Close button closes lightbox
- [ ] Click outside image closes lightbox
- [ ] Escape key closes lightbox
- [ ] Body scroll is disabled when lightbox is active

**Responsive Tests:**
- [ ] Navigation collapses to hamburger menu on mobile (<768px)
- [ ] Visualizations grid wraps appropriately on smaller screens
- [ ] Lightbox controls remain accessible and usable on mobile
- [ ] Footer social links stack vertically on mobile

### Cross-Browser Compatibility
Tested in: Chrome, Firefox, Safari, Edge (latest versions)

---

## Accessibility

**ARIA Attributes:**
- `role="dialog"` on lightbox container
- `aria-modal="true"` to indicate dialog mode
- `aria-label` on close button and navigation controls

**Keyboard Navigation:**
- Tab order follows natural HTML structure
- Arrow keys navigate images when lightbox active
- Escape key closes overlay
- Focus management: focus moves to close button when opening

**Semantic HTML:**
- Proper heading hierarchy (h1 → h2)
- Description paragraph for screen readers
- Alt text on all images

---

## File Organization

```
portfolio/
├── projects/
│   ├── project3.html          # Main portfolio page
│   └── images/
│       ├── board_layout_screenshot.png
│       ├── sprint_tracking_screenshot.png
│       └── task_organization_screenshot.png
├── css/
│   └── styles.css             # Shared stylesheet
├── js/
│   └── main.js                # Shared scripts
└── docs/superpowers/specs/
    └── 2026-03-23-team-lead-ai-group-project-design.md  # This spec
```

---

## Dependencies

### External
- None (no CDN dependencies, no frameworks)

### Internal
- `../css/styles.css` - Primary stylesheet
- `../js/main.js` - Navigation toggle functionality

---

## Open Questions

1. **Exact project details**: Are the timeline (~2 months) and team size (~3 members) accurate? May need adjustment based on actual figures.

2. **GitHub URLs**: Need final confirmation of:
   - Repository URL
   - Project board view URL
   - View page URL (if applicable)

3. **Screenshot content**: Should capture specific aspects of the GitHub Project board:
   - Board column structure (To Do, In Progress, Done)
   - Sprint timeline visualization
   - Task organization and progress indicators

4. **Additional features**: Any specific achievements or outcomes to highlight in the About section?

---

## Next Steps

1. ✅ Design approved by user
2. ⏳ Spec review loop (dispatch spec-document-reviewer subagent)
3. ⏳ User reviews final spec document
4. ⏳ Transition to implementation with writing-plans skill
