document.addEventListener('DOMContentLoaded', () => {
    const scrollToBottomBtn = document.getElementById('scrollToBottom');

    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let ticking = false;

    function updateButtonVisibility() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Scroll hacia abajo
            scrollToBottomBtn.classList.add('hide');
        } else {
            // Scroll hacia arriba
            scrollToBottomBtn.classList.remove('hide');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateButtonVisibility);
            ticking = true;
        }
    });

    scrollToBottomBtn.addEventListener('click', () => {
        const scrollDistance = 1200; // Distancia a desplazarse en píxeles
        const targetScroll = window.pageYOffset + scrollDistance;
        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    });
});
