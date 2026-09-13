// 1. Dynamic Rounded Favicon
function setRoundedFavicon(src) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width || 64;
        canvas.height = img.height || 64;
        const ctx = canvas.getContext('2d');
        
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        const favicon = document.getElementById('favicon');
        if (favicon) {
            favicon.href = canvas.toDataURL('image/png');
        }
    };
}
setRoundedFavicon('images/logo2.jpg');

// 2. Animazioni apparizione bottiglie allo scroll
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.15 
    });

    const bottles = document.querySelectorAll('.product-svg, .bottle-inclined');
    bottles.forEach(bottle => observer.observe(bottle));
});