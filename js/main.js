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

let rafScheduled = false;
let lastScrollY = -1;

window.addEventListener('scroll', () => {
    const currentScrollY = window.pageYOffset;
    if (Math.abs(currentScrollY - lastScrollY) > 1 && !rafScheduled) {
        rafScheduled = true;
        requestAnimationFrame(() => {
            try {
                highlightNavLinks();
            } finally {
                rafScheduled = false;
            }
        });
    }
});
