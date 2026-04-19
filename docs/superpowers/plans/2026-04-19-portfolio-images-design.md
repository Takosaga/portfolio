# Portfolio Index Images Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add relevant placeholder images to hero section and project cards on index.html, plus selfie placeholder

**Architecture:** 
- Hero section: Circular avatar image positioned left of name/bio text
- Project cards: 16:9 aspect ratio images at top of each card with gradient overlay
- Use Unsplash source URLs as placeholders matching project themes
- Update CSS for image styling and layout adjustments

**Tech Stack:** HTML, CSS (existing styles.css), Unsplash placeholder images

---

### Task 1: Create Placeholder Images in images Directory

**Files:**
- Create: `/home/takosaga/Projects/portfolio/images/selfie-placeholder.jpg`
- Create: `/home/takosaga/Projects/portfolio/images/project1-xai-visualization.jpg`
- Create: `/home/takosaga/Projects/portfolio/images/project2-medical-cells.jpg`
- Create: `/home/takosaga/Projects/portfolio/images/project3-vehicles.jpg`

- [ ] **Step 1: Download selfie placeholder**

Command:
```bash
curl -o /home/takosaga/Projects/portfolio/images/selfie-placeholder.jpg "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces&sat=-100"
```

Expected: 400x400px portrait photo of person (placeholder)

- [ ] **Step 2: Download XAI/ML visualization placeholder**

Command:
```bash
curl -o /home/takosaga/Projects/portfolio/images/project1-xai-visualization.jpg "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=450&fit=crop"
```

Expected: 800x450px abstract data science/AI visualization

- [ ] **Step 3: Download medical/cell detection placeholder**

Command:
```bash
curl -o /home/takosaga/Projects/portfolio/images/project2-medical-cells.jpg "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=450&fit=crop"
```

Expected: 800x450px medical/microscope/cell imagery

- [ ] **Step 4: Download vehicle/tech placeholder**

Command:
```bash
curl -o /home/takosaga/Projects/portfolio/images/project3-vehicles.jpg "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=450&fit=crop"
```

Expected: 800x450px vehicle/technology imagery

- [ ] **Step 5: Verify all images downloaded**

Command:
```bash
ls -lh /home/takosaga/Projects/portfolio/images/
```

Expected: All 4 image files present with reasonable file sizes

---

### Task 2: Update Hero Section HTML

**Files:**
- Modify: `/home/takosaga/Projects/portfolio/index.html:28-31`

- [ ] **Step 1: Add image wrapper to hero section**

Replace lines 28-31 with:
```html
<section id="about" class="hero container">
    <div class="hero-content">
        <img src="images/selfie-placeholder.jpg" alt="Gonzalo Gamez" class="hero-avatar" loading="lazy">
        <div class="hero-text">
            <h1>Gonzalo Gamez</h1>
            <p class="bio">AI Engineer in Riga, Latvia</p>
        </div>
    </div>
</section>
```

- [ ] **Step 2: Verify HTML structure**

Command:
```bash
sed -n '28,35p' /home/takosaga/Projects/portfolio/index.html
```

Expected: New hero section with image wrapper structure

---

### Task 3: Update Project Cards HTML

**Files:**
- Modify: `/home/takosaga/Projects/portfolio/index.html:33-66`

- [ ] **Step 1: Update project card 1 with image**

Replace project card 1 (lines 36-44) with:
```html
<article class="project-card">
    <a href="projects/project1.html" class="project-link">
        <div class="project-image-wrapper">
            <img src="images/project1-xai-visualization.jpg" alt="XAI Methods in Hate Speech Detection" class="project-image" loading="lazy">
        </div>
        <h3>XAI Methods in Hate Speech Detection</h3>
        <p>Evaluating LIME and SHAP explanation consistency using CardiffNLP RoBERTa for automated content moderation transparency across multiple platforms.</p>
        <span class="tech-badge">Python</span>
        <span class="tech-badge">Transformers</span>
        <span class="tech-badge">LIME & SHAP</span>
    </a>
</article>
```

- [ ] **Step 2: Update project card 2 with image**

Replace project card 2 (lines 46-54) with:
```html
<article class="project-card">
    <a href="projects/project2.html" class="project-link">
        <div class="project-image-wrapper">
            <img src="images/project2-medical-cells.jpg" alt="Ki-67 Cell Detection Backend" class="project-image" loading="lazy">
        </div>
        <h3>Ki-67 Cell Detection Backend</h3>
        <p>AI-powered automated Ki-67 proliferation assessment from pathology slides using YOLOv11 computer vision and FastAPI.</p>
        <span class="tech-badge">Python</span>
        <span class="tech-badge">FastAPI</span>
        <span class="tech-badge">YOLOv11</span>
    </a>
</article>
```

- [ ] **Step 3: Update project card 3 with image**

Replace project card 3 (lines 56-64) with:
```html
<article class="project-card">
    <a href="projects/project3.html" class="project-link">
        <div class="project-image-wrapper">
            <img src="images/project3-vehicles.jpg" alt="Vehicle Detection in Riga" class="project-image" loading="lazy">
        </div>
        <h3>Vehicle Detection in Riga</h3>
        <p>Project Manager overseeing YOLOv8 vehicle classification team, implementing agile practices and coordinating cross-functional collaboration.</p>
        <span class="tech-badge">Team Leadership</span>
        <span class="tech-badge">YOLOv8</span>
        <span class="tech-badge">GitHub</span>
    </a>
</article>
```

- [ ] **Step 4: Verify all project cards updated**

Command:
```bash
grep -c "project-image-wrapper" /home/takosaga/Projects/portfolio/index.html
```

Expected: 3 (one for each project card)

---

### Task 4: Add CSS for Hero Section

**Files:**
- Modify: `/home/takosaga/Projects/portfolio/css/styles.css:96-111` (after .bio class)

- [ ] **Step 1: Add hero-content styles**

Insert after line 111 (after `.bio` class):
```css
/* Hero Section with Avatar */
.hero-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
    max-width: 1000px;
    margin: 0 auto;
}

.hero-avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--bg-primary);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
}

.hero-text {
    flex: 1;
    text-align: left;
}

.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

/* Stack avatar and text vertically on mobile */
@media (max-width: 768px) {
    .hero-content {
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
    }

    .hero-avatar {
        width: 150px;
        height: 150px;
    }

    .hero-text {
        text-align: center;
    }

    .hero h1 {
        font-size: 2rem;
    }
}
```

- [ ] **Step 2: Verify CSS added**

Command:
```bash
grep -A 5 "Hero Section with Avatar" /home/takosaga/Projects/portfolio/css/styles.css
```

Expected: New CSS block for hero-content styles

---

### Task 5: Add CSS for Project Images

**Files:**
- Modify: `/home/takosaga/Projects/portfolio/css/styles.css:129-150` (after .project-card styles)

- [ ] **Step 1: Add project-image-wrapper styles**

Insert after line 150 (after `.project-card:hover`):
```css
/* Project Card Images */
.project-image-wrapper {
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 8px 8px 0 0;
    margin-bottom: 1rem;
}

.project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.project-card:hover .project-image {
    transform: scale(1.05);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .project-image-wrapper {
        height: 160px;
    }
}
```

- [ ] **Step 2: Verify CSS added**

Command:
```bash
grep -A 3 "Project Card Images" /home/takosaga/Projects/portfolio/css/styles.css
```

Expected: New CSS block for project-image-wrapper styles

---

### Task 6: Test and Verify

**Files:**
- Test: `/home/takosaga/Projects/portfolio/index.html`

- [ ] **Step 1: Open index.html in browser**

Command:
```bash
xdg-open /home/takosaga/Projects/portfolio/index.html &
```

Expected: Portfolio page opens in default browser with images visible

- [ ] **Step 2: Verify hero section layout**

Check: Selfie image appears as circular avatar next to name/bio on desktop, stacked on mobile

- [ ] **Step 3: Verify project cards layout**

Check: Each project card has image at top, title and description below, images resize on hover

- [ ] **Step 4: Test responsive behavior**

Resize browser window to mobile width (<768px) and verify:
- Hero avatar stacks above text
- Project images resize appropriately

- [ ] **Step 5: Check image loading**

Verify images load with lazy loading (check network tab or inspect element)

---

### Task 7: Commit Changes

**Files:**
- Commit: All modified and created files

- [ ] **Step 1: Stage all changes**

Command:
```bash
git add index.html css/styles.css images/
```

- [ ] **Step 2: Commit with descriptive message**

Command:
```bash
git commit -m "feat: add placeholder images to hero and project cards

- Add circular selfie avatar to hero section
- Add 16:9 project images to each project card
- Use Unsplash placeholders matching project themes
- Add responsive styling for images"
```

- [ ] **Step 3: Verify commit**

Command:
```bash
git log -1 --stat
```

Expected: Shows all 4 image files and 2 modified files in commit

---

## Self-Review Checklist

- [ ] All 4 placeholder images downloaded to images/ directory
- [ ] Hero section HTML updated with avatar image wrapper
- [ ] All 3 project cards updated with image wrappers
- [ ] Hero CSS styles added (flex layout, circular avatar, responsive)
- [ ] Project card image CSS added (wrapper, hover effects, responsive)
- [ ] Images use lazy loading attribute
- [ ] Responsive breakpoints work (<768px)
- [ ] No placeholder text or TODOs in code
- [ ] Images have descriptive alt text
- [ ] Commit message follows conventional commits format
