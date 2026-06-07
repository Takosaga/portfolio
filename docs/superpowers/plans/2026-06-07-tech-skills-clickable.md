# Clickable Tech Skills Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make each tech skill in the `#tech-skills` section of `index.html` clickable, linking to its most relevant project page.

**Architecture:** Wrap each `<li>` content in an `<a>` tag pointing to the appropriate project page. Add CSS link styles to `.tech-list` items to signal clickability via hover/visited states. No JavaScript needed.

**Tech Stack:** HTML5, CSS3 (BEM-like naming), no dependencies.

---

### Task 1: Add skill link CSS styles

**Files:**
- Modify: `css/styles.css`

Add three new CSS rules for tech skill links. The existing `.tech-list` uses `<li>` elements with some having a blank line separator before them — the link styles must not break that layout.

```css
.tech-list__link {
    color: var(--color-text);
    text-decoration: none;
    transition: color 0.2s ease, text-decoration-color 0.2s ease;
}

.tech-list__link:hover {
    color: var(--color-accent);
    text-decoration: underline;
    text-decoration-color: var(--color-accent);
}

.tech-list__link:visited {
    color: var(--color-text-muted);
}
```

- [ ] **Step 1: Add CSS rules**

Open `css/styles.css`, find the existing `.tech-list` block (search for `.tech-list`), and add the three rules above after it. The file uses CSS variables in `:root` — reference those same variables (`--color-text`, `--color-accent`, `--color-text-muted`) which already exist in the stylesheet.

- [ ] **Step 2: Commit**

```bash
git add css/styles.css
git commit -m "style: add hover/visited link styles to tech skills"
```

---

### Task 2: Wrap each tech skill in an anchor tag

**Files:**
- Modify: `index.html` — `<section id="tech-skills">` block (lines ~85–110)

Replace every `<li>SkillName</li>` with `<li><a href="projects/projectN.html" class="tech-list__link">SkillName</a></li>`. Preserve the blank lines between groups exactly as they are.

Mapping:

| Skill | href |
|---|---|
| Python | `projects/project1.html` |
| NumPy | `projects/project1.html` |
| Pandas | `projects/project1.html` |
| scikit-learn | `projects/project1.html` |
| FastAPI | `projects/project2.html` |
| Pydantic | `projects/project0.html` |
| Hugging Face | `projects/project1.html` |
| LangChain | `projects/project0.html` |
| CrewAI | `projects/project0.html` |
| LlamaIndex | `projects/project0.html` |
| Ollama | `projects/project0.html` |
| Matplotlib & Seaborn | `projects/project1.html` |
| YOLO | `projects/project3.html` |
| CVAT | `projects/project3.html` |
| FAISS | `projects/project0.html` |
| ChromaDB | `projects/project0.html` |
| pgvector | `projects/project0.html` |
| Docker | `projects/project0.html` |
| Azure OpenAI | `projects/project0.html` |
| GitHub Actions | `projects/project0.html` |
| DeepEval | `projects/project0.html` |
| LangSmith | `projects/project0.html` |
| LIME & SHAP | `projects/project1.html` |

- [ ] **Step 1: Replace all `<li>` items in the tech-skills section**

In `index.html`, find the `<section id="tech-skills" class="tech-stack container">` block. Replace each of the 23 `<li>...</li>` entries with the corresponding `<li><a href="..." class="tech-list__link">...</a></li>`. Preserve all blank lines between skill groups exactly as they appear in the original file.

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "feat: make tech skills clickable links to relevant projects"
```

---

### Task 3: Verify in browser

**Files:**
- None (manual verification)

Open `index.html` in a browser. Check:
1. All 23 skills are underlined on hover and change to accent color
2. Clicking each skill navigates to the correct project page
3. Visited links show muted color
4. No layout shifts or broken spacing
5. Mobile view (narrow viewport) still renders correctly

- [ ] **Step 1: Visual verification**

Open `index.html` in a browser and verify all skills are clickable, hover/visited states work, and navigation goes to the correct project pages. Check both desktop and mobile viewport widths.
