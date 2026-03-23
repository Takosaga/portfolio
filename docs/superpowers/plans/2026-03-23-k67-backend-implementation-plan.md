# Ki-67 Cell Detection Backend Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace placeholder content in `projects/project2.html` with a showcase page for the European Healthcare Hackathon 2025 Ki-67 proliferation assessment backend project.

**Architecture:** Single HTML page following project1.html structure, reusing existing portfolio CSS/JS assets and lightbox implementation.

**Tech Stack:** HTML5, CSS3 (portfolio), JavaScript (lightbox gallery), Markdown spec documentation

---

### Task 1: Create Medical Problem Section

**Files:**
- Modify: `projects/project2.html:7-8` (description)
- Modify: `projects/project2.html:26-29` (insert medical problem section)

- [ ] **Step 1: Add description text**

```html
<p class="description">AI-powered backend for automated Ki-67 proliferation assessment from pathology slides using YOLOv11 computer vision and FastAPI.</p>
```

- [ ] **Step 2: Insert medical problem section** (after description, before solution)

```html
<h2>Medical Problem</h2>
<p>Ki-67 protein is a critical marker of cell proliferation (growth) that can be detected immunohistochemically. The percentage of Ki-67-positive cells determines the proliferative activity of tumors, which is used to establish tumor grade and reflect biological aggressiveness.</p>

<p>However, in clinical practice, Ki-67 assessment is still primarily performed by human pathologists using manual evaluation. This traditional approach is inherently subjective and imprecise, leading to variability in proliferation estimates. Such inaccuracies can directly impact patient outcomes, as incorrect tumor grading may affect treatment decisions.</p>
```

- [ ] **Step 3: Verify section placement** - Should appear after "description" paragraph and before "Solution Overview"

---

### Task 2: Add Solution Overview Section

**Files:**
- Modify: `projects/project2.html` (insert solution section)

- [ ] **Step 1: Insert solution overview** (after medical problem section)

```html
<h2>Solution Overview</h2>
<p>Our solution is an AI-powered automated tool that replaces manual evaluation with computer vision. The system analyzes uploaded pathology slides to automatically annotate and count Ki-67-positive cells within user-selected regions of interest.</p>

<p>The web application provides interactive ROI selection, allowing pathologists to mark the tumor area for precise analysis. Once selected, the model returns annotated images showing positive and negative cells, along with calculated proliferation metrics including intensity assessment (mild, moderate, strong).</p>
```

---

### Task 3: Update Tech Stack Section

**Files:**
- Modify: `projects/project2.html:50-54` (replace placeholder badges)

- [ ] **Step 1: Replace with actual tech stack**

```html
<h2>Tech Stack</h2>
<div class="tech-stack">
    <span class="tech-badge">Python</span>
    <span class="tech-badge">FastAPI</span>
    <span class="tech-badge">PyTorch/YOLOv11</span>
    <span class="tech-badge">Uvicorn</span>
</div>
```

---

### Task 4: Add Technical Skills Section

**Files:**
- Modify: `projects/project2.html` (insert skills section)

- [ ] **Step 1: Insert technical skills** (after tech stack)

```html
<h2>Technical Skills</h2>
<ul class="tech-list">
    <li><strong>Rapid Prototyping:</strong> Quick API implementation with FastAPI and Uvicorn for efficient model serving</li>
    <li><strong>Data Management:</strong> CVAT annotation platform setup and training data pipeline creation</li>
    <li><strong>Computer Vision:</strong> YOLOv11 fine-tuning with medical imaging datasets for cell detection tasks</li>
</ul>
```

---

### Task 5: Add Key Features Section

**Files:**
- Modify: `projects/project2.html` (insert features section)

- [ ] **Step 1: Insert key features** (after technical skills)

```html
<h2>Key Features</h2>
<ul>
    <li><strong>Automated Detection:</strong> Automatic detection and annotation of Ki-67 positive and negative cells in pathology slides</li>
    <li><strong>Proliferation Metrics:</strong> Calculation of Ki-67-positive cell percentage with intensity assessment (mild, moderate, strong)</li>
    <li><strong>Region Selection:</strong> Interactive region of interest selection for pathologist input and accuracy control</li>
    <li><strong>Distribution Analysis:</strong> Evaluation of Ki-67-positive cell distribution patterns within tissue samples</li>
</ul>
```

---

### Task 6: Add Visuals Section with Lightbox Integration

**Files:**
- Modify: `projects/project2.html` (insert visuals section)
- Copy: `projects/project1.html` lightbox styles and script to project2

- [ ] **Step 1: Copy lightbox HTML structure from project1**

Copy lines 83-90 from project1.html:
```html
<!-- Lightbox Modal -->
<div id="lightbox" class="lightbox" role="dialog" aria-modal="true">
    <span class="close-lightbox" aria-label="Close lightbox">&times;</span>
    <button class="nav-btn prev" aria-label="Previous image">&larr;</button>
    <img src="" alt="Full-size visualization" id="lightbox-img">
    <button class="nav-btn next" aria-label="Next image">&rarr;</button>
</div>
```

- [ ] **Step 2: Add visuals section** (after tech stack or features)

```html
<h2>Visualizations</h2>
<div class="visualizations-grid">
    <figure>
        <img src="./images/Annotated.png" alt="Ki-67 Cell Detection - Annotated Pathology Slide">
        <figcaption>Ki-67 Positive and Negative Cell Detection</figcaption>
    </figure>
</div>

<h2>Demo Video</h2>
<div class="video-container">
    <a href="https://github.com/Takosaga/EHH-2025/blob/main/demo.webm" target="_blank" class="btn">
        Watch Demo Video
    </a>
</div>
```

- [ ] **Step 3: Copy lightbox CSS from project1** (lines 106-176)

Copy entire style block and append to project2 before closing </head> tag.

- [ ] **Step 4: Copy lightbox JavaScript from project1** (lines 178-291)

Modify images array to include only Annotated.png:
```javascript
const images = ['./images/Annotated.png'];
```

Append script before closing body tag.

---

### Task 7: Update Links Section

**Files:**
- Modify: `projects/project2.html:46-50` (replace placeholder links)

- [ ] **Step 1: Replace with actual links**

```html
<h2>Links</h2>
<div class="project-links">
    <a href="https://github.com/Takosaga/EHH-2025" target="_blank" class="btn">
        GitHub Repository
    </a>
    <a href="https://github.com/Takosaga/EHH-2025/blob/main/demo.webm" target="_blank" 
       class="btn" style="background-color: var(--text-primary); margin-left: 0.5rem;">
        Demo Video
    </a>
</div>
```

---

### Task 8: Update Title and Header Elements

**Files:**
- Modify: `projects/project2.html:6` (title)
- Modify: `projects/project2.html:13` (logo text)

- [ ] **Step 1: Update HTML title**

Change from `[Project 2 Title] - Developer Portfolio` to:
```html
<title>Ki-67 Cell Detection Backend - Developer Portfolio</title>
```

- [ ] **Step 2: Update logo text** (if using placeholder)

Ensure logo shows your actual name, not `[Your Name]`.

---

### Task 9: Review and Clean Up

**Files:**
- Modify: `projects/project2.html` (final review)

- [ ] **Step 1: Verify all sections present** in order:
  - Title & Description
  - Medical Problem
  - Solution Overview
  - Tech Stack
  - Technical Skills
  - Key Features
  - Visualizations
  - Demo Video
  - Links

- [ ] **Step 2: Check lightbox functionality** by opening project2.html in browser

- [ ] **Step 3: Verify responsive layout** on mobile devices

- [ ] **Step 4: Check all external links work** (GitHub, demo video)

---

### Task 10: Commit Changes

- [ ] **Step 1: Add all modified files**

```bash
git add projects/project2.html projects/images/Annotated.png
```

- [ ] **Step 2: Create commit with descriptive message**

```bash
git commit -m "Update project2.html with Ki-67 backend showcase content"
```

- [ ] **Step 3: Verify commit**

```bash
git log --oneline -1
```

---

## Acceptance Criteria

- [x] Page follows narrative-driven structure (medical problem → solution → technical)
- [x] All medical/technical content matches spec requirements
- [x] Tech stack shows Python, FastAPI, PyTorch/YOLOv11, Uvicorn
- [x] Technical skills reflect rapid prototyping and data management with CVAT
- [x] Lightbox modal works for Annotated.png visualization
- [x] Both GitHub and demo video links are functional
- [x] Page is mobile-responsive
- [x] Code follows existing portfolio patterns and style

---

**Notes:** This plan implements the design spec at `docs/superpowers/specs/2026-03-23-k67-cell-detection-backend-design.md`. Reuses lightbox implementation from project1.html for consistency.
