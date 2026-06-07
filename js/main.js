// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        navToggle.setAttribute('aria-expanded', 'false');
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
    const pathname = window.location.pathname;

    // Dashboard page: always highlight Dashboard nav link
    if (pathname.includes('dashboard')) {
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        const dashboardLink = document.querySelector('.nav-link[href="dashboard.html"]');
        if (dashboardLink) {
            dashboardLink.classList.add('active');
            dashboardLink.setAttribute('aria-current', 'page');
        }
        return;
    }

    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) {
                navLink.classList.add('active');
                navLink.setAttribute('aria-current', 'page');
            }
        }
    });
}

// Lightbox Gallery (shared)
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.querySelector('.lightbox');
    if (!lightbox) return;

    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const closeBtn = lightbox.querySelector('.close-lightbox');
    const prevBtn = lightbox.querySelector('.prev');
    const nextBtn = lightbox.querySelector('.next');
    const figures = document.querySelectorAll('.visualizations-grid figure');

    if (!lightboxImg || !closeBtn) return;

    // Read images from data attribute on the lightbox container
    const imageSrcs = lightbox.dataset.images;
    if (!imageSrcs) return;
    const images = imageSrcs.split(',').map(s => s.trim());

    let currentIndex = 0;
    let triggerElement = null;

    function openLightbox(index, triggeredBy) {
        currentIndex = index;
        triggerElement = triggeredBy || null;
        lightboxImg.src = images[currentIndex];
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        if (triggerElement) {
            triggerElement.focus();
            triggerElement = null;
        }
    }

    function showNextImage(e) {
        if (e) e.preventDefault();
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex];
    }

    function showPreviousImage(e) {
        if (e) e.preventDefault();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex];
    }

    // Focus trap within lightbox
    function trapFocus(e) {
        if (!lightbox.classList.contains('active')) return;
        const focusableElements = lightbox.querySelectorAll(
            'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    }

    // Attach figure click handlers
    figures.forEach((figure, index) => {
        figure.addEventListener('click', () => openLightbox(index, figure));
    });

    // Close button
    closeBtn.addEventListener('click', closeLightbox);

    // Nav buttons
    if (prevBtn) prevBtn.addEventListener('click', showPreviousImage);
    if (nextBtn) nextBtn.addEventListener('click', showNextImage);

    // Click outside image to close
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        trapFocus(e);
        switch (e.key) {
            case 'ArrowLeft': showPreviousImage(e); break;
            case 'ArrowRight': showNextImage(e); break;
            case 'Escape': closeLightbox(); break;
        }
    });
});

// Timeline Pop-out Animation
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
    const timelineItems = document.querySelectorAll('.timeline .tl-item');
    if (timelineItems.length > 0) {
        timelineItems.forEach((item, index) => {
            item.style.setProperty('--i', String(index));
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // After animation completes, lock in final state so hover can take over
                        const staggerDelay = parseFloat(entry.target.style.getPropertyValue('--i')) * 80;
                        setTimeout(() => {
                            entry.target.querySelectorAll('.tl-avatar-wrap img, .tl-logos-pair .logo-left, .tl-logos-pair .logo-right').forEach(el => {
                                el.style.opacity = '1';
                                el.style.animationName = 'none';
                            });
                            entry.target.querySelectorAll('.tl-content').forEach(el => {
                                el.style.opacity = '1';
                                el.style.animationName = 'none';
                            });
                        }, 500 + staggerDelay + 100);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
        );

        timelineItems.forEach(item => observer.observe(item));
    }
}

// Dashboard Teaser Entrance Animation
if (!prefersReducedMotion) {
    const teaserCard = document.querySelector('.teaser-card');
    if (teaserCard) {
        // Trigger card reveal
        setTimeout(() => teaserCard.classList.add('visible'), 50);

        // Token counter animation
        const counterEl = document.getElementById('token-count');
        if (counterEl) {
            const targetNum = 283985437;
            const duration = 1500;
            let start = null;

            function easeOutQuart(t) {
                return 1 - Math.pow(1 - t, 4);
            }

            function tick(timestamp) {
                if (!start) start = timestamp;
                const elapsed = timestamp - start;
                const progress = Math.min(elapsed / duration, 1);
                counterEl.textContent = Math.floor(easeOutQuart(progress) * targetNum).toLocaleString();
                if (progress < 1) {
                    requestAnimationFrame(tick);
                }
            }

            setTimeout(() => requestAnimationFrame(tick), 200);
        }
    }
}

// Console easter egg
(function() {
    const style = [
        'color: #d9723a',
        'font-size: 12px',
        'padding: 4px 8px',
        'background: #fdfcfb',
        'border-radius: 4px 4px 0 0'
    ].join(';');
    const styleEnd = [
        'color: #5a534f',
        'font-size: 12px',
        'padding: 4px 8px',
        'background: transparent',
        'border-radius: 0 0 4px 4px'
    ].join(';');

    console.log('%c📊 Dashboard Teaser Easter Egg!', style);
    console.log('%cYou found it. Like the dashboard itself — everything is zero cost.', styleEnd);
    console.log('%cCurious how it works? %chttps://github.com/Takosaga', style, 'color: #d9723a; font-weight: bold;', styleEnd);
})();

let rafScheduled = false;
let lastScrollY = -1;
let lastRunTime = 0;

window.addEventListener('scroll', () => {
    const now = Date.now();
    if (now - lastRunTime < 100) return;

    const currentScrollY = window.pageYOffset;
    if (Math.abs(currentScrollY - lastScrollY) > 5 && !rafScheduled) {
        rafScheduled = true;
        requestAnimationFrame(() => {
            try {
                highlightNavLinks();
            } finally {
                rafScheduled = false;
                lastRunTime = Date.now();
            }
        });
    }
});
