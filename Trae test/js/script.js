document.addEventListener('DOMContentLoaded', () => {
    
    // Custom Cursor Logic
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
    
    window.addEventListener('mousemove', (e) => {
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            outline.style.left = e.clientX + 'px';
            outline.style.top = e.clientY + 'px';
        }, 50);
    });

    // Hover effect for interactive elements
    const links = document.querySelectorAll('a, button, .bento-item');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            outline.style.backgroundColor = 'rgba(230, 126, 34, 0.1)';
        });
        link.addEventListener('mouseleave', () => {
            outline.style.transform = 'translate(-50%, -50%) scale(1)';
            outline.style.backgroundColor = 'transparent';
        });
    });

    // Parallax Hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const img = document.querySelector('.parallax-img');
        if(img) img.style.transform = `translateY(${scrolled * 0.4}px)`;
    });

    // Countdown Logic
    const countdownDate = new Date().getTime() + (24 * 60 * 60 * 1000);
    const updateCountdown = () => {
        const now = new Date().getTime();
        const dist = countdownDate - now;
        
        const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((dist % (1000 * 60)) / 1000);

        const hMod = document.getElementById('h-mod');
        const mMod = document.getElementById('m-mod');
        const sMod = document.getElementById('s-mod');

        if(hMod) hMod.innerText = h.toString().padStart(2, '0');
        if(mMod) mMod.innerText = m.toString().padStart(2, '0');
        if(sMod) sMod.innerText = s.toString().padStart(2, '0');
    };
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Reveal on Scroll
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Form Submission
    const form = document.getElementById('reservation-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const message = `Bonjour Egù ! Je suis ${name}. Je réserve mon plat d'igname pilé à 2500F. Contact : ${phone}`;
            window.open(`https://wa.me/22900000000?text=${encodeURIComponent(message)}`, '_blank');
        });
    }
});