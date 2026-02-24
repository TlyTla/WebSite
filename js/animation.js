window.addEventListener('load', function() {
    const bob = document.querySelector('.box');
    if (!bob) return;
    gsap.to(bob, {
        scale: 1.2,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
});