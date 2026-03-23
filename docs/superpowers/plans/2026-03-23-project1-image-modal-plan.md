# Image Modal for Project 1 Visualizations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add interactive modal system to project1.html with dashed hover indicators and click-to-open image modal with captions.

**Architecture:** CSS handles hover states, vanilla JS manages modal open/close logic, minimal dependencies matching existing codebase patterns.

**Tech Stack:** HTML5, CSS3 (with animations), Vanilla JavaScript (ES6+)

---

## File Structure Overview

| File | Action | Lines Changed | Responsibility |
|------|--------|---------------|----------------|
| `projects/project1.html` | Modify | +4 lines | Add modal structure, add hoverable class to figures |
| `css/styles.css` | Modify | +80 lines | Hover styles, modal overlay, animations, styling |
| `js/main.js` | Modify | +45 lines | Event handlers, modal state management |

---

### Task 1: Add Modal HTML Structure

**Files:**
- Modify: `projects/project1.html:90-95` (add before closing body tag)

- [ ] **Step 1: Read current project1.html structure**

```bash
cd /home/takosaga/Projects/porfolio/projects
head -n 95 project1.html | tail -n 20
```

Expected: See the visualizations-grid section and closing article/main tags

- [ ] **Step 2: Add modal element before closing body tag**

Edit `projects/project1.html` to add after line 93 (before `</footer>`):

```html
<div id="imageModal" class="modal" role="dialog" aria-modal="true" aria-labelledby="modalCaption">
    <div class="modal-content">
        <button class="modal-close" type="button" aria-label="Close modal">&times;</button>
        <img id="modalImage" class="modal-image" alt="">
        <p id="modalCaption"></p>
    </div>
</div>
```

- [ ] **Step 3: Add hoverable class to existing figure elements**

Edit `projects/project1.html`, add `class="hoverable"` to each `<figure>` tag in the visualizations-grid (lines 68-80):

Line 68: `<figure class="hoverable">`
Line 72: `<figure class="hoverable">`  
Line 75: `<figure class="hoverable">`

- [ ] **Step 4: Verify changes**

```bash
grep -n "hoverable\|imageModal" projects/project1.html
```

Expected: Should show modal div and hoverable classes on figures

- [ ] **Step 5: Commit changes**

```bash
cd /home/takosaga/Projects/porfolio
git add projects/project1.html
git commit -m "feat(project1): add image modal HTML structure with hoverable class"
```

---

### Task 2: Add CSS Styles for Hover and Modal

**Files:**
- Modify: `css/styles.css` (add after line 289, before closing brace)

- [ ] **Step 1: Read existing styles.css to find insertion point**

```bash
tail -n 20 /home/takosaga/Projects/porfolio/css/styles.css
```

Expected: See media queries and closing braces

- [ ] **Step 2: Add hover styles and modal CSS**

Edit `css/styles.css` to add after line 289 (after the second media query):

```css
/* Modal Styles */
.hoverable {
    cursor: pointer;
}

.hoverable:hover {
    outline: 3px dashed var(--accent);
    outline-offset: 4px;
}

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.modal-open .modal {
    display: flex;
    opacity: 1;
}

.modal-content {
    background-color: var(--bg-primary);
    padding: 2rem;
    border-radius: 8px;
    max-width: 90%;
    max-height: 90vh;
    position: relative;
    animation: modalSlideIn 0.3s ease;
}

.modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: var(--text-secondary);
    line-height: 1;
    transition: color 0.2s;
}

.modal-close:hover {
    color: var(--text-primary);
}

.modal-image {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
}

#modalCaption {
    margin-top: 1.5rem;
    font-size: 1.125rem;
    text-align: center;
    color: var(--text-secondary);
    line-height: 1.4;
}

@keyframes modalSlideIn {
    from {
        transform: translateY(-20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

/* Modal responsive adjustments */
@media (max-width: 768px) {
    .modal-content {
        padding: 1rem;
        max-height: 95vh;
    }
    
    .modal-close {
        font-size: 1.5rem;
    }
    
    #modalCaption {
        font-size: 1rem;
    }
}
```

- [ ] **Step 3: Verify CSS was added**

```bash
grep -n "hoverable\|\.modal" /home/takosaga/Projects/porfolio/css/styles.css | head -20
```

Expected: Should show hoverable and modal class definitions

- [ ] **Step 4: Run linter if available**

```bash
cd /home/takosaga/Projects/porfolio
npm run lint 2>/dev/null || echo "No lint command found"
```

- [ ] **Step 5: Commit changes**

```bash
git add css/styles.css
git commit -m "style(project1): add modal hover and modal overlay CSS styles"
```

---

### Task 3: Add JavaScript Event Handlers

**Files:**
- Modify: `js/main.js` (add at end of file)

- [ ] **Step 1: Read current main.js to find insertion point**

```bash
tail -n 20 /home/takosaga/Projects/porfolio/js/main.js
```

Expected: See existing initialization code or closing braces

- [ ] **Step 2: Add modal JavaScript at end of file**

Edit `js/main.js` to append before the final closing brace:

```javascript
// Image Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const modalClose = document.querySelector('.modal-close');
    
    let currentlyOpenFigure = null;

    // Open modal on hoverable figure click
    document.querySelectorAll('.hoverable').forEach(figure => {
        figure.addEventListener('click', () => {
            if (currentlyOpenFigure === figure) return; // Prevent rapid clicks
            
            currentlyOpenFigure = figure;
            const img = figure.querySelector('img');
            
            if (img && img.src) {
                modalImage.src = img.src;
            }
            
            if (figure.querySelector('figcaption')) {
                modalCaption.textContent = figure.querySelector('figcaption').textContent;
            }
            
            body.classList.add('modal-open');
        });
    });

    // Close modal handlers
    const closeModal = () => {
        body.classList.remove('modal-open');
        currentlyOpenFigure = null;
    };

    // Close button click
    if (modalClose) {
        modalClose.addEventListener('click', (e) => {
            e.stopPropagation();
            closeModal();
        });
    }

    // Overlay click (close outside modal content)
    if (modal) {
        modal.addEventListener('click', () => {
            body.classList.remove('modal-open');
            currentlyOpenFigure = null;
        });
    }

    // ESC key handler
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            body.classList.remove('modal-open');
            currentlyOpenFigure = null;
        }
    });

    console.log('Image modal initialized');
});
```

- [ ] **Step 3: Verify JavaScript was added**

```bash
tail -n 50 /home/takosaga/Projects/porfolio/js/main.js | head -45
```

Expected: Should see the modal initialization code

- [ ] **Step 4: Check for syntax errors**

```bash
node --check /home/takosaga/Projects/porfolio/js/main.js || echo "Syntax error found"
```

- [ ] **Step 5: Commit changes**

```bash
git add js/main.js
git commit -m "feat(project1): add modal event handlers with ESC and overlay close"
```

---

### Task 4: Manual Testing

**Files:**
- No file changes, verification only

- [ ] **Step 1: Start local server**

```bash
cd /home/takosaga/Projects/porfolio/projects
python3 -m http.server 8000 &
```

- [ ] **Step 2: Open browser and test hover states**

Navigate to `http://localhost:8000/project1.html`

Test checklist:
- [ ] Hover over LIME image → dashed blue outline appears
- [ ] Hover over SHAP image → dashed blue outline appears
- [ ] Hover over comparison image → dashed blue outline appears
- [ ] Cursor changes to pointer on hover

- [ ] **Step 3: Test modal opening**

Click each image and verify:
- [ ] Modal fades in smoothly (300ms animation)
- [ ] Image displays at full size within modal
- [ ] Caption appears below image, centered, larger font
- [ ] Close button (×) visible in top-right corner

- [ ] **Step 4: Test modal closing**

Test all close methods:
- [ ] Click close button (×) → modal closes smoothly
- [ ] Click outside modal box (on dark overlay) → modal closes
- [ ] Press ESC key → modal closes

- [ ] **Step 5: Test keyboard accessibility**

- [ ] Use TAB key to navigate between images
- [ ] Use ENTER or SPACE to open modal from keyboard
- [ ] Verify focus returns to clicked image after closing

- [ ] **Step 6: Test responsive behavior**

Resize browser to mobile width (<768px):
- [ ] Modal still centers correctly
- [ ] Images scale appropriately
- [ ] Close button remains accessible

- [ ] **Step 7: Commit test results**

```bash
cd /home/takosaga/Projects/porfolio
git add .
git commit -m "test(project1): verify modal functionality and accessibility"
```

---

### Task 5: Final Review and Integration Check

**Files:**
- No changes expected

- [ ] **Step 1: Verify no console errors**

Open browser dev tools (F12) → Console tab, check for any warnings/errors after opening modal.

- [ ] **Step 2: Cross-browser testing**

Quick test on multiple browsers if available:
- [ ] Chrome/Edge - Modal works correctly
- [ ] Firefox - Modal works correctly
- [ ] Safari - Modal works correctly (if available)

- [ ] **Step 3: Check CSS specificity doesn't conflict**

```bash
grep -n "\.visualizations-grid" /home/takosaga/Projects/porfolio/css/styles.css
```

Verify hoverable styles don't interfere with existing grid layout.

- [ ] **Step 4: Verify no duplicate event listeners**

Check main.js structure ensures listeners are only added once per DOMContentLoaded cycle.

- [ ] **Step 5: Final commit of all changes**

```bash
cd /home/takosaga/Projects/porfolio
git status
```

Review staged files, then:

```bash
git add projects/project1.html css/styles.css js/main.js
git commit -m "feat(project1): implement interactive image modal for visualizations"
```

---

## Post-Implementation Checklist

- [ ] Modal opens on image click ✓
- [ ] Dashed outline appears on hover ✓
- [ ] Full-size images display correctly ✓
- [ ] Captions appear below images ✓
- [ ] Close button works ✓
- [ ] Clicking overlay closes modal ✓
- [ ] ESC key closes modal ✓
- [ ] Keyboard navigation (TAB, ENTER, ESC) works ✓
- [ ] Modal is accessible to screen readers ✓
- [ ] Responsive on mobile devices ✓
- [ ] No console errors ✓

---

## Rollback Plan

If issues arise:

```bash
# Revert to last known good state
cd /home/takosaga/Projects/porfolio
git reset --hard HEAD~1
```

Or specific file rollback:

```bash
git checkout HEAD~1 -- projects/project1.html css/styles.css js/main.js
```

---

## Related Documents

- Spec: `docs/superpowers/specs/2026-03-23-project1-image-modal-design.md`
- Project Overview: `docs/superpowers/plans/2026-03-23-master-thesis-project1.md`
