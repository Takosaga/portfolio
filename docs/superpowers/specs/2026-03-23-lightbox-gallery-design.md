# Lightbox Gallery Design Spec

**Date:** 2026-03-23  
**Project:** Portfolio - Project1 (XAI Research Visualization)  
**Goal:** Add lightbox with navigation for research visualization images

---

## Overview

Add a full-screen lightbox modal to `projects/project1.html` that allows users to view research visualizations in full size with navigation controls. Clicking any image opens the lightbox; users can navigate between images using on-screen buttons or keyboard shortcuts.

---

## Scope

### In Scope
- Lightbox overlay functionality for `.visualizations-grid` images
- Previous/Next navigation buttons
- Keyboard navigation (ArrowLeft, ArrowRight, Escape)
- Click-outside-to-close behavior
- Smooth fade animations

### Out of Scope
- Separate full-size image assets
- Thumbnail strip below lightbox
- Image captions in lightbox
- Dark mode support

---

## Architecture

### File Changes

**Modified:** `projects/project1.html`
- Add lightbox HTML markup after `.visualizations-grid` section
- Add lightbox CSS styles (inline or `<style>` block)
- Add JavaScript for lightbox behavior

### Component Structure

```
project1.html
├── .visualizations-grid (existing)
│   ├── figure.img-1
│   ├── figure.img-2  
│   └── figure.img-3
└── #lightbox (new)
    ├── .close-lightbox
    ├── .nav-btn.prev
    ├── .lightbox-img
    └── .nav-btn.next
```

---

## Implementation Details

### HTML Structure

Add after the `.visualizations-grid` closing `</div>`:

```html
<div id="lightbox" class="lightbox" role="dialog" aria-modal="true" aria-labelledby="lightbox-title">
    <span class="close-lightbox" aria-label="Close lightbox">&times;</span>
    <button class="nav-btn prev" aria-label="Previous image">&larr;</button>
    <img src="" alt="Full-size visualization" id="lightbox-img">
    <button class="nav-btn next" aria-label="Next image">&rarr;</button>
</div>
```

### CSS Styles

Add within existing `<style>` block or new style section:

#lightbox img {
    max-width: 90%;
    max-height: 85vh;
    border-radius: 8px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
}

.nav-btn:hover {
    background: rgba(255, 255, 255, 0.3);
}

.prev { left: 30px; }
.next { right: 30px; }

/* Mobile Responsive */
@media (max-width: 768px) {
    .prev { left: 15px; }
    .next { right: 15px; }
    
    .nav-btn {
        padding: 14px 12px;
        font-size: 24px;
    }
}
```

### JavaScript Implementation

Add before `</body>` (after existing `<script src="../js/main.js">`):

```javascript
// Lightbox Gallery
(function() {
    'use strict';

    const images = [
        './images/LIME_TP_18694_seed_3279.png',
        './images/SHAP_TP_18694_seed_3279.png',
        './images/Results.png'
    ];

    let currentIndex = 0;
    
    // Query selectors for DOM elements
    const LIGHTBOX_ID = 'lightbox';
    const LIGHTBOX_IMG_ID = 'lightbox-img';
    
    let lightbox, lightboxImg, closeBtn, prevBtn, nextBtn;

    // Initialize DOM references when ready
    function initDOM() {
        lightbox = document.getElementById(LIGHTBOX_ID);
        lightboxImg = document.getElementById(LIGHTBOX_IMG_ID);
        closeBtn = document.querySelector('.close-lightbox');
        prevBtn = document.querySelector('.prev');
        nextBtn = document.querySelector('.next');
        
        if (!lightbox) return; // Exit if elements not found
        
        attachEventListeners();
    }

    function attachEventListeners() {
        // Close button
        closeBtn.addEventListener('click', closeLightbox);
        
        // Navigation buttons
        prevBtn.addEventListener('click', showPreviousImage);
        nextBtn.addEventListener('click', showNextImage);
        
        // Backdrop click (click outside image)
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
        
        // Click listeners to existing figures
        document.querySelectorAll('.visualizations-grid figure').forEach((figure, index) => {
            figure.addEventListener('click', () => openLightbox(index));
        });
    }

    // Open Lightbox with focus management
    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex];
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus management for accessibility
        if (closeBtn && closeBtn.focus) {
            closeBtn.focus();
        }
    }

    // Close Lightbox with focus return
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        
        // Return focus to element that triggered close
        if (closeBtn && closeBtn.blur) {
            closeBtn.blur();
        }
    }

    // Show Next Image
    function showNextImage(e) {
        if (e) e.preventDefault();
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex];
    }

    // Show Previous Image
    function showPreviousImage(e) {
        if (e) e.preventDefault();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex];
    }

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox || !lightbox.classList.contains('active')) return;

        switch (e.key) {
            case 'ArrowLeft': showPreviousImage(e); break;
            case 'ArrowRight': showNextImage(e); break;
            case 'Escape': closeLightbox(); break;
        }
    });

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDOM);
    } else {
        initDOM();
    }

})();
```

---

## Data Flow

1. **Initialization**: Script runs, populates `images` array from actual image paths
2. **Open**: User clicks a `<figure>` → `openLightbox(index)` called → adds `.active` class to lightbox
3. **Navigate**: 
   - Button click → function updates `currentIndex`, sets `lightboxImg.src`
   - Keyboard press → same functions triggered via event listener
4. **Close**: Close button/backdrop/ESC → removes `.active` class, restores scroll

---

## Error Handling

| Scenario | Behavior |
|----------|----------|
| Image fails to load | Browser shows broken image icon; lightbox still functional |
| Navigate past last image | Wraps around to first image |
| Navigate before first image | Wraps around to last image |
| Keyboard pressed when closed | No action taken |
| Lightbox element missing | Script silently fails (safe degradation) |

---

## Testing Checklist

### Functional Tests
- [ ] Clicking any thumbnail opens lightbox with that image
- [ ] Previous button navigates backwards through images
- [ ] Next button navigates forwards through images
- [ ] ArrowLeft key navigates to previous image
- [ ] ArrowRight key navigates to next image
- [ ] Escape key closes lightbox
- [ ] Clicking backdrop (outside image) closes lightbox
- [ ] Close button (×) closes lightbox
- [ ] Background scroll is disabled during lightbox, re-enabled when closed

### Visual Tests
- [ ] Lightbox is centered on screen
- [ ] Image maintains aspect ratio with max-width/max-height constraints
- [ ] Border-radius matches site style (8px)
- [ ] Navigation buttons positioned correctly (40px from edges)
- [ ] Animations are smooth (no jarring transitions)

### Accessibility Tests
- [ ] Lightbox has `role="dialog"` and `aria-modal="true"`
- [ ] Buttons have descriptive `aria-label` attributes
- [ ] Close button is focusable via Tab key
- [ ] Keyboard navigation works without mouse

---

## Acceptance Criteria

1. **User can open lightbox** by clicking any visualization thumbnail
2. **Navigation works bidirectionally** between all images using both buttons and keyboard
3. **Closing methods work**: close button, backdrop click, ESC key
4. **Performance is acceptable**: No noticeable lag when opening/closing or navigating
5. **Mobile responsive**: Lightbox displays correctly on smaller screens

---

## Dependencies

- None (pure HTML/CSS/JavaScript)
- Assumes images exist at specified paths in `./images/` directory

---

## Rollback Plan

If issues arise:
1. Remove the lightbox JavaScript section from `project1.html`
2. Delete or comment out the CSS styles
3. Remove the `<div id="lightbox">` markup
4. Test page loads normally without lightbox

---

## Future Enhancements (Out of Scope for This Spec)

- [ ] Separate full-size image assets for better quality
- [ ] Image captions/titles in lightbox
- [ ] Thumbnail strip navigation below main image
- [ ] Keyboard shortcut customization
- [ ] Dark mode variant styling
- [ ] Loading spinner for large images
