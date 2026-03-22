# Personal Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a minimal static portfolio website with HTML/CSS/JS for GitHub Pages deployment

**Architecture:** Single-page structure with separate project pages, using CSS variables for neutral theming and vanilla JavaScript for interactions

**Tech Stack:** HTML5, CSS3, Vanilla JavaScript

---

### Task 1: Project Structure & index.html

**Files:**
- Create: `index.html`
- Create: `css/` directory
- Create: `js/` directory

- [ ] **Step 1: Create directory structure**

```bash
mkdir -p css js projects
```

- [ ] **Step 2: Create index.html with semantic structure**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Your Name] - Developer Portfolio</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header class="header">
        <nav class="nav container">
            <a href="index.html" class="logo">[Your Name]</a>
            <button class="nav-toggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-menu">
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#projects" class="nav-link">Projects</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="about" class="hero container">
            <h1>Hi, I'm [Your Name]</h1>
            <p class="bio">[Your one-sentence bio]</p>
            <a href="#projects" class="btn">View My Work</a>
        </section>

        <section id="projects" class="projects container">
            <h2>Featured Projects</h2>
            <div class="project-grid">
                <article class="project-card">
                    <a href="projects/project1.html" class="project-link">
                        <h3>[Project 1 Title]</h3>
                        <p>[Short description]</p>
                        <span class="tech-badge">[Tech 1]</span>
                        <span class="tech-badge">[Tech 2]</span>
                    </a>
                </article>
                <article class="project-card">
                    <a href="projects/project2.html" class="project-link">
                        <h3>[Project 2 Title]</h3>
                        <p>[Short description]</p>
                        <span class="tech-badge">[Tech 1]</span>
                        <span class="tech-badge">[Tech 2]</span>
                    </a>
                </article>
                <article class="project-card">
                    <a href="projects/project3.html" class="project-link">
                        <h3>[Project 3 Title]</h3>
                        <p>[Short description]</p>
                        <span class="tech-badge">[Tech 1]</span>
                        <span class="tech-badge">[Tech 2]</span>
                    </a>
                </article>
            </div>
        </section>

        <section id="tech-stack" class="tech-stack container">
            <h2>Tech Stack</h2>
            <ul class="tech-list">
                <li>[Technology 1]</li>
                <li>[Technology 2]</li>
                <li>[Technology 3]</li>
                <li>[Technology 4]</li>
            </ul>
        </section>
    </main>

    <footer class="footer container">
        <div class="social-links">
            <a href="[GitHub URL]" target="_blank" aria-label="GitHub">GitHub</a>
            <a href="[LinkedIn URL]" target="_blank" aria-label="LinkedIn">LinkedIn</a>
            <a href="[Email]" aria-label="Email">Email</a>
        </div>
        <p>&copy; 2026 [Your Name]. All rights reserved.</p>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Verify HTML structure**

Open `index.html` in browser and verify all elements render correctly.

---

### Task 2: CSS Styles (css/styles.css)

**Files:**
- Create: `css/styles.css`

- [ ] **Step 1: Create base styles with CSS variables**

```css
/* CSS Variables - Neutral Theme */
:root {
    --bg-primary: #ffffff;
    --bg-secondary: #f5f5f5;
    --text-primary: #1a1a1a;
    --text-secondary: #666666;
    --accent: #3b82f6;
    --border: #e0e0e0;
    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    --max-width: 1200px;
}

/* Reset & Base */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-family);
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
}

.container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1rem;
}

/* Header & Navigation */
.header {
    position: sticky;
    top: 0;
    background-color: var(--bg-primary);
    border-bottom: 1px solid var(--border);
    z-index: 100;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
}

.logo {
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--text-primary);
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
}

.nav-link:hover {
    color: var(--accent);
}

/* Nav Toggle (Mobile) */
.nav-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
}

.nav-toggle span {
    width: 25px;
    height: 3px;
    background-color: var(--text-primary);
    transition: 0.3s;
}

/* Hero Section */
.hero {
    padding: 6rem 0;
    text-align: center;
}

.hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.bio {
    color: var(--text-secondary);
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto 2rem;
}

.btn {
    display: inline-block;
    background-color: var(--accent);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
}

.btn:hover {
    opacity: 0.9;
}

/* Projects Section */
.projects {
    padding: 4rem 0;
}

.projects h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    background-color: var(--bg-secondary);
    border-radius: 8px;
    padding: 1.5rem;
    transition: transform 0.2s, box-shadow 0.2s;
}

.project-link {
    color: inherit;
    text-decoration: none;
}

.project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.project-card h3 {
    margin-bottom: 0.5rem;
}

.project-card p {
    color: var(--text-secondary);
    margin-bottom: 1rem;
}

.tech-badge {
    display: inline-block;
    background-color: var(--bg-primary);
    color: var(--accent);
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    font-size: 0.875rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
}

/* Tech Stack Section */
.tech-stack {
    padding: 4rem 0;
    background-color: var(--bg-secondary);
}

.tech-stack h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.tech-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    list-style: none;
}

.tech-list li {
    background-color: var(--bg-primary);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-weight: 500;
}

/* Footer */
.footer {
    padding: 3rem 0;
    text-align: center;
    border-top: 1px solid var(--border);
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1rem;
}

.social-links a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.2s;
}

.social-links a:hover {
    color: var(--accent);
}

/* Responsive */
@media (max-width: 768px) {
    .nav-toggle {
        display: flex;
    }

    .nav-menu {
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        background-color: var(--bg-primary);
        flex-direction: column;
        padding: 1rem;
        border-bottom: 1px solid var(--border);
        display: none;
    }

    .nav-menu.active {
        display: flex;
    }

    .hero h1 {
        font-size: 2rem;
    }

    .bio {
        font-size: 1rem;
    }
}
```

- [ ] **Step 2: Verify CSS styling**

Open `index.html` in browser and verify all styles render correctly.

---

### Task 3: JavaScript Interactions (js/main.js)

**Files:**
- Create: `js/main.js`

- [ ] **Step 1: Create mobile menu toggle**

```javascript
// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active state to nav links on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavLinks() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.style.color = 'var(--text-secondary)';
                });
                navLink.style.color = 'var(--accent)';
            }
        } else {
            if (navLink) {
                navLink.style.color = 'var(--text-secondary)';
            }
        }
    });
}

window.addEventListener('scroll', highlightNavLinks);
```

- [ ] **Step 2: Verify JavaScript functionality**

1. Open browser DevTools Console
2. Toggle mobile menu (resize window to trigger mobile view)
3. Verify smooth scrolling works
4. Check console for any errors

---

### Task 4: Create Sample Project Pages

**Files:**
- Create: `projects/project1.html`
- Create: `projects/project2.html`
- Create: `projects/project3.html`

- [ ] **Step 1: Create project1.html template**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[Project Title] - Developer Portfolio</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <header class="header">
        <nav class="nav container">
            <a href="../index.html" class="logo">[Your Name]</a>
            <button class="nav-toggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-menu">
                <li><a href="../index.html#about" class="nav-link">About</a></li>
                <li><a href="../index.html#projects" class="nav-link">Projects</a></li>
                <li><a href="../contact.html" class="nav-link">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main class="container">
        <article>
            <h1>[Project Title]</h1>
            <p class="description">[Detailed project description]</p>

            <h2>About</h2>
            <p>[More detailed information about the project, its purpose, and what problem it solves]</p>

            <h2>Features</h2>
            <ul>
                <li>[Feature 1: Description]</li>
                <li>[Feature 2: Description]</li>
                <li>[Feature 3: Description]</li>
            </ul>

            <h2>Tech Stack</h2>
            <div class="tech-stack">
                <span class="tech-badge">[Technology 1]</span>
                <span class="tech-badge">[Technology 2]</span>
                <span class="tech-badge">[Technology 3]</span>
            </div>

            <h2>Links</h2>
            <div class="project-links">
                <a href="[Live Demo URL]" target="_blank" class="btn">Live Demo</a>
                <a href="[GitHub Repository URL]" target="_blank" class="btn" style="background-color: var(--text-primary); margin-left: 0.5rem;">Source Code</a>
            </div>
        </article>
    </main>

    <footer class="footer container">
        <div class="social-links">
            <a href="[GitHub URL]" target="_blank" aria-label="GitHub">GitHub</a>
            <a href="[LinkedIn URL]" target="_blank" aria-label="LinkedIn">LinkedIn</a>
            <a href="[Email]" aria-label="Email">Email</a>
        </div>
        <p>&copy; 2026 [Your Name]. All rights reserved.</p>
    </footer>

    <script src="../js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Create project2.html (copy and modify)**

Duplicate `project1.html`, rename to `project2.html`, update title and content.

- [ ] **Step 3: Create project3.html (copy and modify)**

Duplicate `project1.html`, rename to `project3.html`, update title and content.

---

### Task 5: Create Contact Page

**Files:**
- Create: `contact.html`

- [ ] **Step 1: Create contact.html with form**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - Developer Portfolio</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header class="header">
        <nav class="nav container">
            <a href="index.html" class="logo">[Your Name]</a>
            <button class="nav-toggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-menu">
                <li><a href="index.html#about" class="nav-link">About</a></li>
                <li><a href="index.html#projects" class="nav-link">Projects</a></li>
                <li><a href="contact.html" class="nav-link active">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main class="container">
        <section id="contact" style="padding: 4rem 0;">
            <h1 style="text-align: center; margin-bottom: 2rem;">Get In Touch</h1>
            
            <form id="contact-form" class="contact-form">
                <div style="margin-bottom: 1.5rem;">
                    <label for="name" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Name</label>
                    <input type="text" id="name" name="name" required 
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border); border-radius: 4px;">
                </div>

                <div style="margin-bottom: 1.5rem;">
                    <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Email</label>
                    <input type="email" id="email" name="email" required 
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border); border-radius: 4px;">
                </div>

                <div style="margin-bottom: 1.5rem;">
                    <label for="message" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Message</label>
                    <textarea id="message" name="message" rows="5" required 
                              style="width: 100%; padding: 0.75rem; border: 1px solid var(--border); border-radius: 4px; resize: vertical;"></textarea>
                </div>

                <button type="submit" class="btn">Send Message</button>
            </form>

            <div id="form-status" style="margin-top: 1rem;" role="status" aria-live="polite"></div>
        </section>
    </main>

    <footer class="footer container">
        <div class="social-links">
            <a href="[GitHub URL]" target="_blank" aria-label="GitHub">GitHub</a>
            <a href="[LinkedIn URL]" target="_blank" aria-label="LinkedIn">LinkedIn</a>
            <a href="[Email]" aria-label="Email">Email</a>
        </div>
        <p>&copy; 2026 [Your Name]. All rights reserved.</p>
    </footer>

    <script src="js/main.js"></script>
    <script>
        // Contact Form Validation
        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('contact-form');
            const status = document.getElementById('form-status');

            if (form) {
                form.addEventListener('submit', async (e) => {
                    e.preventDefault();

                    // Basic validation (HTML5 required attributes handle most)
                    const formData = new FormData(form);
                    const data = Object.fromEntries(formData);

                    // Simulate form submission (replace with actual email service)
                    try {
                        status.textContent = 'Sending...';
                        
                        // TODO: Replace with actual email service API
                        // Example: fetch('/api/send-email', { method: 'POST', body: JSON.stringify(data) })
                        
                        await new Promise(resolve => setTimeout(resolve, 1000));
                        
                        status.textContent = 'Message sent! I\'ll get back to you soon.';
                        form.reset();
                    } catch (error) {
                        status.textContent = 'Error sending message. Please try again later.';
                        console.error('Form submission error:', error);
                    }
                });
            }
        });
    </script>
</body>
</html>
```

---

### Task 6: Create README.md

**Files:**
- Create: `README.md`

- [ ] **Step 1: Create README with deployment instructions**

```markdown
# Developer Portfolio

A minimal static portfolio website for developers, hosted on GitHub Pages.

## Features

- Clean, neutral design
- Responsive layout
- Project showcase pages
- Contact form
- No build tools required

## Getting Started

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd porfolio
   ```

2. Open `index.html` in a web browser

### GitHub Pages Deployment

1. Push code to GitHub:
   ```bash
   git add .
   git commit -m "Initial portfolio"
   git push origin main
   ```

2. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to Pages section
   - Select "Deploy from branch"
   - Choose `main` branch and `/ (root)` folder
   - Click Save

3. Your site will be available at: `https://<username>.github.io/<repo>`

## Customization

Replace all placeholder text marked with `[...]` with your actual content:

- `[Your Name]` - Your name
- `[Your Bio]` - One-sentence introduction
- Project titles, descriptions, and links
- Social media URLs
- Tech stack items

## License

This portfolio is open source and available under the MIT License.
```

---

### Task 7: Final Verification & Cleanup

**Files:**
- All created files

- [ ] **Step 1: Review all files for placeholder text**

Search for `[` to find remaining placeholders and verify they're intentional.

- [ ] **Step 2: Test all pages locally**

Open each page in browser:
- `index.html`
- `projects/project1.html`
- `projects/project2.html`
- `projects/project3.html`
- `contact.html`

Verify navigation works between pages.

- [ ] **Step 3: Check responsive design**

Resize browser window to mobile size (<768px) and verify:
- Mobile menu toggles correctly
- Layout adapts properly
- All content remains readable

- [ ] **Step 4: Final commit**

```bash
git add .
git commit -m "feat: complete portfolio website implementation"
```

---

## Post-Implementation Tasks (User to Complete)

1. Replace all placeholder text with actual content
2. Add real project links and descriptions
3. Update social media URLs
4. Configure email service for contact form (or remove form, use static email link instead)
5. Add favicon
6. Deploy to GitHub Pages
