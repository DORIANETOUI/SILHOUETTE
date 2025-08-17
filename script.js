gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // GSAP Timeline pour l'animation initiale
    const tl = gsap.timeline();

    // Apparition du header et des liens de nav
    tl.fromTo('header', {
        opacity: 0,
        y: -100
    }, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out"
    })
    .fromTo('.nav-link-item', {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out"
    }, '<0.5'); // Décale légèrement l'apparition des liens

    // Animation d'ouverture du Hero (Perspective Reveal)
    tl.to('.hero-section', {
        transform: 'perspective(1000px) rotateX(0deg)',
        duration: 2,
        ease: "power3.inOut"
    }, '<')
    .fromTo('.hero-bg-overlay', {
        opacity: 1
    }, {
        opacity: 0.4,
        duration: 1.5
    }, '<0.5')
    .fromTo('.hero-content', {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out"
    }, '<0.8')
    .fromTo('.slogan, .cta-btn', {
        opacity: 0,
        y: 20
    }, {
        opacity: 1,
        y: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out"
    }, '<'); // Décale l'apparition du slogan et du CTA
    
});

// Animation de la section "À propos" avec ScrollTrigger
gsap.from(".about-img-1", {
    scrollTrigger: {
        trigger: ".about-images-container",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.8,
    rotate: -10,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".about-img-2", {
    scrollTrigger: {
        trigger: ".about-images-container",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.6,
    rotate: 10,
    duration: 1.2,
    delay: 0.3,
    ease: "power2.out"
});

gsap.from(".about-img-3", {
    scrollTrigger: {
        trigger: ".about-images-container",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.7,
    rotate: -15,
    duration: 1.2,
    delay: 0.6,
    ease: "power2.out"
});

gsap.from(".about-text-box", {
    scrollTrigger: {
        trigger: ".about-text-box",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
});


// Fonctionnalité de retournement de carte
const modelCards = document.querySelectorAll('.model-card');

modelCards.forEach(card => {
    const flipBtn = card.querySelector('.flip-card-btn');
    const backSide = card.querySelector('.model-card-back');

    // Écouteur pour retourner la carte au clic sur le bouton "Retourne-moi"
    if (flipBtn) {
        flipBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            card.classList.add('flipped');
        });
    }

    // Écouteur pour revenir à l'image en cliquant sur le verso de la carte
    if (backSide) {
        backSide.addEventListener('click', (e) => {
            e.stopPropagation();
            card.classList.remove('flipped');
        });
    }
});



// Fonctionnalité du Carrousel
const carousel = document.querySelector('.models-carousel');
const prevBtn = document.querySelector('.carousel-control-prev');
const nextBtn = document.querySelector('.carousel-control-next');
const cards = document.querySelectorAll('.model-card');
const cardWidth = cards[0].getBoundingClientRect().width;
const cardMargin = 24;

// Fonction de défilement
function scrollCarousel(direction) {
    const scrollDistance = cardWidth + cardMargin;
    if (direction === 'next') {
        carousel.scrollBy({ left: scrollDistance, behavior: 'smooth' });
    } else {
        carousel.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
    }
}

// Gestion des clics sur les boutons
prevBtn.addEventListener('click', () => {
    scrollCarousel('prev');
});

nextBtn.addEventListener('click', () => {
    scrollCarousel('next');
});

// Écouteur pour le bouton "Retourne-moi"
const flipBtns = document.querySelectorAll('.flip-card-btn');
flipBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Empêche l'événement de se propager au conteneur de la carte
        const card = btn.closest('.model-card');
        card.classList.toggle('flipped');
    });
});

// Animation GSAP pour l'apparition des éléments
gsap.from(".models-title", {
    scrollTrigger: {
        trigger: "#models",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".model-card", {
    scrollTrigger: {
        trigger: "#models",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.9,
    stagger: 0.2,
    duration: 1.2,
    ease: "power2.out"
});

// Données pour la galerie
const galleryImages = [
    { src: 'images/img3.jpg', rotation: 'rotate(-5deg)' },
    { src: 'images/img4.jpg', rotation: 'rotate(10deg)' },
    { src: 'images/img5.jpg', rotation: 'rotate(-8deg)' },
    { src: 'images/img7.jpg', rotation: 'rotate(15deg)' },
    { src: 'images/img8.jpg', rotation: 'rotate(-12deg)' },
    { src: 'images/img9.jpg', rotation: 'rotate(7deg)' },
    { src: 'images/img10.jpg', rotation: 'rotate(-3deg)' },
    { src: 'images/img1.jpg', rotation: 'rotate(10deg)' },
    { src: 'images/img2.jpg', rotation: 'rotate(-6deg)' },
    { src: 'images/img3.jpg', rotation: 'rotate(9deg)' },
    { src: 'images/img6.jpg', rotation: 'rotate(-11deg)' },
    { src: 'images/mannequin.jpg', rotation: 'rotate(4deg)' },
];

const galleryContainer = document.querySelector('.gallery-container');

// Fonction pour générer la galerie
function createGallery() {
    galleryImages.forEach(imgData => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');
        item.style.transform = imgData.rotation;

        const img = document.createElement('img');
        // MODIFICATION : On utilise data-src au lieu de src
        img.setAttribute('data-src', imgData.src);
        img.alt = 'Image de la galerie';

        item.appendChild(img);
        galleryContainer.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. D'abord, on crée les éléments
    createGallery();

    // 2. Ensuite, on lance l'animation GSAP
    gsap.from('.gallery-title', {
        scrollTrigger: {
            trigger: '#gallery',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power2.out'
    });
    
    gsap.from('.gallery-item', {
        scrollTrigger: {
            trigger: '#gallery',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power2.out'
    });
    
    // NOUVEAU : Implementation du Lazy Loading avec Intersection Observer
    // ---
    const galleryItems = document.querySelectorAll('.gallery-item img');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                if (src) {
                    img.src = src; // Charge l'image
                    img.removeAttribute('data-src'); // Nettoie l'attribut
                    observer.unobserve(img); // Arrête d'observer l'image
                }
            }
        });
    }, {
        rootMargin: '0px 0px 50px 0px', // Charge l'image 50px avant qu'elle entre dans le viewport
        threshold: 0.01 // Déclenche l'événement dès que 1% de l'élément est visible
    });

    galleryItems.forEach(img => {
        observer.observe(img);
    });
    // ---
});

// Animation de la section "Services"
gsap.from(".services-title", {
    scrollTrigger: {
        trigger: "#services",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".service-item", {
    scrollTrigger: {
        trigger: "#services",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    scale: 0.9,
    stagger: 0.2,
    duration: 1.2,
    ease: "power2.out"
});

// Animation de la section "Contact"
gsap.from(".contact-title", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".contact-text, .contact-icon", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1.2,
    ease: "power2.out"
});

gsap.from(".contact-form", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.9,
    duration: 1.2,
    ease: "power2.out"
});

