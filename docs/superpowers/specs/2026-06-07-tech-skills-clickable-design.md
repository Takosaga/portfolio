# Tech Skills Clickable Design

## Overview

Make each tech skill in the `#tech-skills` section of `index.html` clickable, linking to the most relevant project page.

## Approach

Inline `<a>` tags wrapping each `<li>` content. No JavaScript required. Pure HTML + CSS change.

## Skill-to-Project Mapping

| Tech Skill | Target Page |
|---|---|
| Python | `projects/project1.html` (XAI — core language) |
| NumPy | `projects/project1.html` (XAI analysis) |
| Pandas | `projects/project1.html` (XAI data processing) |
| scikit-learn | `projects/project1.html` (XAI ML pipeline) |
| FastAPI | `projects/project2.html` (Cell Detection backend) |
| Pydantic | `projects/project0.html` (Accenture API work) |
| Hugging Face | `projects/project1.html` (Transformers model) |
| LangChain | `projects/project0.html` (RAG pipelines) |
| CrewAI | `projects/project0.html` (unmapped → Accenture) |
| LlamaIndex | `projects/project0.html` (unmapped → Accenture) |
| Ollama | `projects/project0.html` (unmapped → Accenture) |
| Matplotlib & Seaborn | `projects/project1.html` (XAI visualization) |
| YOLO | `projects/project3.html` (Vehicle detection models) |
| CVAT | `projects/project3.html` (Vehicle annotation tool) |
| FAISS | `projects/project0.html` (Accenture vector store) |
| ChromaDB | `projects/project0.html` (Accenture vector DB) |
| pgvector | `projects/project0.html` (Accenture PostgreSQL) |
| Docker | `projects/project0.html` (Accenture deployment) |
| Azure OpenAI | `projects/project0.html` (Accenture platform) |
| GitHub Actions | `projects/project0.html` (Accenture CI/CD) |
| DeepEval | `projects/project0.html` (Accenture evaluation) |
| LangSmith | `projects/project0.html` (Accenture tracing) |
| LIME & SHAP | `projects/project1.html` (XAI explanation methods) |

## Implementation Details

### HTML Change

Each `<li>SkillName</li>` becomes `<li><a href="projects/projectN.html">SkillName</a></li>`. The text content stays identical — only wrapped in an anchor tag.

### CSS Change

Add hover/visited styles for skill links to signal clickability:
- New class: `.tech-list__link` (base link style matching site color scheme)
- Hover state: subtle color shift or underline via `.tech-list__link:hover`
- Visited state: distinct color via `.tech-list__link:visited`

### Accessibility

Semantic `<a>` elements provide built-in keyboard navigation and screen reader support. No ARIA attributes needed.

### Scope

Single file change (`index.html`) plus CSS additions (`css/styles.css`). No JavaScript, no new files.
