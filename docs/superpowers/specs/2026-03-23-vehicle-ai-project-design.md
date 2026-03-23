# Vehicle AI Project Page Design

**Date:** 2026-03-23  
**Topic:** Update project3.html to reflect vehicle classification project with YOLOv8  
**Author:** Gonzalo Gamez  
**Goal:** Transform generic team lead page into specific project manager showcase for Riga vehicle detection work

---

## Overview

This design specifies the updates needed for `projects/project3.html` to accurately represent the AI vehicle classification project (YOLOv8) while highlighting the user's role as Project Manager. The current page focuses on team lead responsibilities and generic AI group project work; it needs to be tailored to showcase the specific technical domain, management contributions, and project outcomes.

---

## Scope

**In Scope:**
- Update page title and heading to reflect vehicle classification domain
- Rewrite description to emphasize Project Manager role with YOLOv8 oversight
- Update Features section to combine management + technical pipeline details
- Update Tech Stack to include both management tools (GitHub Projects, Agile) and technical stack (YOLOv8, GCP, FFmpeg, Albumentations, CVAT)
- Keep existing visualizations (Kanban board + vehicle detection result image)

**Out of Scope:**
- Adding new metrics/results section with quantitative data
- Adding additional visualization images
- Major layout or design changes beyond content updates

---

## Design Decisions

### 1. Page Title and Heading

**Before:** `Team Lead - AI Group Project`  
**After:** `Image Recognition to Detect Different Vehicle Types in Riga`

**Rationale:** The new title accurately reflects the project domain (vehicle image recognition) and geographic context (Riga), making it immediately clear what the project was about.

### 2. Subtitle/Description

**After:** `Project Manager overseeing YOLOv8 vehicle detection`

**Rationale:** Concise statement that establishes the user's role and the core technology, balancing management responsibility with technical specifics.

### 3. About Section Content

Rewrite to emphasize:
- Project Manager responsibilities (team coordination, documentation, sprint tracking)
- Oversight of YOLOv8 vehicle classification system development
- 8-week project lifecycle management
- Team composition (3 members total)

**Key points to include:**
- Established communication channels for distributed team
- Maintained comprehensive project documentation
- Implemented agile practices (sprint planning, progress tracking)
- Facilitated collaboration among the 3-member team: Data Engineer (Dmitrijs), Data Analyst (Eden), and Project Manager (Myself)

### 4. Features Section

**Structure:** Two subsections - Management & Technical Oversight

#### Management Features (User's Direct Contribution):
1. **Team Coordination & Communication:** Established protocols for distributed team members using collaborative platforms
2. **Documentation & Knowledge Sharing:** Created comprehensive project documentation ensuring knowledge transfer and team alignment
3. **Sprint Planning & Progress Tracking:** Implemented iterative development cycles with regular planning sessions and progress reviews
4. **Task Assignment & Follow-up:** Managed task distribution across team roles (Data Engineer, Data Analyst, Project Manager) through transparent tracking systems

#### Technical Pipeline Oversight:
5. **Data Collection Management:** Supervised webcam feed processing via FFmpeg; orchestrated image storage in Google Cloud Platform
6. **Annotation Coordination:** Leveraged CVAT for precise vehicle labeling across V (Passenger), C (Cargo), and S (Bus) categories
7. **Augmentation Strategy Oversight:** Directed Albumentations implementation for data transformations (rotations, brightness adjustments) to improve model robustness
8. **Evaluation Process Management:** Oversaw precision, recall, and mAP metrics collection across test sets

#### Vehicle Categories Highlight:
- **V (Passenger Vehicles):** Cars for personal transportation - significant traffic baseline
- **C (Cargo Vehicles):** Commercial vehicles C1-C4 (vans to trucks with trailers)
- **S (Buses):** Public transport vehicles for traffic flow analysis

#### Technical Pipeline Oversight:
5. **Data Collection Management:** Supervised webcam feed processing via FFmpeg; orchestrated image storage in Google Cloud Platform
6. **Annotation Coordination:** Leveraged CVAT for precise vehicle labeling across V (Passenger), C (Cargo), and S (Bus) categories
7. **Augmentation Strategy Oversight:** Directed Albumentations implementation for data transformations (rotations, brightness adjustments) to improve model robustness
8. **Evaluation Process Management:** Oversaw precision, recall, and mAP metrics collection across test sets

---

### 5. Tech Stack Section

**Before:** GitHub Projects, Git Workflow, Agile Methodology, Stakeholder Communication, Team Leadership  
**After:** Add technical stack alongside management tools:

```
GitHub Projects | Git Workflow | Agile Methodology | YOLOv8 | Google Cloud Platform
FFmpeg | Albumentations | CVAT | Riga Traffic Monitoring
```

**Rationale:** Demonstrates both project management competencies and familiarity with ML/Computer Vision technologies.

### 6. Links Section

Keep existing:
- GitHub Repository link (overall project)
- Project Board link (GitHub Projects view for sprint tracking)

No changes needed to links; they accurately represent the team's work.

### 7. Visualizations

**Keep As-Is:**
1. **Kanban_board.png:** Shows agile workflow and sprint management
2. **detecting_cars.jpg:** Demonstrates model output (vehicle detection in Riga)

**Rationale:** Both images serve distinct purposes - one shows the management process, the other shows the technical outcome. Adding more visualizations would be unnecessary complexity.

---

## File Structure Changes

### `projects/project3.html`

| Line Range | Change Type | Description |
|------------|-------------|-------------|
| 1-6 (head title) | Update | Change to "Image Recognition to Detect Different Vehicle Types in Riga" |
| 28-29 (h1, description) | Update | New title and subtitle reflecting project manager role |
| 35-41 (Features h2+ul) | Rewrite | Replace generic team lead features with specific vehicle AI content |
| - | Add | Include vehicle category descriptions (V, C, S) |
| 44-50 (Tech Stack) | Update | Add YOLOv8, GCP, FFmpeg, Albumentations, CVAT badges |
| 62-71 (Visualizations) | No change | Keep existing images and captions |

### CSS (`projects/css/styles.css`)

**No changes required.** Existing styles support the new content structure.

### JavaScript (`projects/js/main.js`)

**No changes required.** Lightbox functionality remains applicable for the two visualization images.

---

## User Experience Considerations

1. **Clarity:** The updated title immediately communicates both domain (vehicle detection) and location (Riga)
2. **Role Emphasis:** Subtitle and about section clearly establish Project Manager position
3. **Balance:** Features section shows management contributions without overshadowing technical pipeline work
4. **Credibility:** Tech stack badges demonstrate hands-on familiarity with ML tools while maintaining management focus

---

## Validation Criteria

The design is successful when:
- [ ] Page title accurately reflects vehicle classification domain
- [ ] User's Project Manager role is immediately evident
- [ ] Features section covers both management and technical pipeline aspects
- [ ] Tech stack includes both management tools and ML/Computer Vision technologies
- [ ] Visualizations (Kanban + detection) are preserved without modification
- [ ] Content accurately reflects Riga, Latvia geographic context
- [ ] Vehicle categories (V, C, S) are clearly described

---

## Next Steps

1. ✅ Design approved by user
2. 📝 Write design spec to `docs/superpowers/specs/2026-03-23-vehicle-ai-project-design.md`
3. 🔀 Run spec review loop with subagent
4. 👤 Get user review of written spec
5. 📋 Invoke `writing-plans` skill to create implementation plan
6. 💻 Implement changes to `projects/project3.html`

---

## Design Approval Status

- [x] User approved design proposal
- [ ] Spec review passed (post-writing)
- [ ] User reviewed submitted spec file
- [ ] Ready for implementation
