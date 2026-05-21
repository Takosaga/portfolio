# Timeline Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a combined experience and education timeline section to the home page with circular image placeholders and a left-edge connecting line.

**Architecture:** A new `<section id="timeline">` inserted after tech-skills in index.html, with BEM-like CSS classes scoped to the timeline namespace. No JavaScript changes needed — pure HTML/CSS.

**Tech Stack:** Vanilla HTML5, CSS3 with CSS variables from existing `:root`.

---

### Task 1: Add Timeline navigation link

**Files:**
- Modify: `index.html:22-27` (nav-menu list)

- [ ] **Step 1: Add "Timeline" nav link**

In `index.html`, inside the `<ul class="nav-menu">` block, add a new `<li>` between "Tech Skills" and "Contact":

```html
<li><a href="#timeline" class="nav-link">Timeline</a></li>
```

The full nav-menu should look like:
```html
<ul class="nav-menu">
    <li><a href="#about" class="nav-link">About</a></li>
    <li><a href="#projects" class="nav-link">Projects</a></li>
    <li><a href="#tech-skills" class="nav-link">Tech Skills</a></li>
    <li><a href="#timeline" class="nav-link">Timeline</a></li>
    <li><a href="contact.html">Contact</a></li>
</ul>
```

- [ ] **Step 2: Verify in browser**

Open `index.html` in a browser. Confirm the "Timeline" link appears between "Tech Skills" and "Contact" in the top navigation bar.

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add timeline nav link"
```

---

### Task 2: Add Timeline section HTML structure

**Files:**
- Modify: `index.html` — insert after tech-skills section (after line 105, before line 107)

- [ ] **Step 1: Insert the timeline section**

Insert the following HTML block between the closing `</section>` of tech-skills (line 105) and the opening `<section id="shiny-dashboard">` (line 107):

```html
        <section id="timeline" class="container">
            <h2>Experience &amp; Education</h2>
            <div class="timeline">
                <article class="timeline-item">
                    <img src="images/accenture.jpg" alt="Accenture Baltics" class="timeline-avatar" loading="lazy">
                    <div class="timeline-content">
                        <h3 class="timeline-title">AI Engineering Bootcamp &amp; Internship</h3>
                        <p class="timeline-location">Accenture Baltics (Riga, Latvia · Hybrid)</p>
                        <p class="timeline-date">Feb 2026 – Present</p>
                    </div>
                </article>
                <article class="timeline-item">
                    <img src="images/tsi-uwe.jpg" alt="TSI / UWE" class="timeline-avatar" loading="lazy">
                    <div class="timeline-content">
                        <h3 class="timeline-title">Master of Science - MS, Computer Science</h3>
                        <p class="timeline-location">Transport and Telecommunication Institute (TSI) / University of the West of England (UWE) (Riga, Latvia · Hybrid)</p>
                        <p class="timeline-date">Sep 2023 – Jul 2025</p>
                    </div>
                </article>
                <article class="timeline-item">
                    <img src="images/isr.jpg" alt="ISR" class="timeline-avatar" loading="lazy">
                    <div class="timeline-content">
                        <h3 class="timeline-title">Computer Science and Math Teacher</h3>
                        <p class="timeline-location">ISR - International School of Riga (Riga, Latvia)</p>
                        <p class="timeline-date">Aug 2021 – Jul 2023</p>
                    </div>
                </article>
                <article class="timeline-item">
                    <img src="images/harlandale.jpg" alt="Harlandale ISD" class="timeline-avatar" loading="lazy">
                    <div class="timeline-content">
                        <h3 class="timeline-title">Math and Computer Science Teacher</h3>
                        <p class="timeline-location">Harlandale ISD (San Antonio, Texas, United States)</p>
                        <p class="timeline-date">Aug 2014 – Jun 2021</p>
                    </div>
                </article>
                <article class="timeline-item">
                    <img src="images/utsa.jpg" alt="UTSA" class="timeline-avatar" loading="lazy">
                    <div class="timeline-content">
                        <h3 class="timeline-title">Bachelor of Science - BS, Math</h3>
                        <p class="timeline-location">The University of Texas at San Antonio (San Antonio, Texas, United States)</p>
                        <p class="timeline-date">Jan 2012 – May 2014</p>
                    </div>
                </article>
            </div>
        </section>
```

- [ ] **Step 2: Verify in browser**

Open `index.html` in a browser. Confirm the section appears after "Tech Skills" with all 5 entries listed, each showing placeholder images (broken image icons are expected until real images are added). The `<h2>` should read "Experience & Education".

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add timeline section HTML with 5 entries"
```

---

### Task 3: Add Timeline CSS styles

**Files:**
- Modify: `css/styles.css` — append at end of file (before the final `@media (prefers-reduced-motion)` block, or after it)

- [ ] **Step 1: Add timeline section styling**

Append the following CSS to the end of `css/styles.css`:

```css
/* Timeline Section */
#timeline {
    padding: 5rem 0;
}

#timeline h2 {
    font-family: var(--font-heading);
    text-align: left;
    margin-bottom: 3rem;
    font-size: clamp(1.5rem, 4vw, 2rem);
}

.timeline {
    position: relative;
    padding-left: 3rem;
    max-width: 800px;
    margin: 0 auto;
}

/* Left-edge connecting line */
.timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: var(--border);
}

.timeline-item {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
    position: relative;
}

.timeline-item:last-child {
    margin-bottom: 0;
}

.timeline-avatar {
    width: clamp(60px, 15vw, 80px);
    height: clamp(60px, 15vw, 80px);
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
    background-color: var(--bg-secondary);
    border: 3px solid var(--bg-primary);
    box-shadow: var(--shadow-sm);
    position: relative;
    z-index: 1;
}

.timeline-content {
    padding-top: 0.5rem;
    flex: 1;
}

.timeline-title {
    font-family: var(--font-heading);
    font-size: 1.125rem;
    font-weight: 700;
    margin: 0 0 0.25rem;
    line-height: 1.3;
}

.timeline-location {
    color: var(--text-secondary);
    font-size: 0.9375rem;
    margin: 0 0 0.25rem;
}

.timeline-date {
    color: var(--text-secondary);
    font-size: 0.875rem;
    margin: 0;
}

@media (max-width: 768px) {
    #timeline {
        padding: 3rem 0;
    }

    .timeline {
        padding-left: 2.5rem;
    }

    .timeline-item {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
    }

    .timeline-content {
        padding-top: 0;
    }

    .timeline-title {
        font-size: 1rem;
    }
}
```

- [ ] **Step 2: Verify in browser**

Open `index.html` in a browser. Confirm:
- A thin vertical line runs along the left edge of the timeline
- Each entry has a circular avatar on the left, with content to its right
- Titles are bold, location and dates are in secondary text color
- Spacing between entries is consistent (~2.5rem)
- On a narrow viewport (resize browser or use dev tools), avatars stack above content

- [ ] **Step 3: Commit**

```bash
git add css/styles.css
git commit -m "feat: add timeline CSS with left-edge line and avatar styling"
```

---

### Task 4: Add Timeline active nav state support

**Files:**
- Modify: `js/main.js` — check if active nav highlighting logic exists; if so, add `#timeline` to the list of section IDs

- [ ] **Step 1: Check existing JS for scroll spy / active nav logic**

Read `js/main.js`. If there is code that highlights the active nav link based on scroll position (e.g., using `IntersectionObserver` or scroll event listeners), add `#timeline` to the list of section IDs being observed. If no such logic exists, skip this task — the existing smooth-scroll and mobile toggle already work without modification.

- [ ] **Step 2: Verify in browser**

If changes were made: scroll through the page and confirm the "Timeline" nav link highlights when the timeline section is in view.

- [ ] **Step 3: Commit** (only if JS was modified)

```bash
git add js/main.js
git commit -m "feat: add timeline to active nav scroll spy"
```

---

## Image Placeholder Notes

After the above tasks are complete, add images to the `images/` directory with these filenames:

| File | Content |
|------|---------|
| `images/accenture.jpg` | Accenture logo or office photo |
| `images/tsi-uwe.jpg` | TSI or UWE logo/emblem |
| `images/isr.jpg` | ISR school logo or photo |
| `images/harlandale.jpg` | Harlandale ISD logo or campus photo |
| `images/utsa.jpg` | UTSA logo or campus photo |

All images should be square-cropped for best avatar display. The CSS uses `object-fit: cover` so non-square images will be cropped to fill the circle.
