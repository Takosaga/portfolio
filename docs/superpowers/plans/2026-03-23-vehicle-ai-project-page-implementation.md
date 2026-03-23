# Vehicle AI Project Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update project3.html to reflect vehicle classification project with YOLOv8, highlighting user's role as Project Manager overseeing the team and technical pipeline.

**Architecture:** HTML content update modifying title, description, features section, tech stack badges, and about subsection within the existing page structure.

**Tech Stack:** HTML5, CSS (inline styles), JavaScript (lightbox gallery)

---

## File Structure

| File | Change Type | Path |
|------|-------------|------|
| project3.html | Modify | `projects/project3.html` |
| styles.css | No change | `projects/css/styles.css` |
| main.js | No change | `projects/js/main.js` |

---

## Task 1: Update Page Title and Meta Tags

**Files:**
- Modify: `projects/project3.html:4-6`

- [ ] **Step 1: Read current title section**

Read lines 4-6 of project3.html to understand the current structure.

- [ ] **Step 2: Update meta title**

Change line 6 from:
```html
<title>Team Lead - AI Group Project - Developer Portfolio</title>
```
to:
```html
<title>Image Recognition to Detect Different Vehicle Types in Riga - Developer Portfolio</title>
```

- [ ] **Step 3: Verify change**

Run: `git diff projects/project3.html`

---

## Task 2: Update Heading and Description

**Files:**
- Modify: `projects/project3.html:28-29`

- [ ] **Step 1: Read current heading section**

Read lines 28-29 of project3.html.

- [ ] **Step 2: Update h1 heading**

Change line 28 from:
```html
<h1>Team Lead - AI Group Project</h1>
```
to:
```html
<h1>Image Recognition to Detect Different Vehicle Types in Riga</h1>
```

- [ ] **Step 3: Update description paragraph**

Change line 29 from:
```html
<p class="description">Technical leadership experience managing a team of 3 members over 2 months, coordinating communication, documentation, and sprint tracking using GitHub Projects.</p>
```
to:
```html
<p class="description">Project Manager overseeing YOLOv8 vehicle detection</p>
```

- [ ] **Step 4: Verify change**

Run: `git diff projects/project3.html`

---

## Task 3: Update About Section Content

**Files:**
- Modify: `projects/project3.html:31-32`

- [ ] **Step 1: Read current about section**

Read lines 31-32 of project3.html.

- [ ] **Step 2: Rewrite about paragraph**

Replace the entire paragraph with:
```html
<p>This role involved leading a small team through an 8-week AI group project lifecycle focused on vehicle classification using YOLOv8. As Project Manager, I was responsible for establishing effective communication channels, maintaining comprehensive documentation, implementing agile practices including sprint planning and progress tracking, and facilitating collaboration among the 3-member team: Data Engineer (Dmitrijs), Data Analyst (Eden), and myself as Project Manager.</p>
```

- [ ] **Step 3: Verify change**

Run: `git diff projects/project3.html`

---

## Task 4: Rewrite Features Section with Vehicle AI Content

**Files:**
- Modify: `projects/project3.html:35-41`

- [ ] **Step 1: Read current features section**

Read lines 35-41 of project3.html.

- [ ] **Step 2: Add management subsection header**

Insert after line 35 (Features h2):
```html
<h3>Team Management & Coordination</h3>
```

- [ ] **Step 3: Update first four features with management focus**

Replace the entire Features unordered list with:
```html
<ul>
    <li><strong>Team Coordination & Communication:</strong> Established and maintained clear communication protocols across distributed team members using collaborative platforms</li>
    <li><strong>Documentation & Knowledge Sharing:</strong> Created and maintained comprehensive project documentation ensuring knowledge transfer and team alignment</li>
    <li><strong>Sprint Planning & Progress Tracking:</strong> Implemented iterative development cycles with regular planning sessions and progress reviews to maintain momentum</li>
    <li><strong>Task Assignment & Follow-up:</strong> Managed task distribution and accountability through transparent tracking systems across Data Engineer, Data Analyst, and Project Manager roles</li>
</ul>

<h3>Technical Pipeline Oversight</h3>

<ul>
    <li><strong>Data Collection Management:</strong> Supervised webcam feed processing via FFmpeg; orchestrated image storage in Google Cloud Platform</li>
    <li><strong>Annotation Coordination:</strong> Leveraged CVAT for precise vehicle labeling across three categories: V (Passenger), C (Cargo), and S (Bus)</li>
    <li><strong>Augmentation Strategy Oversight:</strong> Directed Albumentations implementation with transformations including rotations and brightness adjustments to improve model robustness</li>
    <li><strong>Evaluation Process Management:</strong> Oversaw precision, recall, and mAP metrics collection across multiple test sets</li>
</ul>

<h3>Vehicle Classification Categories</h3>

<p><strong>V (Passenger Vehicles):</strong> Standard cars for personal transportation - provides baseline for traffic comparison</p>
<p><strong>C (Cargo Vehicles):</strong> Commercial vehicles from vans (C1) to large trucks with trailers (C4), tracking crucial due to size and impact on congestion</p>
<p><strong>S (Buses):</strong> Public transport buses - monitoring essential for traffic flow analysis and schedule optimization</p>
```

- [ ] **Step 4: Verify change**

Run: `git diff projects/project3.html`

---

## Task 5: Update Tech Stack Badges

**Files:**
- Modify: `projects/project3.html:44-50`

- [ ] **Step 1: Read current tech stack**

Read lines 44-50 of project3.html.

- [ ] **Step 2: Expand tech-stack container**

Replace the content between `<div class="tech-stack">` and `</div>` with:
```html
<span class="tech-badge">GitHub Projects</span>
<span class="tech-badge">Git Workflow</span>
<span class="tech-badge">Agile Methodology</span>
<span class="tech-badge">Stakeholder Communication</span>
<span class="tech-badge">Team Leadership</span>
<br>
<span class="tech-badge">YOLOv8</span>
<span class="tech-badge">Google Cloud Platform</span>
<span class="tech-badge">FFmpeg</span>
<span class="tech-badge">Albumentations</span>
<span class="tech-badge">CVAT</span>
```

- [ ] **Step 3: Verify change**

Run: `git diff projects/project3.html`

---

## Task 6: Verify Visualizations Section Unchanged

**Files:**
- Read (no modification): `projects/project3.html:62-71`

- [ ] **Step 1: Confirm existing images remain as-is**

Verify that lines 62-71 still contain:
```html
<h2>Visualizations</h2>
<div class="visualizations-grid">
    <figure>
        <img src="./images/Kanban_board.png" alt="Kanban Board Layout">
        <figcaption>Kanban Board with Columns</figcaption>
    </figure>
    <figure>
        <img src="./images/detecting_cars.jpg" alt="Final Results of Project">
        <figcaption>Final Results of Project</figcaption>
    </figure>
</div>
```

- [ ] **Step 2: Confirm lightbox code unchanged**

Verify lines 74-80 (lightbox modal) and lines 94-181 (lightbox styles) remain intact.

- [ ] **Step 3: Verify JavaScript unchanged**

Confirm lines 184-277 (lightbox gallery script) remains as-is.

---

## Final Verification

- [ ] **Step 1: Review complete diff**

Run: `git diff projects/project3.html` to see all changes at once.

- [ ] **Step 2: Check for unintended modifications**

Verify no other files were modified (styles.css, main.js should be untouched).

- [ ] **Step 3: Commit changes**

```bash
git add projects/project3.html
git commit -m "feat: update project3.html to showcase vehicle AI classification project"
```

- [ ] **Step 4: Verify commit**

Run: `git log --oneline -5`

---

## Expected Result

After implementation, project3.html should display:
- Title: "Image Recognition to Detect Different Vehicle Types in Riga"
- Subtitle: "Project Manager overseeing YOLOv8 vehicle detection"
- About section describing 8-week vehicle classification project with team roles
- Features section split into Team Management & Technical Pipeline Oversight
- Tech stack showing both management tools (GitHub Projects, Agile) and ML tools (YOLOv8, GCP, etc.)
- Two visualizations: Kanban board workflow + vehicle detection result

---

## Rollback Plan

If changes cause issues, restore from last commit:
```bash
git restore projects/project3.html
```
