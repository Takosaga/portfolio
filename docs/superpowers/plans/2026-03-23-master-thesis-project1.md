# Master Thesis Project Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace placeholder content in project1.html with actual master thesis details, technical skills section, and visualization gallery

**Architecture:** Single HTML file update following existing portfolio structure, adding new sections (Technical Skills, Visualizations Gallery) and updating About/Features/Links sections

**Tech Stack:** HTML5, CSS3 (existing portfolio styles), JavaScript (existing navigation)

---

### Task 1: Update Project1 HTML Content

**Files:**
- Modify: `projects/project1.html`

- [ ] **Step 1: Read current project1.html content**

```bash
cat projects/project1.html
```

- [ ] **Step 2: Update Title and Description sections**

Replace the title and description with thesis-specific content:
- H1: "Evaluating Consistency of XAI Methods in Hate Speech Detection"
- Description: Technical overview highlighting LIME vs SHAP consistency evaluation using CardiffNLP RoBERTa model

- [ ] **Step 3: Update About section**

Replace placeholder About paragraph with concise 2-3 sentence overview:
- Focus on transparency in automated content moderation
- Mention multiple datasets (HateXplain, MLMA, Measuring Hate Speech)
- Mention platforms (Twitter, YouTube, Reddit, Gab)

- [ ] **Step 4: Update Features section**

Replace placeholder features list with actual thesis features:
- Integration of LIME and SHAP explanation frameworks with transformer-based model
- Quantitative evaluation with multiple consistency metrics
- Stratified sampling across prediction scenarios
- Comprehensive visualization tools for explanation analysis

- [ ] **Step 5: Add Tech Stack section**

Insert new Tech Stack section after Features with badges for:
- Python
- Transformers (Hugging Face) - CardiffNLP RoBERTa model
- LIME & SHAP libraries
- Pandas, NumPy
- Matplotlib/Seaborn for visualizations

- [ ] **Step 6: Add Technical Skills section**

Insert new section with all 5 skills from README:
- **Explainable AI**: Integration and evaluation of state-of-the-art explanation techniques for black-box models
- **Data Analysis**: Comprehensive exploratory data analysis and statistical evaluation of results
- **Data Visualization**: Creation of informative and intuitive visualizations to communicate complex findings
- **Research Methodology**: Design and implementation of rigorous experimental protocols to test specific hypotheses
- **Python Programming**: Extensive use of Python and relevant libraries

- [ ] **Step 7: Update Links section**

Replace placeholder links with single GitHub repository link:
- `https://github.com/Takosaga/master_thesis` (target="_blank")

- [ ] **Step 8: Add Visualizations Gallery section**

Insert new gallery section after Technical Skills with responsive grid layout:
- Image 1: LIME_TP_18694_seed_3279.png with caption "LIME Explanation - True Positive Sample"
- Image 2: SHAP_TP_18694_seed_3279.png with caption "SHAP Explanation - True Positive Sample"
- Image 3: Results.png with caption "Comparison of LIME and SHAP Results"

Use CSS Grid layout (responsive: 1 column mobile, 3 columns desktop)

- [ ] **Step 9: Run the page locally to verify content**

Open `projects/project1.html` in browser and verify:
- All text displays correctly
- Images load without broken link icons
- Layout looks good on different screen sizes
- GitHub link opens in new tab

- [ ] **Step 10: Commit changes**

```bash
git add projects/project1.html projects/images/
git commit -m "feat: implement master thesis project page with visualizations"
```

---

### Task 2: Plan Review and Final Verification

**Files:**
- Review: `docs/superpowers/specs/2026-03-23-master-thesis-project1-design.md`
- Verify: `projects/project1.html` (final state)

- [ ] **Step 1: Verify implementation matches spec**

Check that all sections from the design spec are implemented:
- ✅ Title & Description
- ✅ About (concise version)
- ✅ Features
- ✅ Tech Stack
- ✅ Technical Skills (all 5 skills)
- ✅ Visualizations Gallery (3 images with captions)
- ✅ Links section

- [ ] **Step 2: Final visual inspection**

Ensure consistent styling with the rest of the portfolio:
- Match existing CSS classes for tech badges, buttons, gallery layout
- Verify responsive behavior on mobile devices
- Check that image captions are properly formatted

- [ ] **Step 3: Accessibility check**

Verify:
- All images have descriptive alt text
- GitHub link has proper aria-label
- Semantic HTML structure maintained

---

## Execution Options

**"Plan complete and saved to `docs/superpowers/plans/2026-03-23-master-thesis-project1.md`. Two execution options:**

**1. Subagent-Driven (recommended)** - I dispatch a fresh subagent per task with review between tasks for fast iteration

**2. Inline Execution** - Execute all tasks in this session using `executing-plans` skill, batch execution with checkpoints

Which approach?"