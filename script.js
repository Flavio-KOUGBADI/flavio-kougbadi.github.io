// ─── i18n: FR / EN translations ─────────────────────────────────────
const translations = {
    fr: {
        // Navigation
        'nav.about': 'À propos',
        'nav.skills': 'Compétences',
        'nav.certifications': 'Certifications',
        'nav.projects': 'Projets',
        'nav.contact': 'Contact',
        'nav.cv': 'CV',

        // ARIA labels
        'aria.lang-toggle': 'Changer de langue',
        'aria.menu.open': 'Ouvrir le menu',
        'aria.menu.close': 'Fermer le menu',

        // Hero
        'hero.greeting': 'Bonjour, je suis',
        'hero.name': 'Flavio KOUGBADI',
        'hero.title': 'Étudiant en Informatique ',
        'hero.title.accent': 'orienté Data & IA',
        'hero.description': 'Étudiant en fin de 1ère année à Epitech Bénin, je m\'oriente vers la Data et l\'IA. Polyvalent, je réalise également du développement web et de la conception d\'applications mobiles avec l\'aide de l\'IA. J\'aime automatiser les processus récurrents pour résoudre des problèmes concrets.',
        'hero.cta.projects': 'Voir mes projets',
        'hero.cta.cv': 'Mon CV',

        // About
        'about.title': 'À propos de moi',
        'about.p1': 'Étudiant en fin de première année à <strong>Epitech Bénin</strong>, je m\'oriente activement vers les domaines de la <strong>Data</strong> et de l\'<strong>Intelligence Artificielle</strong>.',
        'about.p2': 'Polyvalent et autonome grâce à la pédagogie par projets (PBL), je réalise également du développement web et j\'utilise l\'IA pour créer des applications mobiles. Pour moi, coder doit servir à <strong>résoudre des problèmes concrets</strong> et non pas coder pour le simple fait de coder.',
        'about.p3': 'Très à l\'aise avec la communication et le travail d\'équipe, je suis orienté résultats et j\'aime particulièrement concevoir des scripts en Python pour automatiser les tâches récurrentes.',
        'about.stat1.value': '1 an',
        'about.stat1.label': 'de code intensif',
        'about.stat2.value': '10+',
        'about.stat2.label': 'projets Epitech validés',
        'about.cta': 'Télécharger mon CV',

        // Skills
        'skills.title': 'Compétences',
        'skills.g1.title': 'Data & IA',
        'skills.g1.badge': 'Orienté / Débutant',
        'skills.g1.desc': 'Premiers pas en Data Science à travers la modélisation prédictive (Tardis), l\'analyse de données historiques et l\'initiation aux concepts de l\'IA.',
        'skills.g2.title': 'Python & Automatisation',
        'skills.g2.badge': 'Avancé',
        'skills.g2.desc': 'Développement de scripts d\'automatisation pour optimiser les processus récurrents, manipulation de données et algorithmique.',
        'skills.g3.title': 'Mobile & IA assistée',
        'skills.g3.badge': 'Intermédiaire',
        'skills.g3.desc': 'Conception et prototypage d\'applications mobiles de A à Z (ex : Objectif Bac) assistés par des outils et API d\'intelligence artificielle.',
        'skills.g4.title': 'Développement Web',
        'skills.g4.badge': 'Intermédiaire',
        'skills.g4.desc': 'Conception d\'interfaces web responsives, dynamiques et modernes orientées expérience utilisateur.',
        'skills.g5.title': 'Langage C',
        'skills.g5.badge': 'Avancé',
        'skills.g5.desc': 'Bases solides en programmation système Epitech : gestion de la mémoire, pointeurs, appels système Unix.',
        'skills.g6.title': 'Unix & Shell',
        'skills.g6.badge': 'Avancé',
        'skills.g6.desc': 'Scripting Shell (Bash), maîtrise complète de l\'environnement Linux, Makefile, compilation et gestion de versions.',

        // Certifications
        'certs.title': 'Certifications',
        'certs.c1.title': 'Fondamentaux de la Cybersécurité',
        'certs.c1.issuer': 'IBM',
        'certs.c2.title': 'Maîtrise des Fondamentaux d\'Internet',
        'certs.c2.issuer': 'MTN Academy',
        'certs.c3.title': 'Développement Web',
        'certs.c3.issuer': 'Sololearn',
        'certs.c4.title': 'Introduction à C++',
        'certs.c4.issuer': 'Sololearn',
        'certs.c5.title': 'C intermédiaire',
        'certs.c5.issuer': 'Sololearn',
        'certs.view': 'Voir la certification',

        // Projects
        'projects.title': 'Projets',
        'projects.p1.desc': 'Recréation du célèbre jeu vidéo Duck Hunt. Utilisation de la bibliothèque graphique CSFML pour la gestion des fenêtres, des sprites, des événements et des animations.',
        'projects.p2.desc': 'Simulation 2D d\'un système de radar de contrôle aérien avec de nombreux avions et tours de contrôle. Optimisation avec un Quadtree pour gérer efficacement les collisions.',
        'projects.p3.desc': 'Recodage de la commande système <code>top</code> sous Linux. Parsing du dossier <code>/proc</code> pour récupérer en temps réel les informations sur les processus et les ressources système.',
        'projects.p4.desc': 'Développement d\'un interpréteur de commandes Unix (shell) complet de A à Z. Implémentation des pipes, redirections, variables d\'environnement et d\'un éditeur de ligne avancé.',
        'projects.p5.desc': 'Mon tout premier projet en Data Science : création d\'un modèle prédictif de retards de train basé sur l\'analyse de données historiques de la SNCF.',
        'projects.p6.desc': 'Application mobile développée de A à Z avec assistance de l\'IA pour aider mon cousin à réviser ses cours d\'Histoire-Géographie la veille du Baccalauréat.',
        'projects.p7.desc': 'Installation et configuration de serveurs SSH et multimédia sous Rocky OS, sécurisation avec Fail2ban et mise en place d\'un reverse proxy Caddy.',
        'projects.tag.maths': 'Maths',
        'projects.tag.system': 'Système',
        'projects.tag.ml': 'Machine Learning',
        'projects.tag.ds': 'Data Science',
        'projects.tag.mobile': 'Mobile App',
        'projects.tag.ai': 'IA Assistée',
        'projects.tag.edu': 'Éducation',
        'projects.tag.security': 'Sécurité',

        // Contact
        'contact.title': 'Contact',
        'contact.text': 'Je suis à la recherche d\'un stage pour consolider mes acquis et apporter ma valeur à votre équipe. N\'hésitez pas à me contacter.',
        'contact.cta': 'Dites bonjour',

        // Footer
        'footer': '&copy; 2026 Flavio KOUGBADI. Conçu et développé avec passion.'
    },

    en: {
        // Navigation
        'nav.about': 'About',
        'nav.skills': 'Skills',
        'nav.certifications': 'Certifications',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'nav.cv': 'Resume',

        // ARIA labels
        'aria.lang-toggle': 'Switch language',
        'aria.menu.open': 'Open menu',
        'aria.menu.close': 'Close menu',

        // Hero
        'hero.greeting': 'Hello, I am',
        'hero.name': 'Flavio KOUGBADI',
        'hero.title': 'Computer Science Student ',
        'hero.title.accent': 'Data & AI focused',
        'hero.description': 'First-year student at Epitech Bénin, focusing on Data and AI. Versatile, I also do web development and design mobile applications with the help of AI. I enjoy automating repetitive processes to solve concrete problems.',
        'hero.cta.projects': 'View my projects',
        'hero.cta.cv': 'My Resume',

        // About
        'about.title': 'About me',
        'about.p1': 'First-year student at <strong>Epitech Bénin</strong>, actively focusing on <strong>Data</strong> and <strong>Artificial Intelligence</strong>.',
        'about.p2': 'Versatile and autonomous thanks to project-based learning (PBL), I also do web development and use AI to build mobile applications. For me, code should <strong>solve concrete problems</strong> — not just code for the sake of coding.',
        'about.p3': 'Comfortable with communication and teamwork, I am results-oriented and particularly enjoy designing Python scripts to automate repetitive tasks.',
        'about.stat1.value': '1 year',
        'about.stat1.label': 'of intensive coding',
        'about.stat2.value': '10+',
        'about.stat2.label': 'completed Epitech projects',
        'about.cta': 'Download my Resume',

        // Skills
        'skills.title': 'Skills',
        'skills.g1.title': 'Data & AI',
        'skills.g1.badge': 'Focused / Beginner',
        'skills.g1.desc': 'First steps in Data Science through predictive modeling (Tardis), historical data analysis and an introduction to AI concepts.',
        'skills.g2.title': 'Python & Automation',
        'skills.g2.badge': 'Advanced',
        'skills.g2.desc': 'Building automation scripts to optimize repetitive processes, data manipulation and algorithms.',
        'skills.g3.title': 'Mobile & AI-assisted',
        'skills.g3.badge': 'Intermediate',
        'skills.g3.desc': 'End-to-end design and prototyping of mobile apps (e.g. Objectif Bac) powered by AI tools and APIs.',
        'skills.g4.title': 'Web Development',
        'skills.g4.badge': 'Intermediate',
        'skills.g4.desc': 'Building responsive, dynamic and modern web interfaces focused on user experience.',
        'skills.g5.title': 'C Language',
        'skills.g5.badge': 'Advanced',
        'skills.g5.desc': 'Solid foundation in Epitech system programming: memory management, pointers, Unix system calls.',
        'skills.g6.title': 'Unix & Shell',
        'skills.g6.badge': 'Advanced',
        'skills.g6.desc': 'Shell scripting (Bash), full mastery of the Linux environment, Makefile, compilation and version control.',

        // Certifications
        'certs.title': 'Certifications',
        'certs.c1.title': 'Cybersecurity Fundamentals',
        'certs.c1.issuer': 'IBM',
        'certs.c2.title': 'Internet Fundamentals Mastery',
        'certs.c2.issuer': 'MTN Academy',
        'certs.c3.title': 'Web Development',
        'certs.c3.issuer': 'Sololearn',
        'certs.c4.title': 'Introduction to C++',
        'certs.c4.issuer': 'Sololearn',
        'certs.c5.title': 'Intermediate C',
        'certs.c5.issuer': 'Sololearn',
        'certs.view': 'View certification',

        // Projects
        'projects.title': 'Projects',
        'projects.p1.desc': 'Recreation of the famous Duck Hunt video game. Using the CSFML graphics library for window management, sprites, events and animations.',
        'projects.p2.desc': '2D simulation of an air traffic control radar system with many planes and control towers. Optimized with a Quadtree for efficient collision handling.',
        'projects.p3.desc': 'Reimplementation of the Linux <code>top</code> system command. Parsing the <code>/proc</code> directory to fetch real-time information on processes and system resources.',
        'projects.p4.desc': 'Building a complete Unix command interpreter (shell) from scratch. Implementation of pipes, redirections, environment variables and an advanced line editor.',
        'projects.p5.desc': 'My very first Data Science project: a predictive model for train delays based on historical SNCF data analysis.',
        'projects.p6.desc': 'Mobile app built end-to-end with AI assistance to help my cousin revise his History-Geography lessons the night before the Baccalauréat.',
        'projects.p7.desc': 'Installation and configuration of SSH and media servers on Rocky OS, hardening with Fail2ban and setup of a Caddy reverse proxy.',
        'projects.tag.maths': 'Math',
        'projects.tag.system': 'System',
        'projects.tag.ml': 'Machine Learning',
        'projects.tag.ds': 'Data Science',
        'projects.tag.mobile': 'Mobile App',
        'projects.tag.ai': 'AI-Assisted',
        'projects.tag.edu': 'Education',
        'projects.tag.security': 'Security',

        // Contact
        'contact.title': 'Contact',
        'contact.text': 'I am looking for an internship to consolidate my skills and bring value to your team. Feel free to reach out.',
        'contact.cta': 'Say hello',

        // Footer
        'footer': '&copy; 2026 Flavio KOUGBADI. Designed and developed with passion.'
    }
};

// ─── Language state ─────────────────────────────────────────────────
let currentLang = (() => {
    try {
        return localStorage.getItem('lang') || 'fr';
    } catch (_) {
        return 'fr';
    }
})();

function applyTranslations(lang) {
    currentLang = lang;
    try { localStorage.setItem('lang', lang); } catch (_) {}
    document.documentElement.lang = lang;

    const dict = translations[lang];

    // Text / HTML content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            // innerHTML to preserve inline <strong>, <code> tags
            el.innerHTML = dict[key];
        }
    });

    // ARIA labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        if (dict[key] !== undefined) {
            el.setAttribute('aria-label', dict[key]);
        }
    });

    // Lang toggle button shows the OTHER language
    const langCurrent = document.querySelector('.lang-current');
    if (langCurrent) {
        langCurrent.textContent = lang === 'fr' ? 'EN' : 'FR';
    }

    // Refresh menu button aria-label based on current state
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navEl   = document.getElementById('mobile-nav');
    if (menuBtn) {
        const isOpen = navEl && navEl.classList.contains('open');
        menuBtn.setAttribute('aria-label',
            isOpen ? dict['aria.menu.close'] : dict['aria.menu.open']);
    }
}

// ─── Apply translations ASAP (before full DOMContentLoaded to reduce FOUC) ──
// Walk the document as soon as the script runs (end of body).
applyTranslations(currentLang);

document.addEventListener('DOMContentLoaded', () => {

    // ─── Mobile nav ─────────────────────────────────────────────────
    const menuBtn    = document.getElementById('mobile-menu-btn');
    const mobileNav  = document.getElementById('mobile-nav');
    const navOverlay = document.getElementById('nav-overlay');

    // FIX: Gestion simplifiée et stable du menu
    function openMenu() {
        mobileNav.classList.add('open');
        navOverlay.classList.add('open');
        menuBtn.setAttribute('aria-expanded', 'true');

        // On change l'icône
        const icon = menuBtn.querySelector('i');
        if(icon) icon.className = 'fa-solid fa-xmark';

        // Verrouillage simple
        document.body.classList.add('menu-open');
    }

    function closeMenu() {
        mobileNav.classList.remove('open');
        navOverlay.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');

        const icon = menuBtn.querySelector('i');
        if(icon) icon.className = 'fa-solid fa-bars';

        // Déverrouillage
        document.body.classList.remove('menu-open');
    }

    menuBtn.addEventListener('click', () => {
        mobileNav.classList.contains('open') ? closeMenu() : openMenu();
    });

    navOverlay.addEventListener('click', closeMenu);

    // Close drawer when a link is tapped
    mobileNav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // ─── Language toggle ─────────────────────────────────────────────
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    langToggleBtn.addEventListener('click', () => {
        applyTranslations(currentLang === 'fr' ? 'en' : 'fr');
    });

    // ─── Blob parallax ──────────────────────────────────────────────
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

    // ─── Navbar scroll ──────────────────────────────────────────────
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

    // ─── Scroll reveal ──────────────────────────────────────────────
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

    // ─── Smooth scrolling ───────────────────────────────────────────
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
