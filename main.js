import data from './brand_data.json' assert { type: 'json' };

document.addEventListener('DOMContentLoaded', () => {

    lucide.createIcons();


    const storyContainer = document.getElementById('brand-story-content');
    data.brand_story.forEach(paragraph => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        storyContainer.appendChild(p);
    });


    const logoGrid = document.getElementById('logo-grid');
    data.logo_concepts.forEach((concept, index) => {
        const card = document.createElement('div');
        card.className = 'logo-card p-6 rounded-[2rem] border border-white/10 group';
        card.innerHTML = `
            <div class="aspect-square rounded-2xl overflow-hidden mb-6 bg-white flex items-center justify-center p-4">
                <img src="${concept.image}" alt="${concept.title}" class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500">
            </div>
            <h3 class="text-xl font-black mb-3 italic uppercase text-[#2ECC71]">Concept 0${index + 1}</h3>
            <h4 class="text-lg font-bold mb-3 text-white">${concept.title}</h4>
            <p class="text-sm text-slate-400 leading-relaxed">${concept.philosophy}</p>
        `;
        logoGrid.appendChild(card);
    });


    gsap.registerPlugin(ScrollTrigger);


    gsap.from('.hero-content > *', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: 'power4.out'
    });


    const sections = ['#story', '#logos', '#visuals'];
    sections.forEach(selector => {
        gsap.from(selector, {
            scrollTrigger: {
                trigger: selector,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
    });


    gsap.to('.hero-image', {
        scrollTrigger: {
            trigger: '.hero-image',
            scrub: true
        },
        y: -100
    });


    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
});
