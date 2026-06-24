document.addEventListener('DOMContentLoaded', () => {

    // ─── Mobile nav (FIX: was non-functional) ───────────────────────────
    const menuBtn    = document.getElementById('mobile-menu-btn');
    const mobileNav  = document.getElementById('mobile-nav');
    const navOverlay = document.getElementById('nav-overlay');

    function openMenu() {
        mobileNav.classList.add('open');
        navOverlay.classList.add('open');
        menuBtn.setAttribute('aria-expanded', 'true');
        menuBtn.querySelector('i').className = 'fa-solid fa-xmark';
    }

    function closeMenu() {
        mobileNav.classList.remove('open');
        navOverlay.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.querySelector('i').className = 'fa-solid fa-bars';
    }

    menuBtn.addEventListener('click', () => {
        mobileNav.classList.contains('open') ? closeMenu() : openMenu();
    });

    navOverlay.addEventListener('click', closeMenu);

    // Close drawer when a link is tapped
    mobileNav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // ─── Blob parallax ──────────────────────────────────────────────────
    // FIX: wrapped in prefers-reduced-motion check
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        const blob1 = document.querySelector('.blob-1');
        const blob2 = document.querySelector('.blob-2');

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            if (blob1) blob1.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
            if (blob2) blob2.style.transform = `translate(${-x * 40}px, ${-y * 40}px)`;
        });
    }

    // ─── Navbar scroll ──────────────────────────────────────────────────
    const navbar = document.querySelector('.navbar');

    function updateNavbar() {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        highlightNavLink();
    }

    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();

    function highlightNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    }

    // ─── Scroll reveal (FIX: motion as enhancement — content visible by default) ──
    // CSS sets opacity:0 only inside prefers-reduced-motion:no-preference,
    // so this JS only adds the .active class; no content is ever gated.
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });

    reveals.forEach(el => revealObserver.observe(el));

    // ─── Smooth scrolling ───────────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
