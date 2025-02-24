AOS.init({
    once: true,  // Evita que las animaciones se repitan innecesariamente
    duration: 800,  // Hace que todas las animaciones sean más fluidas
    easing: 'ease-out'
});

document.querySelectorAll('.timeline-step').forEach(element => {
    let animationFrame;

    element.addEventListener('mousemove', (e) => {
        if (animationFrame) cancelAnimationFrame(animationFrame);

        animationFrame = requestAnimationFrame(() => {
            const { offsetWidth: width, offsetHeight: height } = element;
            const { offsetX: x, offsetY: y } = e;

            const xPercent = (x / width) * 100;
            const yPercent = (y / height) * 100;

            const moveX = (xPercent - 50) * 0.2; 
            const moveY = (yPercent - 50) * 0.2; 

            element.style.transform = `rotateX(${moveY}deg) rotateY(${moveX}deg) translateY(-3px) scale(1.02)`; 
        });
    });

    element.addEventListener('mouseleave', () => {
        element.style.transition = 'transform 0.2s ease-out';
        element.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
    });
});