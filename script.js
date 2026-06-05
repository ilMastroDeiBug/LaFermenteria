// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. Bubble Animation Engine (Perpetual Micro-Interactions)
const canvas = document.getElementById('bubbleCanvas');
const ctx = canvas.getContext('2d');

let bubbles = [];

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
resize();

class Bubble {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 100;
        this.size = Math.random() * 4 + 1;
        this.speed = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.5;
    }
    update() {
        this.y -= this.speed;
        if (this.y < -100) this.reset();
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 155, 130, ${this.opacity})`;
        ctx.fill();
    }
}

function initBubbles() {
    for (let i = 0; i < 50; i++) {
        bubbles.push(new Bubble());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbles.forEach(b => {
        b.update();
        b.draw();
    });
    requestAnimationFrame(animate);
}

initBubbles();
animate();

// 2. GSAP Scroll Choreography (Advanced Motion 8-10)
const revealElements = document.querySelectorAll('.reveal-text, .reveal-card');

revealElements.forEach((el) => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
        },
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "expo.out"
    });
});

// Parallax Hero Effect (Rule 4)
window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 30;
    const yPos = (clientY / window.innerHeight - 0.5) * 30;

    gsap.to('.hero-blob', {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out"
    });
});

// 3. Tactile Feedback on Buttons (Rule 5)
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('mousedown', () => {
        gsap.to(btn, { scale: 0.95, duration: 0.1 });
    });
    btn.addEventListener('mouseup', () => {
        gsap.to(btn, { scale: 1, duration: 0.2, ease: "elastic.out(1, 0.3)" });
    });
});