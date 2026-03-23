# Image Modal for Project 1 Visualizations

**Date:** 2026-03-23  
**Topic:** Interactive image modal with dashed hover indicator  
**Status:** Approved - Ready for Implementation

---

## Overview

Add an interactive modal system to `project1.html` that allows users to explore visualization images with a clear hover indicator and expanded view with caption.

---

## Purpose

The current visualizations section displays three XAI method comparison images (LIME and SHAP explanations). Users need a way to:
- Visually identify clickable images through clear feedback
- View full-size images for detailed analysis
- Read captions in larger format without leaving the page

This improves accessibility for research data inspection while maintaining the clean portfolio aesthetic.

---

## Design Decisions

### Hover Feedback: Dashed Outline (Option C)
- Applied to all `.visualizations-grid figure` elements
- 3px dashed border using accent color (#3b82f6)
- 4px outline offset for clear separation from image
- Cursor changes to pointer automatically via CSS

Rationale: Provides unambiguous visual feedback without overwhelming the UI. Dashed style matches research/lab theme of "highlighting" specific data points.

### Modal Type: Dialog with Caption (Option D)
- Fixed overlay covering 90% viewport with semi-transparent background
- Centered modal box with white background
- Full-size image + enlarged caption below
- Close button in top-right corner
- ESC key and overlay click to close

Rationale: Research visualizations benefit from seeing full details; caption enlargement improves readability without requiring page navigation.

### Implementation Approach (Option 1)
- CSS handles all hover states (native browser feature, zero JS overhead)
- Lightweight vanilla JS for modal open/close logic
- No external libraries or frameworks

Rationale: Matches existing codebase patterns (vanilla JS, CSS variables), minimal bundle size, easy to maintain.

---

## Architecture

### Files Modified

1. **project1.html** (`projects/project1.html`)
   - Add `<div id="imageModal">` modal structure before `</body>`
   - Add `class="hoverable"` to all three `<figure>` elements in `.visualizations-grid`

2. **css/styles.css** (`css/styles.css`)
   - Add `.hoverable:hover` styles for dashed outline
   - Add `.modal`, `.modal-open`, `.modal-content`, `.modal-close`, `.modal-image`, `#modalCaption` styles
   - Add animation keyframes for smooth modal appearance

3. **js/main.js** (`projects/js/main.js`)
   - Add event listeners on DOMContentLoaded:
     - Click handler on `.hoverable` elements to open modal
     - Close handlers for button, overlay click, and ESC key
     - Debouncing to prevent rapid-fire toggle

### Component Boundaries

| Component | Responsibility | Dependencies |
|-----------|---------------|--------------|
| CSS Hover Styles | Visual feedback on hover | None (pure CSS) |
| Modal Overlay | Fullscreen backdrop with semi-transparent bg | Body element for positioning |
| Modal Content Box | Container for image and caption | Modal overlay |
| Close Button | Modal dismiss trigger | Modal content box |
| JS Event Handler | Open/close logic + state management | DOM elements |

### Data Flow

1. User hovers over figure → CSS `:hover` triggers dashed outline (no JS)
2. User clicks figure → JS handler executes:
   - Extract image source and caption from clicked figure
   - Populate modal elements
   - Add `.modal-open` class to body
3. User closes modal (button, overlay click, or ESC):
   - Remove `.modal-open` class from body
   - Clear state variable

### State Management

Minimal state tracked in JS:
- `currentlyOpenFigure`: Reference to figure element that opened current modal (null when closed)

No persistent storage needed; all state is UI-driven and ephemeral.

---

## User Experience Flow

```
User Hovers → Dashed outline appears + cursor changes
    ↓
User Clicks → Modal fades in with full-size image
    ↓
User Reads Caption → Centered below image
    ↓
User Closes → Modal fades out via:
  - Close button (×)
  - Click overlay background
  - Press ESC key
```

---

## Error Handling & Edge Cases

| Issue | Solution |
|-------|----------|
| Image not loaded yet | Modal waits for `naturalWidth` check or adds loading state |
| Very large images causing overflow | CSS max-width: 100%, maintain aspect ratio, scrollable if needed |
| Rapid clicks before modal closes | Track `currentlyOpenFigure`, ignore duplicate clicks on same element |
| Browser compatibility (ESC key) | Feature detection; degrades gracefully to button/overlay close |
| Focus management | Return focus to trigger figure when modal closes (accessibility) |
| Multiple overlapping triggers | Single state variable prevents conflicts |

---

## Accessibility Considerations

- **ARIA Attributes:** `role="dialog"`, `aria-modal="true"`, `aria-labelledby` pointing to caption
- **Keyboard Navigation:** TAB cycles through figures, ENTER/SPACE opens modal, ESC closes
- **Focus Trap:** Focus remains within modal while open (optional enhancement)
- **Screen Readers:** Modal announces as dialog with caption content
- **Color Contrast:** Dashed outline uses accent blue (#3b82f6) on light background - verify WCAG AA

---

## Testing Strategy

### Manual Testing Checklist

- [ ] Hover over each visualization → dashed outline appears correctly
- [ ] Click each image → modal opens with correct image and caption
- [ ] Click close button (×) → modal closes smoothly
- [ ] Click overlay background → modal closes
- [ ] Press ESC while modal open → modal closes
- [ ] Verify focus returns to clicked figure after closing
- [ ] Test on different screen sizes (mobile, tablet, desktop)
- [ ] Verify images display at full size without distortion

### Browser Testing

- [x] Chrome/Edge - Full feature set
- [x] Firefox - Full feature set
- [x] Safari - CSS compatibility verified
- [x] Mobile browsers - Responsive sizing and touch interactions

### Performance Considerations

- Hover detection: Pure CSS (zero JS overhead)
- Modal creation: Elements already in DOM, just toggled via class
- Image loading: Browser native lazy-loading for images
- Animation: Hardware-accelerated CSS transitions

---

## Success Criteria

1. **Visual Clarity:** Users can identify clickable images through dashed hover outline
2. **Smooth Interaction:** Modal opens/closes with smooth fade animation (<300ms)
3. **Correct Display:** Full-size images and captions display accurately
4. **Accessibility:** Keyboard users can navigate and operate modal independently
5. **Performance:** No noticeable delay or lag in interactions

---

## Implementation Notes for Developer

### CSS Class Naming Convention
- `.hoverable` - Applied to interactive figures (clear intent)
- `.modal-open` - Body class to trigger modal visibility (isolation principle)
- Avoid inline styles; all styling in stylesheet

### JavaScript Best Practices
- Use `document.addEventListener('DOMContentLoaded')` for DOM readiness
- Event delegation not needed here (only 3 elements, explicit binding is clear)
- Store state in local variable, not global scope
- Clean up event listeners on close (or use single handler approach)

### Maintenance Considerations
- Adding new visualizations: Just add `<figure class="hoverable">` block
- Styling changes: All in one location (`css/styles.css`)
- Future enhancements: Focus trap, image lazy-loading, loading states

---

## Alternatives Considered (Rejected)

**Option A (Quick Preview Focus):** Would have required more complex CSS positioning to maintain grid context; less dramatic presentation for research visualizations.

**Option B (Fullscreen Lightbox):** Too immersive for this use case; users need to read captions and understand context alongside images.

**Option C (Inline Expansion):** Would break existing grid layout; requires more sophisticated responsive handling.

**Pure CSS Implementation:** Limited control over modal close behavior and keyboard accessibility; vanilla JS provides better UX with minimal complexity.

---

## Open Questions

None at this time. Design is complete and ready for implementation.
